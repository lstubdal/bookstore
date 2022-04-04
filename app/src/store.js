export default {
    state() {
        return {
            allBooks: null,
            genres: [],
            latestNews: null,
            mostPopular: null,
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
        addAllBooks(state, books) {
            state.allBooks = books;
        },

        addGenres(state, genres) {
            state.genres = genres;
        },

        updateLatestNews(state, news) {
            state.latestNews = news;
        },

        updateMostPopular(state, popular) {
            state.mostPopular = popular
        }
    }
}