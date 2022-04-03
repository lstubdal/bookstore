<template>
    <div class="frontpage">
       <Header />
       
    </div>
</template>

<script>
    import Header from '../components/Header.vue';

    export default {
        data() {
            return {
            
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
