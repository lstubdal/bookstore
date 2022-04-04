<template>
    <div class="container">
        <Header />
        <GenresNavigation :genreList="genres" />

        <div v-if="currentBook"> <!-- just create currentbook variable  -->
            <h1>{{ currentBook.title }}</h1>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import GenresNavigation from './GenresNavigation.vue';

    export default {
        props: {
            book_slug: {
                type: String
            }
        },

        components: {
            Header,
            GenresNavigation
        },

        computed: {
            books() {
                return this.$store.getters.getAllBooks;
            },

            genres() {
                return this.$store.getters.getGenres;
            }
        },
        
        created() {
            console.log('genres', this.genres)
            return this.currentBook = this.books.find(book => book.slug.current === this.book_slug);
        }


    }
</script>

<style>
    .container {
        border: var(--default);
        margin: var(--small);
        font-family: var(--main-font);
    }
</style>