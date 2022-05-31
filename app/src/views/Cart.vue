<template>
  <div class="cart">
      <BackToFrontpage class="cart__backToFrontpage" />

      <h2 class="cart__title">SHOPPINGCART</h2>
      <div v-if="cart.length === 0" class="cart__emptyAlert">Your cart is empty!</div>
      
      <section v-else class="cart__products" v-for="(book, index) in cart">
            <div class="cart__product">
                <img :src="book.cover.asset.url" class="cart__product-bookCover">

                <div class="cart__product-information">
                    <span>{{ book.price }},-</span>

                    <h3 class="cart__product-title">{{ book.title }}</h3>

                    <div class="quantity">
                        <button @click="decreaseQuantity(index, book)">
                            <img src="/icons/decrease.svg" alt="increase button">
                        </button>

                        <span>{{ book.quantity }}</span>

                        <button @click="increaseQuantity(index)">
                            <img src="/icons/increase.svg" alt="increase button">
                        </button>
                    </div>
                </div>

                <button class="cart__product-remove" @click="removeFromCart(book)">
                    <img src="/icons/remove.svg" alt="trash icon">
                </button>
            </div>
        </section>

        <section v-if="totalSum !== 0" class="cart__checkout">
            <span class="cart__checkout-sum">Total sum: {{ totalSum }} kr</span>
            <button class="cart__checkout-button" @click="updateTotalSoldSanity">GO TO CHECKOUT</button>
        </section>
    </div>
</template>

<script>
    import BackToFrontpage from '../components/BackToFrontpage.vue';
    import viewMixin from '../mixins/viewMixin';

    export default {
        mixins: [viewMixin],

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
            },

            updateTotalSoldSanity() {
                this.cart.forEach(book => {
                    this.updateTotalSold(book._id, book);
                })

                this.$store.dispatch('emptyCartInLocalStorage');
            }
        },

        components: {
            BackToFrontpage
        }
    }
</script>

<style>
    .cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 60%;
        background-color: var(--light);
        position: relative; /* for backToFrontpage comp. */
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
        display: flex;
        justify-content: center;
        font-size: 1.4em;
        padding: var(--padding-small);
        margin: 2% 20%;
    }

    .cart__product {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .cart__product-information {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cart__product-title {
        color: var(--highlight);
        padding: var(--padding-medium) 0%var(--padding-large) 0%;
    }

    .cart__product-bookCover {
        width: 20%;
        padding: var(--padding-small);
    }

    .cart__product-remove {
        background: transparent;
        border: none;
    }

    .cart__product-remove img {
        width: 50%;
        height: 50%;
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

    @media screen and (max-width: 1200px) {
        .cart__title {
            font-size: 2em;
        }

        .cart__checkout-sum {
            font-size: 1em;
            padding: var(--padding-medium);
        }

        .cart__backToFrontpage {
            display: none;
        }

        .cart__checkout {
            width: 100%;
        }
    }

    @media screen and (max-width: 1000px) {
        .cart__products {
            flex-direction: column;
        }

        .cart__product-title {
            font-size: 1em;
        }
        
    }

</style>