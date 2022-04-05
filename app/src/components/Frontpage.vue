<template>
    <div v-if="loading" class="loadingPage">Loading all the books...</div> 
    <div v-else class="frontpage">
       <Header />
       <GenresNavigation :genreList="genres"/>  <!-- slow load? -->

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
                mailInput: ''
            }
        },

        components: {
            Header,
            GenresNavigation,
            BookPreview,
            Footer
        },

        async created() {
            const booksQuery = ` 
                *[_type == 'book'] | order(title asc) {
                    ...,
                    
                    author-> {
                        name
                    },
                    
                    genre-> {
                        name
                    },
                    
                    cover {
                        asset-> {
                        url
                        }
                    },

                    publisher-> {
                        name
                    },

                    slug {
                        current
                        }
                    }`

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

                    cover {
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

                    cover{
                        asset-> {
                            url
                        }
                    },

                    price,

                    slug {
                        current
                    }
                }`
            
            // test change title yellow book
            const mutation = `{ 
                "mutations": [
                    {
                    "patch": {
                        "id": "34831dfd-2825-4bb1-a19b-eed8bf263c59", 
                        "set": {
                            '[_id == 34831dfd-2825-4bb1-a19b-eed8bf263c59].title' : 
                                "test sanity mutations"
                            },
                        }
                    }
                ]
            }`
                
            // fetch data from sanity then commit to store
            const books = await sanity.fetch(booksQuery); 
            this.$store.commit('addAllBooks', books);

            console.log('boooooks', this.allBooks)

            const genres = await sanity.fetch(genresQuery); 
            this.$store.commit('addGenres', genres);

            const news = await sanity.fetch(latestNewsQuery);
            this.$store.commit('updateLatestNews', news);

            const popular = await sanity.fetch(mostPopularQuery);
            this.$store.commit('updateMostPopular', popular);

            this.loading = false;

            // SANITY MUTATIONS
            const apiVersion = 'v2022-04-02' //'2021-10-21'
            const projectId = 'cuc1osaz'
            const dataset = 'production'
            const projectAccessToken = 'skCFxFunKNDkxvgvxwT21bp3EP3feLWZqzqQHg4F7ghAEiflLEYsMBTZmDNDckOk4sCd5EFBFkfOgsptKV6k4O7qZAB9wDhGKU4qEXADM0KKFP5ojxbU1pm0JyNKedLFbYNaIXw9mlptqi0GIo1c2OeIWRmNGxSTcJiAg0g7Ouqb04oYdksp'

            /* const changeYellow = await sanity.fetch(`https://${projectId}.api.sanity.io${apiVersion}/data/mutate/${dataset}`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${projectAccessToken}` // set up token from manage io
                },
                body: JSON.stringify(mutation)
            }); */

            /* const json = await changeYellow.json();
            return json */
        },

        computed: {
            latestNews() {
                return this.$store.getters.getLatestNews;
            },

            mostPopular() {
                return this.$store.getters.getMostPopular;
            },

            genres() {
                return this.$store.getters.getGenres;
            },
            
            allBooks() {
                return this.$store.getters.getAllBooks;
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
