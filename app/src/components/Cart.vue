<template>
    <div v-if="showCart" class="fullCart" @click="toggleCart">
        <h2 class="fullCart__title">SHOPPINGCART</h2>

        <div class="fullCart__products" v-for="book in cart">
            <div class="fullCart__product">{{ book.title }}</div>
        </div>

        <div>Total sum</div>

        <div>GO TO CHECKOUT</div>

    </div>

    <div v-else class="cart" @click="toggleCart">
        <img src="/icons/cart.svg" alt="cart icon">
        <p class="cart__items"> ({{ totalItems }})</p>
        <p>shoppingcart</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showCart: false
            }
        },

        methods: {
            toggleCart() {
                return this.showCart = !this.showCart;
            }
        },

        computed: {
            cart() {
                return this.$store.getters.getCart;
            },

            totalItems() {
                return this.cart.length === 0 ? 'no items' : this.cart.length
            }
        }
    }
</script>

<style>
    .fullCart {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 165vh;
        background-color: var(--light);
        margin: var(--small);
        padding: var(--padding-medium);
        cursor: pointer;
        background-color: red;
    }

    .fullCart__title {
        font-size: 3em;
    }

    .fullCart__products {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .fullCart__product {
        padding: var(--padding-large);
    }

    .cart {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 33%);
        align-items: center;
        padding: var(--padding-medium) 0% var(--padding-medium) var(--padding-medium) ;
        border-left: var(--default);
        cursor: pointer;
    }

    .cart__items {
        font-size: 1em;
        color: var(--highlight);
        margin: var(--margin-medium);
    }

    .cart:hover {
        color: var(--highlight);
    }
</style>