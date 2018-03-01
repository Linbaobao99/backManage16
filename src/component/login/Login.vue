<template>
    <div class="login">
        <section>
            <el-form :model="ruleForm2" label-position="top" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="uname">
                    <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="upwd">
                    <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm2: {
        uname: "admin",
        upwd: "123456"
      },
      rules2: {
        uname: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        upwd: [
          {
            min: 3,
            max: 10,
            required: true,
            message: "密码长度为3~10的英文或数字",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$axios.post(this.$api.login, this.ruleForm2).then(res => {
        if (res.data.status == 0) {
          this.$alert("登录成功","提示",{
              callback:()=>{
                  this.$router.push({name:'admin'});
                  localStorage.setItem('name',JSON.stringify(res.data.message));
              }
          })
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login {
  background-color: aquamarine;
  height: 100%;
  section {
    width: 400px;
    height: 280px;
    border: 3px solid #fff;
    border-radius: 10px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 15px;
  }
}
</style>