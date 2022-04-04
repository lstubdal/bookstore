<template>
    <div v-if="loading" class="loadingPage">Loading books...</div> 
    <div v-else class="frontpage">
       <Header />
       <GenresNavigation :genreList="genres"/>

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

        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import GenresNavigation from '../components/GenresNavigation.vue';
    import BookPreview from '../components/BookPreview.vue';
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
                maxPreviewBooks: 4, // limit to 4 books on frontpage
            }
        },

        components: {
            Header,
            GenresNavigation,
            BookPreview,
            Footer
        },

        async created() {
            const booksQuery = `*[_type == "book"]` // access all books
            const genresQuery = `
                *[_type == "genre"]{
                    name,

                    slug {
                        current
                    }
                }`

            // find the newest books based on published year, newest first 
            const latestNewsQuery = ` 
                *[_type == "book"] | order(yearOfPublication desc) { 

                    title,
                    
                    author-> {
                        name
                    },

                    bookCover {
                        asset-> {
                            url
                        }
                    },

                    price,

                    slug {
                        current
                    }
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

                    price,

                    slug {
                        current
                    }
                }`
                
            // store data from sanity in arrays
            this.books = await sanity.fetch(booksQuery); 
            this.genres = await sanity.fetch(genresQuery); 
            this.latestNews = await sanity.fetch(latestNewsQuery);
            this.mostPopular = await sanity.fetch(mostPopularQuery);
            
            this.loading = false;
        },

        computed: {
           
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
        border: var(--default);
        margin: var(--small);
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
