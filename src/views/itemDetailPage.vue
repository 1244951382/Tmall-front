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

    <!-- 商品详情展示 -->
    <div class="item-detail-box">
      <el-page-header class="page-header" @back="$router.back(-1)" content="商品详情">
      </el-page-header>
      <el-container class="detail-box">
        <el-header>
          <h1>{{ itemDetail.itemName }}</h1>
        </el-header>
        <el-container class="detail-describe-box">
          <el-aside class="detail-image-box">
            <el-image :src="itemDetail.itemImgUrl"
                      style="height: 300px; display: flex; border-radius: 6px;"></el-image>
          </el-aside>
          <el-container>
            <el-main>
              <h4>产地：{{ itemParams.producPlace }}</h4>
              <h4>保质期：{{ itemParams.footPeriod }}</h4>
              <h4>包装方式：{{ itemParams.packagingMethod }}</h4>
              <h4>重量：{{ itemParams.weight }}</h4>
              <h4>保存方法：{{ itemParams.storageMethod }}</h4>
              <h4>食用方法：{{ itemParams.eatMethod }}</h4>
              <h3 style="color: rgb(255, 155, 99);">价格：{{ itemDetail.itemPrice }}</h3>
              <el-button icon="el-icon-shopping-cart-1" class="addBtn" @click="addShopCart()">添加购物车
              </el-button>
            </el-main>
          </el-container>
        </el-container>
        <el-footer class="other-items-box">
          <h6>其他推荐：</h6>
          <div class="other-items">
            <ul class="other-ul">
              <li class="other-item" v-for="item in itemList" :key="item.id">
                <a @click="changeItemId(item.id)">
                  <!-- 商品图片 -->
                  <div class="other-item-ph">
                    <img :src="item.itemImgUrl" width="115px" height="115px" class="radius-image"/>
                  </div>
                  <!-- 商品名字 -->
                  <div class="other-item-title">{{ item.itemName }}</div>
                </a>
              </li>
            </ul>
          </div>
        </el-footer>
      </el-container>

    </div>


    <!-- //商品详情展示 -->

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
  name: 'itemDetailPage',
  data() {
    return {
      itemId: "",
      itemDetail: {},
      itemParams: {},
      itemList: [],
      userInf: {},
      shopcartForm: {},
    }
  },
  created() {
    this.itemId = this.$route.query.itemId;
    this.getItemById();
    this.getItemsParamById();
    this.getOtherItems();
    this.getUserInf();
  },
  methods: {
    //添加购物车
    addShopCart() {
      this.shopcartForm.itemName = this.itemDetail.itemName;
      this.shopcartForm.itemImgUrl = this.itemDetail.itemImgUrl;
      this.shopcartForm.itemPrice = this.itemDetail.itemPrice;
      this.request.post("/shopcart", this.shopcartForm).then(res => {
        if (res) {
          this.$message.success("保存成功!")
        } else {
          this.$message.error("保存失败!")
        }
      })
    },
    //获取用户信息
    getUserInf() {
      var str = localStorage.getItem("user");
      this.userInf = JSON.parse(str);
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
    // 查询商品
    getItemById() {
      this.request.get("/items/" + this.itemId)
          .then(res => {
            this.itemDetail = res.data;
          })
    },
    // 查询指定id商品的参数
    getItemsParamById() {
      this.request.get("/items-param/itemParams", {
        params: {
          itemId: this.itemId
        }
      }).then(res => {
        this.itemParams = res.data;
      })
    },
    // 随机查询
    getOtherItems() {
      this.request.get("/items/rand").then(res => {
        this.itemList = res.data;
      }).catch((err) => {
        console.log(err)
      });
    },
    //改变itemId
    changeItemId(id) {
      this.$router.replace({
        path: "/detail",
        query: {
          itemId: id
        }
      })
      this.$router.go(0);
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
