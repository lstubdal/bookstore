<template>
  <div class="cart">
        <h2 class="cart__title">SHOPPINGCART</h2>

        <div v-if="cart.length === 0" class="cart__emptyAlert">Your cart is empty!</div>
        <section v-else class="cart__products" v-for="(book, index) in cart">
            <div class="cart__product">
                <img :src="book.cover.asset.url" class="cart__product-bookCover">
                <h3>{{ book.title }}</h3>
                <span>{{ book.price }},-</span>

                <div class="quantity">
                    <button @click="decreaseQuantity(index, book)">
                        <img src="/icons/decrease.svg" alt="increase button">
                    </button>

                    <span>{{ book.quantity }}</span>

                    <button @click="increaseQuantity(index)">
                        <img src="/icons/increase.svg" alt="increase button">
                    </button>
                </div>

                <button class="cart__product-remove" @click="removeFromCart(book)">
                    <img src="/icons/remove.svg" alt="trash icon">
                </button>
            </div>
        </section>

        <section v-if="totalSum !== 0" class="cart__checkout">
            <span class="cart__checkout-sum">Total sum: {{ totalSum }} kr</span>
            <button class="cart__checkout-button">GO TO CHECKOUT</button>
        </section>
    </div>
</template>

<script>
    export default {
        computed: {
            cart() {
                return this.$store.getters.getCart;
            },

            totalSum() {
                return this.$store.getters.getTotalSum;
            },
        },

        methods: {
            removeFromCart(book) {
                this.$store.dispatch('removeFromCart', book);
            },

            increaseQuantity(index) {
                this.$store.dispatch('increaseQuantity', index);
            },

            decreaseQuantity(index, book) {
                this.$store.dispatch('decreaseQuantity', index, book);
            }
        }
    }
</script>

<style>
    .cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 50%;
        background-color: var(--light);
        margin: var(--small);
        padding: var(--padding-medium);
        cursor: pointer;
    }

    .cart__emptyAlert {
        font-size: 2em;
        color: var(--highlight)
    }

    .cart__title {
        font-size: 3em;
    }

    .cart__products {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 1.4em;
        padding: var(--padding-medium);
    }

    .cart__product {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: var(--padding-large);
    }

    .cart__product-bookCover {
        width: 10%;
    }

    .cart__product-remove {
        background: transparent;
        border: none;
    }

    .cart__product-remove img {
        background: transparent;
        border: none;
    }

    .quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
    }

    .quantity button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .quantity img {
        width: 60%;
    }

    .cart__checkout {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 1.6em;
        padding: var(--padding-medium);
        color: var(--highlight);
    }

    .cart__checkout-sum {
        font-size: 1.5em;
        padding: var(--padding-medium);
    }

    .cart__checkout-button {
        width: 30%;
        background-color: transparent;
        padding: var(--padding-medium);
        border-radius: 0.2em;
        border-color: var(--highlight);
        color: var(--highlight);
    }

    .cart__checkout-button:hover {
        color: var(--light);
        background: var(--highlight);
    }
</style>