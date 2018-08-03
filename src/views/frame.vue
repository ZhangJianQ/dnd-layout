<template lang="pug">
    el-container
        el-aside(width="200px")
            tools
        el-container
            el-main
                main
            el-aside(width="200px") aside
</template>

<script>
    import Tools from './tools.vue';
    import Main from './main.vue';

    export default{
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            Tools,
            Main
        }
    }
    
</script>