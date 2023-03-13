<template>
  <div>
    <!--header-->
    <header id="site-header" class="fixed-top">
      <div class="container">
        <nav class="navbar navbar-expand-lg stroke p-0">
          <!-- logo -->
          <h1>
            <a class="navbar-brand" href="/home">
              <img src="../assets/images/logo.png" alt="logo" title="logo" style="height:45px;"/> Tmall
            </a>
          </h1>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-lg-5 mr-lg-auto">
              <li class="nav-item @@home__active">
                <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>

            <!--搜索框-->
            <div class="navbar-nav search-right nav-item dropdown">
              <div class="navbar-nav search-right nav-item dropdown">
                <el-input placeholder="请输入内容" v-model="itemName" style="margin-top: 15px;">
                </el-input>
              </div>
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false" @click="load">
                <span class="fa fa-search"></span>
              </a>
            </div>
            <!--//搜索框-->

            <!-- 头像 -->
            <el-dropdown>
              <div>
                <el-avatar :src="userInf.avatar"></el-avatar>
              </div>
              <el-dropdown-menu slot="dropdown" style="width: 100px; text-align: center">
                <el-dropdown-item style="font-size: 14px; padding: 5px 0">
                  <router-link to="/person">
                    个人信息
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item style="font-size: 14px; padding: 5px 0">
                  <router-link to="/shopcart">
                    购物车
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item style="font-size: 14px; padding: 5px 0">
									<span @click="logout">
										退出登录
									</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>
        </nav>
      </div>
    </header>
    <!--/header-->

    <!-- 个人信息 -->
    <div class="box">
      <el-page-header class="page-header" @back="$router.back(-1)" content="个人信息">
      </el-page-header>
      <el-card class="card-box">
        <div class="person-box-img">
          <el-image :src="userInf.avatar" style="width: 200px; height: 200px;"></el-image>
        </div>
        <el-form label-width="80px" size="small" class="person-box-form">
          <el-form-item label="用户名">
            <el-input v-model="form.username" disabled autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.nickname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="头像地址">
            <el-input v-model="form.avatar" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="save">保 存</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>

    <!-- footer -->
    <footer class="py-5">
      <div class="container pt-md-5">
        <div class="footer-logo mb-lg-5 mb-4 text-center">
          <a class="navbar-brand" href="/home"><span class="fa fa-bell-o"></span> Tmall</a>
        </div>
        <div class="footer-grid">
          <div class="w3l-copyright text-center">
            <div class="social text-center">
              <ul class="d-flex justify-content-center">
                <li class="mx-md-2 mx-1"><a href="#url" class="facebook"><span
                    class="fab fa-facebook-f"></span></a></li>
                <li class="mx-md-2 mx-1"><a href="#url" class="twitter"><span
                    class="fab fa-twitter"></span></a></li>
                <li class="mx-md-2 mx-1"><a href="#url" class="rss"><span class="fas fa-rss"></span></a>
                </li>
                <li class="mx-md-2 mx-1"><a href="#url" class="linkedin"><span
                    class="fab fa-linkedin-in"></span></a></li>
                <li class="mx-md-2 mx-1"><a href="#url" class="google"><span
                    class="fab fa-google-plus"></span></a></li>
              </ul>
            </div>
            <p class="mt-4">© 2022 Tmall. All Rights Reserved | Design by <a href="http://w3layouts.com/"
                                                                             target="=_blank"> Charon.Wang
            </a></p>
          </div>
        </div>

      </div>
    </footer>
    <!-- footer -->

    <!-- move top -->
    <button type="button" @click="topFunction" id="movetop" title="Go to top">
      &#10548;
    </button>
  </div>
</template>

<script>
export default {
  name: 'personPage',
  data() {
    return {
      itemList: [],
      total: 0,
      pageNum: 1,
      pageSize: 15,
      currentPage: 1,
      itemName: "",
      userInf: {},
      form: {},
    }
  },
  created() {
    this.load();
    this.getUserInf();
    this.getInf();
  },
  methods: {
    //保存
    save() {
      this.request.post("/user", this.form).then(res => {
        if (res) {
          this.$message.success("保存成功");
        } else {
          this.$message.error("保存失败");
        }
      })
    },
    //获取用户信息
    getUserInf() {
      var str = localStorage.getItem("user");
      this.userInf = JSON.parse(str);

    },
    //获取用户信息
    getInf() {
      this.request.get("/user/username/" + this.userInf.username).then(res => {
        if (res.code == '200') {
          this.form = res.data
        }
      })
    },
    //退出登录
    logout() {
      this.$store.commit("logout")
      this.$message.success("退出成功")
    },
    //当用户单击按钮时，滚动到文档顶部
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    // 将数据库查询操作封装
    load() {
      this.request.get("/items/page", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          itemName: this.itemName
        }
      }).then(res => {
        if (res.data.total >= 1) {
          this.itemList = res.data.records;
          this.total = res.data.total;
        } else if (res.data.total == 0) {
          this.$message("没有找到噢！");
        }
      }).catch((err) => {
        console.log(err)
      });
    },
  },
}

// 当用户从文档顶部向下滚动20px时，显示按钮
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

//
</script>

<style>
@import '../assets/css/style-starter.css';
@import '../assets/css/index-google-fonts.css';
@import '../assets/css/itemStyle.css';
</style>
