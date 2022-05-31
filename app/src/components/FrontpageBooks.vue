<template>
   <section class="frontpage__books">
        <h2>{{ topic }}</h2>

        <div v-for="(book, index) in books">
            <BookPreview :book="book" v-if="index < maxPreviewBooks" />
        </div>
    </section>
</template>

<script>
    import BookPreview from '../components/BookPreview.vue';

    export default {
        data() {
            return {
                maxPreviewBooks: 4, // limit to 4 books per topic on frontpage
            }
        },

        components: {
            BookPreview
        },

        props: {
            books: {
                type: Array
            },

            topic: {
                type: String
            }
        }
    }
</script>

<style>
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