export default {
    state() {
        return {
            allBooks: [],
            genres: [],
            latestNews: [],
            mostPopular: [],
            genreBooks: [],
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
            return state.mostPopular;
        },

        getGenres(state) {
            return state.genres;
        },

        getGenreBooks(state) {
            return state.genreBooks;
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

        setGenreBooks(state, genreBooks) {
            state.genreBooks = genreBooks;
        },

        updateLatestNews(state, news) {
            state.latestNews = news;
        },

        updateMostPopular(state, popular) {
            state.mostPopular = popular;
        },

        /* spør alejandro actions og mutations */
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