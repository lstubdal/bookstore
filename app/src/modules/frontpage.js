export default {
    state() {
        return {
            latestNews: [],
            mostPopular: [],
        }
    },

    getters: {
        getLatestNews(state) {
            return state.latestNews;
        },

        getMostPopular(state) {
            return state.mostPopular;
        },
    },

    mutations: {
        updateLatestNews(state, news) {
            state.latestNews = news;
        },

        updateMostPopular(state, popular) {
            state.mostPopular = popular;
        },
    }
}