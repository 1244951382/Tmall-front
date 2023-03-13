<template>
  <div class="signinform">
    <!-- container -->
    <div class="container">
      <!-- main content -->
      <div class="w3l-form-info">
        <div class="w3_info">
          <h2>Login</h2>
          <el-form :model="user" :rules="rules" ref="loginForm">
            <div class="input-group">
              <span><i class="fas fa-user" aria-hidden="true"></i></span>
              <input id="username" type="text" placeholder="Please input Username" required
                     v-model="user.username">
            </div>
            <div class="input-group">
              <span><i class="fas fa-key" aria-hidden="true"></i></span>
              <input id="password" type="Password" placeholder="Please input Password" required
                     v-model="user.password">
            </div>
            <!-- <div class="form-row bottom"> -->
            <!-- <div class="form-check">
              <input type="checkbox" id="remenber" name="remenber" value="remenber">
              <label for="remenber"> 记住我? </label>
            </div>
            <a href="#url" class="forgot">忘记密码?</a> -->
            <!-- </div> -->
            <button id="login" class="btn btn-primary btn-block" type="button" @click="login">Login</button>
          </el-form>
          <p class="continue"><span> Login </span></p>
          <p class="account">还没有账号? <a @click="$router.push('/register')">Signup</a></p>
        </div>
      </div>
      <!-- //main content -->
    </div>
    <!-- //container -->
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur'
          }
        ],
      }
    }
  },
  methods: {
    login() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) { // 表单校验合法
          this.request.post("/front/login", this.user).then((res) => {
            if (res.code == '200') {
              localStorage.setItem("user", JSON.stringify(res.data)) // 存储用户信息到浏览器
              console.log(res.data)
              //动态设置当前用户的路由
              // setRoutes()
              this.$router.push("/home")
              this.$message.success("登陆成功")
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      });
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/google-fonts.css';
</style>
