<template>
    <div class="header">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                你好,{{uname}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="b">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
  data() {
    return {
      uname: JSON.parse(localStorage.getItem("name")).uname
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("退出登录," + this.uname);
      this.$router.push({name:'login'});
      localStorage.removeItem('name');
    }
  }
};
</script>

<style scoped>
.header {
  text-align: right;
}
</style>