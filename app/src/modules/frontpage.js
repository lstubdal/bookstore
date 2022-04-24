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
        setLatestNews(state, news) {
            state.latestNews = news;
        },

        setMostPopular(state, popular) {
            state.mostPopular = popular;
        }
    },

    actions: {
        updateLatestNews({ commit }, latestNews) {
            commit('setLatestNews', latestNews);
        },

        updateMostPopular({ commit }, mostPopular) {
            commit('setMostPopular', mostPopular);
        }
    }
}