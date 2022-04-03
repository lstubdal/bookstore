<template>
    <div v-if="loading">Loading books...</div> 
    <div v-else class="frontpage">
       <Header />
       <section class="frontpage__genres">
           <!-- remeber add routerlink to genresFullpage -->
           <div v-for="genre in genres" class="frontpage__genre">{{ genre.name }}</div>
        </section>

        <main class="frontpage__main">
            <section class="frontpage__news">
                <h2>LATEST NEWS</h2>

                <div v-for="(book,index) in latestNews" @mouseover="this.hover = true" @mouseleave="this.hover = false">
                    <div v-if="index < maxPreviewBooks" class="preview" >
                        <h3 class="preview__title">{{ book.title }}</h3>
                        <p class="preview__author">{{ book.author.name }}</p>
                        <img :src="book.bookCover.asset.url" alt="book cover" class="preview__image">
                        <p class="preview__price">{{ book.price }},-</p>

                        <button v-show="hover" class="preview__hover">
                            <p>add to cart</p>
                            <img src="/icons/cart-small.svg" alt="mini cart icon">
                        </button>
                    </div>
                </div>
            </section>

            <section class="frontpage__popular" >
                <div v-for="(book, index) in mostPopular" @mouseover="this.hover = true" @mouseleave="this.hover = false">
                    <div v-if="index < maxPreviewBooks" class="preview" >
                        <h3 class="preview__title">{{ book.title }}</h3>
                        <p class="preview__author">{{ book.author.name }}</p>
                        <img :src="book.bookCover.asset.url" alt="book cover" class="preview__image">
                        <p class="preview__price">{{ book.price }},-</p>

                        <button v-show="hover" class="preview__hover">
                            <p>add to cart</p>
                            <img src="/icons/cart-small.svg" alt="mini cart icon">
                        </button>
                    </div>
                </div>

                <h2>MOST POPULAR</h2>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';

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
                loading: true,
                books: null,
                genres: null,
                latestNews: [],
                mostPopular: [],
                maxPreviewBooks: 4, // limit to 4 books on frontpage
                hover: false
            }
        },

        components: {
            Header,
            Footer
        },

        async created() {
            const booksQuery = `*[_type == "book"]` // access all books
            const genresQuery = `*[_type == "genre"]`

            // find the newest books based on published year, newest first 
            const latestNewsQuery = ` 
                *[_type == "book"] | order(yearOfPublication desc) { 

                    title,
                    
                    author-> {
                        name
                    },

                    bookCover{
                        asset-> {
                            url
                        }
                    },

                    price
                }`

            // find the most popular books based on total sold value
            const mostPopularQuery = `
                *[_type == 'book'] | order(totalSold desc) {
                    title,
  
                    author-> {
                        name
                    },

                    bookCover{
                        asset-> {
                            url
                        }
                    },

                    price
                }
            `
            // store data from sanity in arrays
            this.books = await sanity.fetch(booksQuery); 
            this.genres = await sanity.fetch(genresQuery); 
            this.latestNews = await sanity.fetch(latestNewsQuery);
            this.mostPopular = await sanity.fetch(mostPopularQuery);
            
            this.loading = false;
        },

        computed: {
            findMostPopular() {
                // update based on sold variable
            },

            getRandomIndex() {
                return Math.floor(Math.random()*10) // return random integer
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
        border: var(--default);
        margin: var(--small);
        font-family: var(--main-font);
    }

    .frontpage__genres {
        height: 12vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: var(--default);
        padding: var(--padding-small);
    }

    .frontpage__genre {
        padding: var(--padding-medium);
        font-size: 1.5em;
        font-weight: var(--body);
    }

    .frontpage__main {
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

    .preview {
        height: 300px;
        width: 210px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: var(--margin-large);
        cursor: pointer;
    }

    .preview__title {
        font-size: 1.3em;
        padding-bottom: var(--padding-small);
    }

    .preview__author {
        font-size: 1.2em;
        color: var(--main);
        padding-bottom: var(--padding-medium);
    }

    .preview__image {
        width: 75%;
        height: 75%;
        padding: var(--padding-small);
    }

    .preview__price {
        font-size: 1.3em;
        color: var(--main);
        text-align: center;
        padding: var(--padding-small);
    }

    .preview__hover {
        height: 8%;
        width: 10%;
        position: absolute;
        bottom: 20;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: transparent;
        color: var(--highlight);
        border-left: none;
        border-right: none;
        border-top: var(--default);
        border-bottom: var(--default);
        border-color: var(--main);
        cursor: pointer;
    }

    .preview__hover p {
        font-size: 1.5em;
    }

</style>
