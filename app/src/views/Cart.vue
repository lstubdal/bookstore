<template>
  <div class="cart">
        <h2 class="cart__title">SHOPPINGCART</h2>

        <div class="cart__products" v-for="book in cart">
            <div class="cart__product">
                <img :src="book.cover.asset.url">
                <h3>{{ book.title }}</h3>
                <p>{{ book.price }},-</p>
                <button class="cart__product-remove" @click="removeFromCart(book)">
                    <img src="/icons/remove.svg" alt="trash icon">
                </button>
            </div>
        </div>

        <div>Total sum</div>

        <div>GO TO CHECKOUT</div>

    </div>
</template>

<script>
    export default {
        computed: {
            cart() {
                return this.$store.getters.getCart;
            },
        },

        methods: {
            removeFromCart(book) {
                console.log('fjernet')
                this.$store.commit('remove', book);
            }
        }
    }
</script>

<style>
    .cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 105%;
        background-color: var(--light);
        margin: var(--small);
        padding: var(--padding-medium);
        cursor: pointer;
    }

    .cart__title {
        font-size: 3em;
    }

    .cart__product {
        height: 100px;
        width: 500px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: var(--padding-large);
        border: var(--default);
    }

    .cart__product img {
        height: 65px;
        width: 50px;
    }

    .cart__product-remove {
        background: transparent;
        border: none;
    }

    .cart__product-remove img {
        height: 30px;
        width: 30px;
        background: transparent;
        border: none;
    }
</style>