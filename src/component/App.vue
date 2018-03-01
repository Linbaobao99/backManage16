<template>
    <router-view></router-view>
</template>

<script>
    export default {
        mounted(){
            this.$router.push({name:'admin'})
        }
    }
</script>

<style scoped>

</style>