export default {
    state() {
        return {
            currentGenre: null,
            genres: [],
            genreBooks: []
        }
    },

    getters: {
        getGenres(state) {
            return state.genres;
        },

        getGenreBooks(state) {
            return state.genreBooks;
        },

        getCurrentGenre(state) {
            return state.currentGenre;
        }
    },

    mutations: {
        setGenres(state, genres) {
            state.genres = genres;
        },

        setGenreBooks(state, genreBooks) {
            state.genreBooks = genreBooks;
        },

        setCurrentGenre(state, currentGenre) {
            state.currentGenre = currentGenre;
        }
    }
}