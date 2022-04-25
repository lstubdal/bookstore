<template>
    <div v-if="book" class="book">
        <BackToFrontpage /> 

        <div class="information">
            <img :src="book.cover.asset.url" alt="book cover" class="information__cover">

            <div class="information__details">
                <h1 clas="information__title"> {{ book.title }} </h1>
                <p class="information__author"> {{ book.author.name }} </p>
                <p class="information__price"> {{ book.price }},- </p>
                <p class="information__publisher"> {{ book.publisher.name }} {{ book.yearOfPublication}} </p>
            
                <button class="information__addToCart" @click="addToCart(book)">
                    <p>add to cart</p>
                    <img src="/icons/cart-small.svg" alt="mini cart">
                </button>
            </div>
        </div>

        <hr class="book__seperator">

        <div class="book__description">
            <h2 class="book__description-title">DESCRIPTION</h2>

            <div class="book__description-text">
                <p v-if="!readMoreClicked"> {{ book.description.slice(0, 550) }} </p>
                <p v-else> {{ book.description }} </p>
                <button @click="readMore" class="book__description-button">{{ buttonText }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import BackToFrontpage from '../components/BackToFrontpage.vue';
    import query from '../groq/book.groq?raw';
    import viewMixin from '../mixins/viewMixin';

    export default {
        data(){
            return {
                readMoreClicked: false
            }
        },

        mixins: [viewMixin],

        async created() { 
            await this.sanityFetchBook(query, {
                slug: this.$route.params.book_slug
            }) 
        },

        props: {
            book_slug: {
                type: String
            }
        },

        components: {
            BackToFrontpage
        },

        computed: {
            book() {
                return this.$store.getters.getBook;
            },

            buttonText() {
                return this.readMoreClicked ? 'Read Less' : 'Read more';
            }
        },

        methods: {
            readMore() {
                return this.readMoreClicked = !this.readMoreClicked;
            },

            addToCart(book) {
                this.$store.dispatch('addToCart', book);
            }
        },
    }
</script>

<style>
    .book {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: var(--padding-medium);
        position: relative;
    }

    .information {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 60%;
        margin-top: 100px;
    }

    .information__cover {
        width: 260px;
        height: 410px;
    }

    .information__details {
        display: flex;
        flex-direction: column;
        height: 15rem;
        justify-content: space-around;
        background-color: white ;
    }

    .information__title {
        font-size: 2.4em;
    }

    .information__author, .information__price, .information__publisher {
        color: var(--dark);
        font-size: 1.8em;
    }

    .information__addToCart {
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: transparent;
        color: var(--highlight);
        font-size: 1.5em;
        border-left: none;
        border-right: none;
        border-top: var(--default);
        border-bottom: var(--default);
        border-color: var(--main);
        padding: var(--padding-large);
        cursor: pointer;
    }


    .book__seperator {
        width: 78%;
        border-top: 1px solid var(--dark);
        margin: var(--margin-xlarge) 0%;
    }

    .book__description {
        display: flex;
        width: 65%;
    }

    .book__description-text {
        padding-left: var(--padding-large);
    }

    .book__description-button {
        background-color: transparent;
        border: 2px solid var(--highlight);
    }
</style>