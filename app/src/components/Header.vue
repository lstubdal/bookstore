<template>
        <header class="header">
            <h1 class="header__title">{{ title }}</h1>

            <Cart />
        </header>
</template>

<script>
    import Cart from '../components/Cart.vue';

    export default {
        data() {
            return {
                title: 'THE NORWEGIAN BOOKSTORE'
            }
        },

        components: {
            Cart
        }
    }
</script>

<style>
    .header {
        display: flex;
        align-items: center;
        height: 20vh;
        width: 100%;
        border-bottom: var(--default);
    }

    .header__title {
        color: var(--highlight);
        font-size: 2.5em;
        flex-grow: 1;
        text-align: center;
        padding-left: var(--padding-xlarge);
    }
</style>
