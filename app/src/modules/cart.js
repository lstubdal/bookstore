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
            state.cart.forEach(book => {
                state.totalSum += book.price;
            })
            return state.totalSum
        },
    },

    mutations: {
        add(state, book) {
            state.cart.push(book);
        },

        remove(state, book) {
            state.cart.forEach((bookInCart, index)  => {
                if (bookInCart.title === book.title) {
                    state.cart.splice(index, 1)
                }
            })
        }
    },

    actions: {
        addToCart({commit}, book) {
            commit('add', book)
        },

        removeFromCart({commit}, book) {
            commit('remove', book)
        }
    }
}