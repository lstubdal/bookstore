<template>
  <RouterLink :to="{name: 'frontpage'}" class="backToFrontpage"> &#x2190; Go back to frontpage</RouterLink>
</template>

<script>
    export default {

    }
</script>

<style>
    .backToFrontpage {
        padding: var(--padding-small);
        font-size: 1.8em;
        color: var(--highlight);
        margin-top: var(--margin-large);
        text-decoration: none;
    }

    .backToFrontpage:hover {
        color: var(--dark);
        text-decoration: underline;
    }
    
</style>