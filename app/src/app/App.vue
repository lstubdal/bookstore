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

    export default {
		mounted() {
			if (this.cart.length === 0) {
				this.$store.dispatch('updateLocalStorage'); // if empty add array to local storage
			} else {
				this.$store.dispatch('getFromLocalStorage');  // if not, get data from cart
			}
		},
		
		components: {
			Header,
			Footer
		},

		computed: {
			cart() {
				return this.$store.getts.getCart;
			}
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
