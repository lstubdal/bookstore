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

        getTotalSum(state) {
            state.totalSum = 0; // reset value for each change in cart

            state.cart.forEach(book => {
                state.totalSum += book.price * book.quantity;
            })
            return state.totalSum
        }
    },

    mutations: {
        add(state, book) {
            // find the index of book in cart if exists
            const bookIndex = state.cart.findIndex(bookInCart => bookInCart.title === book.title);

            // if book exists, increase quantity
            if(bookIndex !== -1) { 
                state.cart[bookIndex].quantity += 1;
            
            // if not, add quantity to book object
            } else {
                const bookWithQuantity = {
                    ...book,     // use spread operator to access all info about book
                    quantity: 1  // then add quantity property to object
                }
                state.cart.push(bookWithQuantity);
            }   
        },

        remove(state, book) {
            // find index of book, then use splice to remove it
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
            // convert arraty to string for localStorage
            window.localStorage.setItem('books-cart', JSON.stringify(state.cart)); 
        },

        getFromLocalStorage({ commit }) {
            // get books from local storage if not empty
            if (localStorage.getItem('books-cart') && localStorage.getItem('books-cart').length > 0) {
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