<template>
    <div class="book"> 
        <div class="information">
            <img :src="currentBook.cover.asset.url" alt="book cover" class="information__cover">

            <div class="information__details">
                <h1 clas="information__title"> {{ currentBook.title }} </h1>
                <p class="information__author"> {{ currentBook.author.name }} </p>
                <p class="information__price"> {{ currentBook.price }},- </p>
                <p class="information__publisher"> {{ currentBook.publisher.name }} {{ currentBook.yearOfPublication}} </p>
            
                <button class="information__addToCart" @click="addToCart(currentBook)">
                    <p>add to cart</p>
                    <img src="/icons/cart-small.svg" alt="mini cart">
                </button>
            </div>
        </div>

        <hr class="book__seperator">

        <div class="book__description">
            <h2 class="book__description-title">DESCRIPTION</h2>

            <div class="book__description-text">
                <p v-if="!readMoreClicked"> {{ currentBook.description.slice(0, 550) }} </p>
                <p v-else> {{ currentBook.description }} </p>
                <button @click="readMore" class="book__description-button">{{ buttonText }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import BackToFrontpage from '../components/BackToFrontpage.vue';
    import sanityClient from '@sanity/client';

    const sanity = sanityClient({ // create new sanityClient
        projectId: 'cuc1osaz', // unique project id
        dataset: 'production',
        apiVersion: '2022-04-20', // date of sClient created
        useCdn: 'false' // false local / true netlify
    })

    export default {
         data(){
            return {
                loading: true,
                currentBook: null,
                readMoreClicked: false
            }
        },

        async created() { // index 0 => første boken som blir funnet
            const query = `
                *[slug.current == $slug][0] { 
                    ...,
                    
                    title,

                    author-> {
                        name
                    },
                    
                    price,

                    publisher-> {
                        name
                    },

                    cover {
                        asset-> {
                            url
                        }
                    },

                    yearOfPublication
                }
            `

            const param = {
                slug: this.$route.params.book_slug
            }

            this.currentBook = await sanity.fetch(query, param);
            this.loading = false;

            console.log(this.currentBook.title);

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
            books() {
                return this.$store.getters.getAllBooks;
            },

            buttonText() {
                return this.readMoreClicked ? 'Read Less' : 'Read more';
            }
        },

        methods: {
            readMore() {
                return this.readMoreClicked = !this.readMoreClicked;
            },

            addToCart(currentBook) {
                this.$store.dispatch('addToCart', currentBook);
            }
        },
        
        /* created() {
            return this.currentBook = this.books.find(book => book.slug.current === this.book_slug);
        } */
    }
</script>

<style>
/*     .container {
        border: var(--default);
        margin: var(--small);
        font-family: var(--main-font);
    } */

    .information {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 90%;
    }

    .information__cover {
        width: 280px;
        height: 440px;
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

    .book {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: var(--padding-xlarge);
    }

    .book__seperator {
        width: 78%;
        border-top: 1px solid var(--dark);
        margin: var(--margin-xlarge) 0%;
    }

    .book__description {
        display: flex;
        width: 78%;
    }

    .book__description-text {
        padding-left: var(--padding-large);
    }

    .book__description-button {
        background-color: transparent;
        border: 2px solid var(--highlight);
    }
</style>