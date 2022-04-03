<template>
        <header class="header">
            <h1 class="header__title">{{ title }}</h1>

            <!-- make own component? -->
            <div class="cart">
                <img src="/icons/cart.svg" alt="cart icon">
                <p>(items)</p>
                <p>shoppingcart</p>
            </div>
        </header>
</template>

<script>
    export default {
        data() {
            return {
                title: 'THE NORWEGIAN BOOKSTORE'
            }
        }
    }
</script>

<style>
    .header {
        display: flex;
    }

    .header__title {
        color: var(--highlight);
        font-size: 2.5em;
    }

    .cart {
        display: grid;
        grid-template-columns: repeat(2, 33%);
        align-items: center;
    }
</style>
