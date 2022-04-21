import sanity from '../sanity.js';

export default {
    data() {
        return {
            loading: true,
            result: null
        }
    },

    methods: {
        async sanityFetchFrontpage(query) {
            this.result = await sanity.fetch(query);
            this.$store.commit('updateLatestNews', this.result.latestNews);
            this.$store.commit('updateMostPopular', this.result.mostPopular);
            
            this.loading = false;

            console.log('latest', this.news);
        },

        async sanityFetchGenreBooks(query, params) {
            this.result = await sanity.fetch(query, params);
            this.$store.commit('setCurrentGenre', this.result.currentGenre.name);
            this.$store.commit('setGenreBooks', this.result.genreBooks);

            this.loading = false;

            console.log('genrer books', this.genreBooks);
            console.log('current genre', this.currentGenre);
        }
    },

    computed: {
        news() {
            return this.$store.getters.getLatestNews;
        },

        genreBooks() {
            return this.$store.getters.getGenreBooks;
        },

        currentGenre() {
            return this.$store.getters.getCurrentGenre;
        }
    }
}