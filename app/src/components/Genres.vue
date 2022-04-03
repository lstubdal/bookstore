<template>
   <section class="genres">
        <!-- remeber add routerlink to genresFullpage -->
        <div v-for="genre in genreList" class="genre">{{ genre.name }}</div>
    </section>
</template>

<script>
    export default {
        props: {
            genreList: Array,
        }
    }
</script>

<style>
    .genres {
        height: 12vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: var(--default);
        padding: var(--padding-small);
    }

    .genre {
        padding: var(--padding-medium);
        font-size: 1.5em;
        font-weight: var(--body);
    }

</style>