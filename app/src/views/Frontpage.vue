<template>
    <div v-if="loading" class="loadingPage">Loading all the books...</div> 
    <div v-else class="frontpage">
        <main class="frontpage__main">
            <section class="frontpage__news">
                <h2>LATEST NEWS</h2>

                <div v-for="(book,index) in latestNews">
                    <div v-if="index < maxPreviewBooks">
                        <BookPreview :book="book" />
                    </div>
                </div>
            </section>

            <section class="frontpage__popular" >
                <div v-for="(book, index) in mostPopular">
                    <div v-if="index < maxPreviewBooks" >
                        <BookPreview :book="book" />
                    </div>
                </div>

                <h2>MOST POPULAR</h2>
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

    .frontpage__news, 
    .frontpage__popular {
        position: relative;
        display: flex;
        padding: var(--padding-medium);
    }

    .frontpage__news h2, 
    .frontpage__popular h2 {
        width: 25%;
        font-size: 1.7em;
        font-weight: var(--undertitle);
        text-decoration: underline 2px;
        padding-top: 2%;
    }

    .frontpage__news {
        justify-content: flex-start;
    }

    .frontpage__popular {
        justify-content: flex-end;
    }


</style>
