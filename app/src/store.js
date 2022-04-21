import frontpage from './modules/frontpage.js';
import cart from './modules/cart.js';
import genre from './modules/genre.js';

export default {
    state() {
        return {
            allBooks: []
        }
    },

    getters: {
        getAllBooks(state) {
            return state.allBooks;
        }
    },

    mutations: {
        setBooks(state, books) {
            state.allBooks = books;
        }
    },

    modules: {
        frontpage,
        cart,
        genre
    }
}