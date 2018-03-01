<template>
    <div>
        <el-switch style="display: block" v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="开" inactive-text="关">
        </el-switch>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value3: true,
      value4: true
    };
  }
};
</script>

<style scoped>

</style>