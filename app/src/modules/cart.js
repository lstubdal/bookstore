export default {
    state() {
        return {
            cart: [],
            totalSum: 0
        }
    },

    getters: {
        getCart(state) {
            return state.cart;
        },

        // bruke reduce?
        getTotalSum(state) {
            state.totalSum = 0; // reset value for each change in cart

            state.cart.forEach(book => {
                state.totalSum += book.price * book.quantity;
            })
            return state.totalSum
        },
/* 
        getCartLength(state) {
            return state.cart.length
        } */
    },

    mutations: {
        add(state, book) {
            
           
            const bookIndex = state.cart.findIndex(bookInCart => bookInCart.title === book.title);

            if(bookIndex !== -1) { // if book found in cart
                state.cart[bookIndex].quantity += 1;

            } else {
                const bookWithQuantity = {
                    ...book,     // get everything from book obj
                    quantity: 1  // add quantity property to object
                }
                state.cart.push(bookWithQuantity);
            }   
        },

        remove(state, book) {
            state.cart.forEach((bookInCart, index)  => {
                if (bookInCart.title === book.title) {
                    state.cart.splice(index, 1)
                }
            })
        },

        increase(state, index) {
            if(state.cart[index]) {
               state.cart[index].quantity += 1; 
            }
        },

        decrease(state, index) {
            if (state.cart[index] && state.cart[index].quantity > 0) {
                state.cart[index].quantity -= 1;
            }
            if (state.cart[index] && state.cart[index].quantity === 0) {
                state.cart.splice(index, 1); // remove book if zero quantity
            }
        },

        setBooksInCart(state, books) {
            state.cart = books;
        },

        emptyCart(state) {
            state.cart = [];
        }
    },

    actions: {
        addToCart({commit, dispatch}, book) {
          commit('add', book);
          dispatch('updateLocalStorage')
        },

        removeFromCart({commit, dispatch}, book) {
            commit('remove', book);
            dispatch('updateLocalStorage')
        },

        increaseQuantity({ commit }, index) {
            commit('increase', index)
        },

        decreaseQuantity({ commit }, index) {
            commit('decrease', index);
            
        },

        updateLocalStorage({ state }){
            window.localStorage.setItem('books-cart', JSON.stringify(state.cart)); // convert arraty to string for localStorage
        },

        getFromLocalStorage({ commit }) {
            if(localStorage.getItem('books-cart') && localStorage.getItem('books-cart').length > 0) {
                const parsedCartArray = JSON.parse(window.localStorage.getItem('books-cart')) // parse array back to use value 
                commit('setBooksInCart', parsedCartArray); // set parsed value to cart array
            }
        },

        emptyCartInLocalStorage({ commit, dispatch }) {
            commit('emptyCart') // empty cart when checkout, but not deleting array from local storage
            dispatch('updateLocalStorage');
        }

    }
}