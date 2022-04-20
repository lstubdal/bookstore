<template>
        <header class="header">
            <RouterLink :to="{ name: 'frontpage'}" class="header__title">
                <h1>{{ title }}</h1>
            </RouterLink>

            <Cart />
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
    import Cart from '../components/Cart.vue';

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

        components: {
            Cart
        },

        computed: {
            genres() {
                return this.$store.getters.getGenres;
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
