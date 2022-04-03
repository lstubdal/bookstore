<template>
   <section class="genres">
        <!-- remeber add routerlink to genresFullpage -->
        <div v-for="genre in genres" class="genre">{{ genre.name }}</div>
    </section>
</template>

<script>
    export default {
        props: {
            genres: Object,
        }
    }
</script>

<style>

</style>