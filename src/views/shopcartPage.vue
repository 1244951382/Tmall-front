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

    <!-- 购物车 -->
    <div class="box">
      <el-table :data="tableData" tooltip-effect="dark" border stripe @selection-change="handleSelectionChange"
                max-height="600px" show-summary>
        <el-table-column type="selection" width="40">
        </el-table-column>
        <el-table-column label="商品">
          <template slot-scope="scope">
            <img :src="scope.row.itemImgUrl" style="width: 100px; height: 100px; float: left;"/>
            <a
                style="float: left; margin-top: 40px; margin-left: 20px; font-size: 20px;">{{ scope.row.itemName }}</a>
          </template>
        </el-table-column>
        <el-table-column label="单价(元)" width="90" style="text-align: center;">
          <template slot-scope="scope">
            <a style="font-size: 16px;">{{ scope.row.itemPrice }}</a>
          </template>
        </el-table-column>
        <el-table-column label="数量" width="225" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-input-number size="medium" v-model="scope.row.itemAccount" :min="0"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="总价(元)" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="60">
          <template slot-scope="scope">
            <el-button @click="deleteRow(scope, tableData)" type="text" size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- //购物车 -->

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
import {param} from 'jquery';

export default {
  name: 'shopcartPage',
  data() {
    return {
      userInf: {},
      tableData: [],
      pageNum: 1,
      pageSize: 5,

    }
  },
  created() {
    this.getUserInf();
    this.load();
  },
  methods: {
    deleteRow(scope, rows) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request.delete("/shopcart/delete/" + scope.row.id).then(res => {
          if (res) {
            this.$message.success("删除成功!");
            rows.splice(scope.$index, 1);
            // this.load();
          } else {
            this.$message.error("删除失败!");
          }
        }).catch(err => {
          console.log(err);
          this.$message.error("删除失败!");
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    //获取用户信息
    getUserInf() {
      var str = localStorage.getItem("user");
      this.userInf = JSON.parse(str);
    },
    //load
    load() {
      this.request.get("/shopcart/findAll", {
        params: {
          username: this.userInf.username,
        }
      }).then(res => {
        this.tableData = res.data;
      }).catch(err => {
        console.log(err);
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
    handleSelectionChange(val) {
      this.multipleSelection = val
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
