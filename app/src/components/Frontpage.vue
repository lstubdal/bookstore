<template>
    <div v-if="loading">Loading books...</div> 

    <div v-else class="frontpage">
       <Header />
       <section class="frontpage__bookgenres">
           <!-- for each genre... -->
       </section>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';

    import sanityClient from '@sanity/client';
    const sanity = sanityClient({ // create new sanityClient
        projectId: 'cuc1osaz', // unique project id
        dataset: 'production',
        apiVersion: '2022-04.02', //today's date
        useCdn: 'false' // false local / true netlify
    })

    export default {
        data() {
            return {
                loading: true,
                result: null

            }
        },

        components: {
            Header
        }
   
    }
</script>

<style>
    .frontpage {
        display: flex;
        justify-content: center;
        align-items: center;
        border: var(--normal) solid var(--dark);
        margin: var(--small);
        font-family: var(--main-font);
    }
</style>
