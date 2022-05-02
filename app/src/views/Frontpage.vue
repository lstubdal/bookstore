<template>
    <div v-if="loading" class="loadingPage">Loading all the books...</div> 
    <div v-else class="frontpage">
        <main class="frontpage__main">
            <!-- make component?? -->
            <section class="frontpage__books">
                <h2>LATEST NEWS</h2>
                <div v-for="(book,index) in latestNews">
                    <BookPreview :book="book" v-if="index < maxPreviewBooks" />
                </div>
            </section>

            <section class="frontpage__books">
                <h2>MOST POPULAR</h2>

                <div v-for="(book, index) in mostPopular">
                    <BookPreview :book="book" v-if="index < maxPreviewBooks" />
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import query from '../groq/frontpage.groq?raw';
    import viewMixin from '../mixins/viewMixin';
    import BookPreview from '../components/BookPreview.vue';

    export default {
        data() {
            return {
                maxPreviewBooks: 4, // limit to 4 books on frontpage
            }
        },

        mixins: [viewMixin],

        components: {
            BookPreview,
        },

        async created() {
            await this.sanityFetchFrontpage(query)
        },

        computed: {
            latestNews() {
                return this.$store.getters.getLatestNews;
            },

            mostPopular() {
                return this.$store.getters.getMostPopular;
            }
        },
        
    }
</script>

<style>
    .loadingPage {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5em;
        color: var(--highlight);
        font-family: var(--main-font);
    }

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

    .frontpage__books {
        position: relative;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        padding: var(--padding-medium);
    }

    .frontpage__books h2 {
        color: var(--highlight);
        font-size: 1.7em;
        font-weight: var(--undertitle);
        padding-top: 10%;
    }


    @media screen and (max-width: 850px) {
       .frontpage__books {
            grid-template-columns: repeat(4, 1fr);
       }

       .frontpage__books h2 {
           grid-area: 1 / span 4;
           font-size: 1.5em;
           text-align: center;
           padding-top: 5%;
           
       }
    }

    @media screen and (max-width: 600px) {
       .frontpage__books {
            grid-template-columns: repeat(2, 1fr);
       }

       .frontpage__books h2 {
           grid-area: 1 / span 2;
       }
    }


</style>
