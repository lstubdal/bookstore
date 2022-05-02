<template>
    <div class="preview">
        <RouterLink :to="{ name: 'book', params: { book_slug: book.slug.current }}" class="preview__book">
            <h3 class="preview__title">{{ book.title }}</h3>
            <p class="preview__author">{{ book.author.name }}</p>
            <img :src="book.cover.asset.url" alt="book cover" class="preview__image">
            <p class="preview__price">{{ book.price }},-</p>
        </RouterLink>    

        <button class="preview__addToCart" @click="addToCart(book)">
            <p>add to cart</p>
            <img src="/icons/cart-small.svg" alt="mini cart icon">
        </button>
    </div>
</template>

<script>
    export default {
        props: {    // tar i mot book object fra bok på frontpage som blir klikket
            book: {
                type: Object
            }
        },

        methods: {
            addToCart(book) {
                this.$store.dispatch('addToCart', book);
            }
        }
    }
</script>

<style>
    .preview {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .preview__book {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: var(--margin-large);
        text-decoration: none;
        cursor: pointer;
    }

    .preview__title {
        font-size: 1.3em;
        color: var(--dark);
        padding-bottom: var(--padding-small);
    }

    .preview__author {
        font-size: 1.2em;
        color: var(--main);
        padding-bottom: var(--padding-medium);
    }

    .preview__image {
        width: 75%;
        height: 75%;
        padding: var(--padding-small);
    }

    .preview__price {
        font-size: 1.3em;
        color: var(--main);
        text-align: center;
        padding: var(--padding-small);
    }

    .preview__addToCart {
        height: 15%;
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: transparent;
        color: var(--highlight);
        border-left: none;
        border-right: none;
        border-top: var(--default);
        border-bottom: var(--default);
        border-color: var(--main);
        padding: var(--padding-medium);
        cursor: pointer;
    }

    .preview__addToCart p {
        font-size: 1.5em;
    }

    @media screen and (max-width: 1000px) {
        .preview__title {
            font-size: 1em;
        }

        .preview__author {
            font-size: 0.9em;
        }

        .preview__addToCart p {
           font-size: 0.8em;
        }  
    }

    @media screen and (max-width: 850px) {
        .preview__title {
            padding-top: 0%;
            font-size: 0.8em;
        }

        .preview__author, .preivew__price {
            font-size: 0.7em;
        }

        .preview__addToCart p {
           font-size: 0.8em;
        }  

        .preview__image {
            height: 60%;
            width: 60%;
        }
    }
</style>