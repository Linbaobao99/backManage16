<template>
    <div class="admin">
        <el-container>
            <el-aside width="200px">
                <!-- 公共左侧 -->
                <app-aside></app-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- 公共头部 -->
                    <app-header></app-header>
                </el-header>
                <el-main>
                    <!-- 变化的后台管理的子页面 -->
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from './subcom/Header.vue'
import Aside from './subcom/Aside.vue'
export default {
    components:{
        appHeader:Header,
        appAside:Aside
    }
};
</script>

<style scoped lang="less">
.admin {
  height: 100%;
  .el-header {
    line-height: 60px;
    background-color: #fca;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #cfa;
  }
}
</style>
