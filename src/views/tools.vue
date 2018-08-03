<template lang="pug">
    el-menu(
        default-active="1",
        class="el-menu-vertical-demo",
        background-color="#545c64",
        text-color="#fff",
        active-text-color="#ffd04b",
        unique-opened)
        el-submenu(:index="menu.index", v-for="menu in menus", :key="menu.index")
            template(slot="title")
                i.el-icon-location
                span {{menu.title}}
            el-menu-item(:index="menu.index + '-' + index", v-for="(subMenu, index) in menu.children", :key="index")
                i.el-icon-menu
                span(slot="title") {{subMenu.title}}
</template>

<script>
    import draggable from 'vuedraggable';
    export default{
        data(){
            return{
                menus: []
            }
        },
        created(){
            this.$http.get('/data/menus.json').then(resp=>{
                this.menus = resp.body;
            })
        },
        methods:{

        }
    }
</script>