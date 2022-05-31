<template>
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
                menuCliked: false
            }
        },

        async created() {
            await this.sanityFetch(query);
            this.$store.dispatch('updateGenres', this.result);

            console.log(this.$route.params.genre_slug)
  
        },

        /*
        Bug: Routing freezes after one route.
        This did not work, resolved with :key="$route.fullPath" (not best practice)
        
        watch: {
            genreSlug(newSlug, oldSlug) {
                if (newSlug !== oldSlug && old !== 'undefined') {
                    this.$router.push({ name: 'genre', params: { genre_slug: newSlug } })
                }
            }
        }, */

        components: {
            BackToFrontpage
        },

        computed: {
            genres() {
                return this.$store.getters.getGenres;
            },

            genreSlug() {
                return this.$route.params.genre_slug;
            }
        },

        methods: {
            toggleMenu() {
                this.menuCliked = !this.menuCliked;
            }
        }


    }
</script>

<style>
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

    @media screen and (max-width: 1000px) {
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
    }
</style>