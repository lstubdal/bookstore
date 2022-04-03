<template>
    <h1>{{ book.title}}</h1>
</template>

<script>

    export default {
        props: {
            book: {
                type: Object
            }
        }
    }
</script>

<style>

</style>