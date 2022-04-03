<template>
    <div v-if="loading">Loading books...</div> 
    <div v-else class="frontpage">
       <Header />

       <section class="genres">
           <!-- remeber add routerlink to genresFullpage -->
           <div v-for="genre in genres" class="genre">{{ genre.name }}</div>
        </section>
    </div>

</template>

<script>
    import Header from '../components/Header.vue';

    import sanityClient from '@sanity/client';
    const sanity = sanityClient({ // create new sanityClient
        projectId: 'cuc1osaz', // unique project id
        dataset: 'production',
        apiVersion: '2022-04-02', // date of sClient created
        useCdn: 'false' // false local / true netlify
    })

    export default {
        data() {
            return {
                loading: true,
                books: null,
                genres: null,
                maxFrontpageBooks: 4 // set limit to 4 books on frontpage
            }
        },

        components: {
            Header
        },

        async created() { // (remeber: update corsorigins in io.manage)
            // create query to define what data to access
            const booksQuery = `*[_type == "book"]` 
            const genresQuery = `*[_type == "genre"]`

            // store data from sanity in arrays
            this.books = await sanity.fetch(booksQuery); 
            this.genres = await sanity.fetch(genresQuery); 
            this.loading = false;
            
            console.log(this.books);
            console.log(this.genres);
        }
    }
</script>

<style>
    .frontpage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: var(--normal) solid var(--dark);
        margin: var(--small);
        font-family: var(--main-font);
    }

    .genres {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 12vh;
        width: 100%;
        padding: var(--padding-small);
    }

    .genre {
        padding: var(--padding-normal);
        font-size: 1.5em;
        font-weight: var(--body);
    }
</style>
