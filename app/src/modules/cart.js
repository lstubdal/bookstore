export default {
    state() {
        return {
            cart: []
        }
    },

    getters: {
        getCart(state) {
            return state.cart;
        }
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

    /* hvorfor?? semantisk riktig */
    actions: {
        addToCart({commit}, book) {
            commit('add', book)
        },

        removeFromCart({commit}, book) {
            commit('remove', book)
        }
    }
}