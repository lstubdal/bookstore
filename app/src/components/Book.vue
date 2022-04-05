<template>
    <div class="container">
        <Header />
        <GenresNavigation :genreList="genres" />
        <RouterLink :to="{name: 'frontpage'}"> &#x2190; Go back to frontpage</RouterLink>

        <div v-if="currentBook" class="book"> 
            <div class="book__information">
                <img :src="currentBook.cover.asset.url" alt="book cover" class="book__information-cover">

                <div class="book__information-details">
                    <h1> {{ currentBook.title }} </h1>
                    <p> {{ currentBook.author.name }} </p>
                    <p> {{ currentBook.price }},- </p>
                    <p> {{ currentBook.publisher.name }} {{ currentBook.yearOfPublication}} </p>
               
                    <button class="book__information-button">
                        <p>add to cart</p>
                        <img src="/icons/cart-small.svg" alt="mini cart">
                    </button>
                 </div>
            </div>

            <div>_____________page seperator_____________</div>

            <div class="book_description">
                <h2 class="book_description-title">DESCRIPTION</h2>
                <p> {{ currentBook.description }} </p>
            </div>

            <button>read more</button> <!-- and read less -->
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

    .book {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: var(--padding-xlarge);
    }

    .book__information {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 70%;
        background-color: red;
    }

    .book__information-cover {
        width: 280px;
        height: 450px;
    }

    .book__information-details {
        display: flex;
        flex-direction: column;
        height: 15rem;
        justify-content: space-around;
        background-color: white ;
    }
</style>