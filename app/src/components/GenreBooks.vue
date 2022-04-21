<template>
    <div v-if="loading">LOADING BOOKS</div>
    <div v-else class="genreBooks">
        <h1 class="genreBooks__title">{{ currentGenre.name }}</h1>
        
        <main class="genreBooks__books">
            <BookPreview  :book="book"  v-for="book in genreBooks" />
        </main>
    </div>
</template>

<script>
    import BookPreview from '../components/BookPreview.vue';
    import sanityClient from '@sanity/client';

    const sanity = sanityClient({ // create new sanityClient
        projectId: 'cuc1osaz', // unique project id
        dataset: 'production',
        apiVersion: '2022-04-20', // date of sClient created
        useCdn: 'false' // false local / true netlify
    })

    export default {
        data() {
            return {
                currentGenre: null,
                warning: false,
                loading: false
            }
        },

        async created() {
            /* reload crash spør */
            const genreQuery = `{
                    "currentGenre": *[slug.current == $slug][0],

                    "genreBooks": *[_type == "book" && genre._ref in *[_type=="genre" && slug.current==$slug]._id ]{
                        title,

                        author-> {
                            name
                        },

                        price,

                        cover {
                            asset-> {
                                url
                            }
                        },

                        slug {
                            current
                        }
                    }
                }`
            

             const params = {
                slug: this.$route.params.genre_slug
            }

            const books = await sanity.fetch(genreQuery, params);
            this.$store.commit('setGenreBooks', books.genreBooks); 

            console.log('GENRE BOOKS', this.genreBooks)

            const fetcehdGenre = await sanity.fetch(genreQuery, params);
            this.currentGenre = fetcehdGenre.currentGenre;

            this.loading = false;
        },

        props: {
            genre_slug: {
                type: String
            }
        },

        components: {
            BookPreview,
        },

        computed: {
            genres() {
                return this.$store.getters.getGenres;
            },

            genreBooks() {
                return this.$store.getters.getGenreBooks;
            },

            noBooksWarning() {
               if (this.genreBooks === 0) {
                   return true
               } return false
            }
        },

        methods: {
            /* findCurrentGenre() {
                this.currentGenre = this.genres.find(genre => genre.slug.current === this.genre_slug);
            }, */

            /* findBooksWithGenre() {
                this.genreBooks = this.allBooks.filter(book => book.genre.name === this.currentGenre.name); 
            } */
        },
    }
</script>

<style>
    .genreBooks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: var(--small);
    }

    .genreBooks__title {
        padding-bottom: 20px;
    }

    .genreBooks__books {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

</style>