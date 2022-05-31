import sanity from '../sanity.js';

export default {
    data() {
        return {
            loading: true,
            result: null
        }
    },

    methods: {

        async sanityFetch(query, params) {
            this.result = await sanity.fetch(query, params);
            this.loading = false; //set loading to false to asure data is fetched
        },

        updateTotalSold(bookID, book) {
            // fetch all book ids
            sanity.patch(bookID) // document id to patch
                  .inc({ totalSold: book.quantity}) // increment total when "bought"
                  .commit() // perform patch, return promise
                  .then((updatedTotalSold) => {
                      console.log('Updated', updatedTotalSold)
                  })
                  .catch((error) => {
                      console.log('Error', error);
                  })
        }
    }
}