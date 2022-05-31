export default {
    state() {
        return {
            book: null  // declare empty variable to update later
        }
    },

    getters: {
        getBook(state) {
            return state.book
        }
    },

    mutations: {
        setBook(state, book) {
            state.book = book;
        }
    },

    actions: {
        updateCurrentBook({ commit }, currentBook) {
            commit('setBook', currentBook);
        }
    }
}