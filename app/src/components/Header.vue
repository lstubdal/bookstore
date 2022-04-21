<template>
    <header class="header">
        <RouterLink :to="{ name: 'frontpage'}" class="header__title">
            <h1>{{ title }}</h1>
        </RouterLink>

        <RouterLink :to="{ name: 'cart'}" class="header__cart">
            <img src="/icons/cart.svg" alt="cart icon">
            <p class="header__cart-items"> ({{ totalItems }})</p>
            <p>shoppingcart</p>
        </RouterLink>
    </header>

    <nav class="genres">
        <div v-for="genre in genres">
            <RouterLink :to="{ name: 'genre', params: {genre_slug: genre.slug.current }}" class="genres__genre">
                <p>{{ genre.name }}</p>
            </RouterLink>
        </div>
    </nav>
</template>

<script>
    import sanityClient from '@sanity/client';

    const sanity = sanityClient({ // create new sanityClient
        projectId: 'cuc1osaz', // unique project id
        dataset: 'production',
        apiVersion: '2022-04-02', // date of sClient created
        useCdn: 'false' // false local / true netlify
    })

    export default {
        data() {
            return {
                title: 'THE NORWEGIAN BOOKSTORE'
            }
        },

        async created() {
            const genreQuery =  ` 
                *[_type == 'genre'] {
                        name,
                        
                        slug {
                            current
                        }
                    }`
            
            const genres = await sanity.fetch(genreQuery)
            this.$store.commit('setGenres', genres);
        },

        computed: {
            genres() {
                return this.$store.getters.getGenres;
            },

            cart() {
                return this.$store.getters.getCart;
            },

            totalItems() {
                return this.cart.length === 0 ? 'empty' : this.cart.length
            }
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
        display: grid;
        grid-template-columns: repeat(2, 33%);
        align-items: center;
        padding: var(--padding-medium) 0% var(--padding-medium) var(--padding-medium) ;
        border-left: var(--default);
        text-decoration: none;
        color: var(--highlight);
        cursor: pointer;
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

    .genres__genre {
        padding: var(--padding-medium);
        font-size: 1.5em;
        font-weight: var(--body);
        text-decoration: none;
        color: var(--dark);
    }

    .genres__genre:hover {
        text-decoration: underline 1px;
        color: var(--highlight);
    }
</style>
