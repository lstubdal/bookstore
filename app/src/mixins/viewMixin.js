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
            
            console.log('LATEST NEWS', this.latestNews);

            this.loading = false;
        },

        async sanityFetchGenreBooks(query, params) {
            this.result = await sanity.fetch(query, params);
            this.$store.dispatch('updateCurrentGenre', this.result.currentGenre.name);
            this.$store.dispatch('updateGenreBooks', this.result.genreBooks);

            console.log('gernrebooks', this.genreBooks);

            this.loading = false;
        },

        async sanityFetchBook(query, params) {
            this.result = await sanity.fetch(query, params);
            this.$store.dispatch('updateCurrentBook', this.result);

            this.loading = false;
        },

        async sanityFetchGenres(query) {
            this.result = await sanity.fetch(query);
            this.$store.dispatch('updateGenres', this.result);
            
            console.log('genres!!!', this.result);

            this.loading = false;
        },

        updateTotalSold(bookID, book) {
            // fetch all book ids
            sanity.patch(bookID) // document id to patch
                  .inc({ totalSold: book.quantity}) // increment total sold by 1 when "bought"
                  .commit() // perform patch, return promise
                  .then((updatedTotalSold) => {
                      console.log('oppdatert!', updatedTotalSold)
                  })
                  .catch((err) => {
                      console.log('feil!!', err);
                  })
        }
    },

    computed: {
        genreBooks() {
            return this.$store.getters.getGenreBooks;
        },

        latestNews() {
            return this.$store.getters.getLatestNews;
        }
    }

}