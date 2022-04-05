<template>
        <RouterLink :to="{ name: 'book', params: { book_slug: book.slug.current }}" class="preview"  @mouseover="this.hover = true">
            <h3 class="preview__title">{{ book.title }}</h3>
            <p class="preview__author">{{ book.author.name }}</p>
            <img :src="book.cover.asset.url" alt="book cover" class="preview__image">
            <p class="preview__price">{{ book.price }},-</p>
        </RouterLink>

        <button v-show="hover" class="preview__hover" @click="addToCart" @mouseleave="this.hover = false" >
            <p>add to cart</p>
            <img src="/icons/cart-small.svg" alt="mini cart icon">
        </button>
    
</template>

<script>
    export default {
        data() {
            return {
                hover: false
            }
        },

        props: {
            book: {
                type: Object
            }
        },

        methods: {
            addToCart() {
                window.alert('added')
            }
        }
    }
</script>

<style>
    .preview {
        height: 300px;
        width: 210px;
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

    .preview__hover {
        height: 8%;
        width: 12%;
        position: absolute;
        bottom: 20;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-left: 3.8%;
        background: transparent;
        color: var(--highlight);
        border-left: none;
        border-right: none;
        border-top: var(--default);
        border-bottom: var(--default);
        border-color: var(--main);
        cursor: pointer;
    }

    .preview__hover p {
        font-size: 1.5em;
    }
</style>