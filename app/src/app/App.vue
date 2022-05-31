<template>
	<div class="container">
		<Header />
		<RouterView :key="$route.fullPath" /> <!-- force a replacement, not best solution -->
		<Footer />
	</div>
</template>

<script>
	import Header from '../components/Header.vue';
	import Footer from '../components/Footer.vue';

    export default {
		mounted() {
			// access data from local storage in app so its availeable on all pages
			this.$store.dispatch('getFromLocalStorage');
		},
		
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
