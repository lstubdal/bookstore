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

    <nav class="genres">
        <div v-for="genre in genres">
            <RouterLink :to="{ name: 'genre', params: {genre_slug: genre.slug.current }}" class="genres__genre" active-class="active">
                <p>{{ genre.name }}</p>
            </RouterLink>
        </div>
    </nav>

    <nav class="genres--mobile">
        <div class="genres__hamburger genres__hamburger-content">
            <BackToFrontpage  v-if ="this.$route.name !== 'frontpage'" class="genre__backToFrontpage" />
            <button class="genres__hamburger-content" @click="toggleMenu">
                <span>menu</span>
                <img src="/icons/hamburger.svg" alt="hamburger menu">   
            </button>
        </div>

        <div v-if="menuCliked" v-for="genre in genres" class="genres__genre--mobile">
            <RouterLink :to="{ name: 'genre', params: {genre_slug: genre.slug.current }}" class="genres__genre--mobile" active-class="active">
                <p>{{ genre.name }}</p>
            </RouterLink>
        </div>
    </nav>
</template>

<script>
    import viewMixin from '../mixins/viewMixin';
    import query from '../groq/genres.groq?raw';
    import BackToFrontpage from '../components/BackToFrontpage.vue';

    export default {
        mixins: [viewMixin],

        data() {
            return {
                title: 'THE NORWEGIAN BOOKSTORE',
                menuCliked: false
            }
        },

        async created() {
            await this.sanityFetchGenres(query);
        },

        computed: {
            genres() {
                return this.$store.getters.getGenres;
            },

            cart() {
                return this.$store.getters.getCart;
            },

            totalItems() {
                return this.cart.length === 0 ? 'empty' : this.cart.length;
            }
        },

        methods: {
            toggleMenu() {
                this.menuCliked = !this.menuCliked;
                console.log(this.menuCliked);
            }
        },

        components: {
            BackToFrontpage
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

    .genres {
        height: 12vh;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: var(--default);
        padding: var(--padding-small);
    }

    .genres--mobile {
        display: none;
    }

    .genres__hamburger {
        display: none;
    }

    .genres__genre {
        padding: var(--padding-medium);
        font-size: 1.5em;
        font-weight: var(--body);
        text-decoration: none;
        color: var(--dark);
    }

    .genres__genre:hover, .active {
        text-decoration: underline 1px;
        color: var(--highlight);
    }

    @media screen and (max-width: 1100px) {
        .genres__genre {
            font-size: 1.2em;
        }

        .header__title h1 {
            font-size: 2em;
        }

        .header__cart-text {
            display: none;
        }
    }

    @media screen and (max-width: 870px) {
        .header {
            height: 16vh;
        }

        .genres {
            display: none;
        }

        .genres__genre {
            display: none;
        }

        .genres--mobile {
            display: block;
        }

        .genre__backToFrontpage {
            position: relative;
            font-size: 1.4em;
            margin-top: 0%;
        }

        .genres__hamburger {
            display: block;
            width: 100%;
            background-color: none;
        }

        .genres__hamburger-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: var(--padding-small);
        }

        .genres__hamburger button {
            color: var(--highlight);
            background: none; 
            border: none;
        }

        .genres__genre--mobile {
           text-align: center;
           color: var(--dark);
           text-decoration: none;
           padding: var(--padding-xsmall);         
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
