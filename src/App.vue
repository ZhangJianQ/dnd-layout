<template lang="pug">
    transition(name="router-fade", mode="out-in")
        router-view
</template>

<script>
    import 'element-ui/lib/theme-default/index.css';

    export default {
        name: 'app',
        data () {
            return {
                
            }
        }
    }
</script>
