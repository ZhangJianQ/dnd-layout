<template lang="pug">
    draggable(v-model="points", :options="{animation: 150, draggable: '.line-point', handle: '.fa-arrows'}")
</template>

<script>
    import draggable from 'vuedraggable';
    export default{

    }
</script>