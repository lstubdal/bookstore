export default {
    state() {
        return {
            allBooks: [],
            genres: [],
            latestNews: [],
            mostPopular: [],
            cart: []
        }
    },

    getters: {
        getAllBooks(state) {
            return state.allBooks;
        },

        getLatestNews(state) {
            return state.latestNews;
        },

        getMostPopular(state) {
            return state.mostPopular
        },

        getGenres(state) {
            return state.genres
        },

        getCart(state) {
            return state.cart;
        }
    },

    mutations: {
        setBooks(state, books) {
            state.allBooks = books;
        },

        setGenres(state, genres) {
            state.genres = genres;
        },

        updateLatestNews(state, news) {
            state.latestNews = news;
        },

        updateMostPopular(state, popular) {
            state.mostPopular = popular
        },

        addToCart(state, book) {
            state.cart.push(book);
        }
    },

    actions: {
        addToCart({commit}, book) {
            commit('addToCart', book)
        }
    }
}