<template>
  <div class="signinform">
    <!-- <h1>Service Login Form</h1> -->
    <!-- container -->
    <div class="container">
      <!-- main content -->
      <div class="w3l-form-info">
        <div class="w3_info">
          <h2>Signup</h2>
          <el-form :model="user" :rules="rules" ref="registerForm">
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
            <div class="input-group">
              <span><i class="fas fa-key" aria-hidden="true"></i></span>
              <input id="confirmPassword" type="Password" placeholder="Please confirm Password" required
                     v-model="user.confirmPassword">
            </div>
            <button id="register" class="btn btn-primary btn-block" type="button"
                    @click="register">Signup
            </button>
          </el-form>
          <p class="continue"><span> Signup </span></p>
          <p class="account">已有帐号? <a @click="$router.push('/login')">Login</a></p>
        </div>
      </div>
      <!-- //main content -->
    </div>
    <!-- //container -->
  </div>
</template>

<script>
export default {
  name: 'registerPage',
  data() {
    return {
      user: {
        username: "",
        password: "",
        confirmPassword: ""
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
        confirmPassword: [{
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
    register() {
      this.$refs['registerForm'].validate((valid) => {
        if (valid) { // 表单校验合法
          if (this.user.password !== this.user.confirmPassword) {
            this.$message.error("两次输入的密码不一致")
            return false
          }
          this.request.post("/front/register", this.user).then(res => {
            if (res.code == '200') {
              this.$message.success("注册成功")
              this.$router.push("/login")
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      })
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/google-fonts.css';
</style>
