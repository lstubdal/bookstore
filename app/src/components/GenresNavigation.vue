<template>
    <nav class="genres">
        <div v-for="genre in genreList">
            <RouterLink :to="{ name: 'genre', params: {genre_slug: genre.slug.current }}" class="genres__genre">
                <p>{{ genre.name }}</p>
            </RouterLink>
        </div>
    </nav>
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
        justify-content: space-around;
        align-items: center;
        border-bottom: var(--default);
        padding: var(--padding-small);
    }

    .genres__genre {
        padding: var(--padding-medium);
        font-size: 1.5em;
        font-weight: var(--body);
        text-decoration: none;
        color: var(--dark);
    }

    .genres__genre:hover {
        text-decoration: underline 1px;
        color: var(--highlight);
    }
</style>