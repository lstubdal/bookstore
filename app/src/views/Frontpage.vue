<template>
    <div v-if="loading" class="loadingPage">Loading all the books...</div> 
    <div v-else class="frontpage">
        <main class="frontpage__main">
            <section class="frontpage__news">
                <h2>LATEST NEWS</h2>

                <div v-for="(book,index) in latestNews">
                    <div v-if="index < maxPreviewBooks">
                        <BookPreview :book="book" />
                    </div>
                </div>
            </section>

            <section class="frontpage__popular" >
                <div v-for="(book, index) in mostPopular">
                    <div v-if="index < maxPreviewBooks" >
                        <BookPreview :book="book" />
                    </div>
                </div>

                <h2>MOST POPULAR</h2>
            </section>
        </main>
    </div>
</template>

<script>
    import BookPreview from '../components/BookPreview.vue';

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
                maxPreviewBooks: 4, // limit to 4 books on frontpage
            }
        },

        components: {
            BookPreview,
        },

        async created() {
            const booksQuery = `{
                    "latestNews": *[_type == 'book'] | order(yearOfPublication desc) {
                        title,

                        author-> {
                            name
                        },

                        cover {
                            asset-> {
                                url
                            }
                        },

                        price,

                        yearOfPublicaton,

                        slug {
                            current
                        }
                    },

                    "mostPopular": *[_type == 'book'] | order(totalSold desc){
                        title,
                    
                        author-> {
                            name
                        },

                        cover {
                            asset-> {
                                url
                            }
                        },

                        price,

                        slug {
                            current
                        }
                    }
                }`
                
            // fetch data from sanity then commit to store to seperate arrays
            const bookstore = await sanity.fetch(booksQuery); 
            /* this.$store.commit('setBooks', bookstore.books); */
            this.$store.commit('updateLatestNews', bookstore.latestNews);
            this.$store.commit('updateMostPopular', bookstore.mostPopular); 

            /* console.log('boooooks', this.allBooks)
            console.log('genres', this.genres)
            console.log('news', this.latestNews)
            console.log('popular', this.mostPopular) */

            this.loading = false;
        },

        computed: {
            latestNews() {
                return this.$store.getters.getLatestNews;
            },

            mostPopular() {
                return this.$store.getters.getMostPopular;
            },

            genres() {
                return this.$store.getters.getGenres;
            },
            
            allBooks() {
                return this.$store.getters.getAllBooks;
            }
        },
        
    }
</script>

<style>
    .loadingPage {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5em;
        color: var(--highlight);
        font-family: var(--main-font);
    }

    .frontpage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: var(--main-font);
    }

    .frontpage__main {
        margin-bottom: var(--margin-xlarge);
        width: 100%;
    }

    .frontpage__news, 
    .frontpage__popular {
        position: relative;
        display: flex;
        padding: var(--padding-medium);
    }

    .frontpage__news h2, 
    .frontpage__popular h2 {
        width: 25%;
        font-size: 1.7em;
        font-weight: var(--undertitle);
        text-decoration: underline 2px;
        padding-top: 2%;
    }

    .frontpage__news {
        justify-content: flex-start;
    }

    .frontpage__popular {
        justify-content: flex-end;
    }


</style>
