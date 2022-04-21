<template>
    <div v-if="loading">LOADING BOOKS</div>
    <div v-else class="genreBooks">
        <h1 class="genreBooks__title">{{ currentGenre }}</h1>
        
        <main class="genreBooks__books">
            <BookPreview  :book="book"  v-for="book in genreBooks" />
        </main>
    </div>
</template>

<script>
    import BookPreview from '../components/BookPreview.vue';
    import query from '../groq/genreBooks.groq?raw';
    import viewMixin from '../mixins/viewMixin';

    export default {
        mixins: [viewMixin],

        async created() {
            /* RELOAD CRASH HVORFOR??????????????? */
            await this.sanityFetchGenreBooks(query,{
                slug: this.$route.params.genre_slug
            })
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
            currentGenre() {
                return this.$store.getters.getCurrentGenre;
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