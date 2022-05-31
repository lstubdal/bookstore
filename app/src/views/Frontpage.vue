<template>
    <LoadingPage v-if="loading"/>

    <div v-else class="frontpage">
        <main class="frontpage__main">
            <FrontpageBooks :books="latestNews" :topic="'LATEST NEWS'" />
            <FrontpageBooks :books="mostPopular" :topic="'MOST POPULAR'" />
        </main>
    </div>
</template>

<script>
    import LoadingPage from '../components/LoadingPage.vue';
    import query from '../groq/frontpage.groq?raw';
    import viewMixin from '../mixins/viewMixin';
    import FrontpageBooks from '../components/FrontpageBooks.vue';

    export default {
        mixins: [viewMixin],

        components: {
            LoadingPage,
            FrontpageBooks
        },

        async created() {
            await this.sanityFetch(query);
            this.$store.dispatch('updateLatestNews', this.result.latestNews);
            this.$store.dispatch('updateMostPopular', this.result.mostPopular);
        },

        computed: {
            latestNews() {
                return this.$store.getters.getLatestNews;
            },

            mostPopular() {
                return this.$store.getters.getMostPopular;
            }
        }   
    }
</script>

<style>
    .frontpage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: var(--main-font);
    }

    .frontpage__main {
        margin-bottom: var(--margin-xlarge);
        width: 100%;
    }
</style>
