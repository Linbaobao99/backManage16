<template>
    <div>
        {{val}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                val: '这是测试Vue'
            }
        },
    }
</script>

<style scoped>
div{
    color: aquamarine;
    font-size: 30px;
}
</style>