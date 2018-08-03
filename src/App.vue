<template lang="pug">
    transition(name="router-fade", mode="out-in")
        router-view
</template>

<script>
    import './assets/css/reset.css';
    export default {
        data () {
            return {
                
            }
        }
    }
</script>
