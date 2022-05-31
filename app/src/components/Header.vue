<template>
    <header class="header">
        <RouterLink :to="{ name: 'frontpage'}" class="header__title">
            <h1>{{ title }}</h1>
        </RouterLink>

        <RouterLink :to="{ name: 'cart'}" class="header__cart">
            <div class="header__cart-icon">
                <img src="/icons/cart.svg" alt="cart icon">
                <p class="header__cart-items"> ({{ totalItems }})</p>
            </div>

            <p class="header__cart-text">shoppingcart</p>
        </RouterLink>
    </header>

    <NavigationGenre />   
</template>

<script>
    import BackToFrontpage from '../components/BackToFrontpage.vue';
    import NavigationGenre from '../components/NavigationGenre.vue';

    export default {
        data() {
            return {
                title: 'THE NORWEGIAN BOOKSTORE',
            }
        },

        computed: {
            cart() {
                return this.$store.getters.getCart;
            },

            totalItems() {
                return this.cart.length === 0 ? 'empty' : this.cart.length;
            }
        },

        components: {
            BackToFrontpage,
            NavigationGenre
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

    .header__title  {
        flex-grow: 1;
        text-align: center;
        text-decoration: none;
        padding-left: var(--padding-xlarge);
    }

    .header__title h1 {
        color: var(--highlight);
        font-size: 2.5em;
    }

    .header__cart {
        height: 100%;
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--highlight);
        border-left: var(--default);
        text-decoration: none;
        cursor: pointer;
        padding: var(--padding-xsmall);
    }

    .header__cart-icon {
        display: flex;
    }

    .header__cart:hover {
        color: var(--highlight);
    }

    .header__cart-items {
        font-size: 1em;
        margin: var(--margin-medium);
    }

    @media screen and (max-width: 1100px) {
        .header__title h1 {
            font-size: 2em;
        }

        .header__cart-text {
            display: none;
        }
    }

    @media screen and (max-width: 1000px) {
        .header {
            height: 16vh;
        }
        
        .header__title h1 {
            font-size: 1.5em;
        }
    }

    @media screen and (max-width: 600px) {
         .header {
            height: 10vh;
        }

        .header__title {
            font-size: 0.8em;
        }

        .header__cart-icon {
            flex-direction: column;
            align-items: center;
            padding-top: var(--margin-medium);
        }

        .header__cart-icon img {
            width: 50%;
            height: 50%;
        }
    }
</style>
