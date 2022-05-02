<template>
    <div v-if="loading">LOADING BOOKS</div>
    <div v-else class="genreBooks">
        <BackToFrontpage class="genreBooks__backToFrontpage"/>
        <h1 class="genreBooks__title">{{ currentGenre }}</h1>
        
        <section class="genreBooks__books">
            <BookPreview  :book="book"  v-for="book in genreBooks" v-if="genreBooks.length !== 0" />
            <span v-else class="genreBooks__books-warning">No books with til genre...</span>
        </section>
    </div>
</template>

<script>
    import BackToFrontpage from '../components/BackToFrontpage.vue';
    import BookPreview from '../components/BookPreview.vue';
    import query from '../groq/genreBooks.groq?raw';
    import viewMixin from '../mixins/viewMixin';

    export default {
        mixins: [viewMixin],

        async created() {
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
            BackToFrontpage
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
    }
</script>

<style>
    .genreBooks {
        position: relative;
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

    .genreBooks__books-warning {
        grid-column-start: 3;
    }

    @media screen and (max-width: 870px) {
        .genreBooks__backToFrontpage {
            display: none;;
        }
    }

</style>