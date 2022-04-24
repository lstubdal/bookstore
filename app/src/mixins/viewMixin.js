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
            this.$store.dispatch('updateLatestNews', this.result.latestNews);
            this.$store.dispatch('updateMostPopular', this.result.mostPopular);
            
            this.loading = false;
        },

        async sanityFetchGenreBooks(query, params) {
            this.result = await sanity.fetch(query, params);
            this.$store.dispatch('updateCurrentGenre', this.result.currentGenre.name);
            this.$store.dispatch('updateGenreBooks', this.result.genreBooks);

            this.loading = false;
        },

        async sanityFetchBook(query, params) {
            this.result = await sanity.fetch(query, params);
            this.$store.dispatch('updateCurrentBook', this.result);

            this.loading = false;
        }
    }
}