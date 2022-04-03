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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
        width: 100%;
        border-bottom: var(--default);
    }

    .header__title {
        color: var(--highlight);
        font-size: 2.5em;
    }

    .cart {
        position: absolute;
        right: 0;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 33%);
        align-items: center;
        padding: var(--padding-medium) 0% var(--padding-medium) var(--padding-medium) ;
        border-left: var(--default);
    }
</style>
