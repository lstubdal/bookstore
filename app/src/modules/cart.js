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
    },

    mutations: {
        add(state, book) {
            const bookIndex = state.cart.findIndex(bookInCart => bookInCart.title === book.title);

            if(bookIndex !== -1) { // if book found in cart
                state.cart[bookIndex].quantity += 1;
                console.log('qiantuty w index', state.cart[bookIndex].quantity);

            } else {
                const bookWithQuantity = {
                    ...book,     // get everything from book obj
                    quantity: 1  // add quantity property to object
                }
                state.cart.push(bookWithQuantity);
                console.log('book with quantity', bookWithQuantity);
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
            state.cart[index].quantity += 1;
            console.log('increase', state.cart[index].quantity)
        },

        decrease(state, index) {
            if (state.cart[index].quantity === 1) {
                state.cart.splice(index, 1); // remove book if zero
            }
            state.cart[index].quantity -= 1;
            /* console.log('decrease', state.cart[index].quantity) */
        }
    },

    actions: {
        addToCart({commit}, book) {
          commit('add', book);
        },

        removeFromCart({commit}, book, index) {
            commit('remove', book, index)
        },

        increaseQuantity({ commit }, index) {
            commit('increase', index)
        },

        decreaseQuantity({ commit }, index) {
            commit('decrease', index);
            
        }
    }
}