<template>
	<div class="container">
		<Header />
		<RouterView :key="$route.fullPath" /> <!-- :key => "force a replacement" of the <router-view> element / component every time a navigation event occurs (instead of reusing it) -->
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
		components: {
			Header,
			Footer
		}
    }
</script>
<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>

<!--
	Soruce key: https://vuejs.org/api/built-in-special-attributes.html#ref 
-->
