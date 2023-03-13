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
              <li class="nav-item active">
                <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item @@about__active">
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

    <div class="w3l-banner py-5">
      <div class="container py-lg-3 py-md-3">
        <div class="ban-content-inf row py-lg-3">
          <div class="maghny-gd-1 col-lg-8">
            <div class="maghny-grid">
              <figure class="effect-lily border-radius">
                <img class="img-fluid radius-image" src="../assets/images/1.jpg" alt="">
                <figcaption class="w3set-hny">
                  <div class="info">
                    <a href="#reciepe" class="receipe">Recipe</a>
                    <h4 class="top-text">奶油牛奶巧克力纸杯蛋糕</h4>
                    <p class="mt-2 d-sm-block d-none">好吃不上火！</p>
                    <div class="p-footer">
                      <aside class="p-meta-info">
                        <a href="#img" class="post-img-anchor">
                          <img src="../assets/images/a1.jpg" alt="" class="post-img"/>
                        </a>
                        <a href="#url">Elizabeth</a>
                        <span class="meta-info-date">
													<span class="fa fa-clock-o"></span> Oct 3, 2020
												</span>
                      </aside>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="maghny-gd-1 col-lg-4 mt-lg-0 mt-4 mobile-grid">
            <div class="maghny-gd-1">
              <div class="maghny-grid">
                <figure class="effect-lily border-radius">
                  <img class="img-fluid radius-image" src="../assets/images/2.jpg" alt=""/>
                  <figcaption>
                    <div>
                      <h4 class="top-text1">奶油牛奶巧克力纸杯蛋糕</h4>
                      <aside class="p-meta-info">
												<span class="meta-info-el meta-info-custom">
													<span class="fa fa-clock-o mr-2"></span>10 Min Cook
												</span>
                      </aside>
                    </div>

                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="maghny-gd-1 mt-lg-4">
              <div class="maghny-grid">
                <figure class="effect-lily border-radius">
                  <img class="img-fluid radius-image" src="../assets/images/3.jpg" alt=""/>
                  <figcaption>
                    <div>
                      <h4 class="top-text1">最佳咀嚼巧克力曲奇食谱</h4>
                      <aside class="p-meta-info">
												<span class="meta-info-el meta-info-custom">
													<span class="fa fa-bell-o mr-2"></span>Sponsered by
													<strong>Johnson</strong>
												</span>
                      </aside>
                    </div>

                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- adv -->
    <div class="ad-image text-center pb-lg-5">
      <div class="container">
        <h6 class="advert-decs">- Advertisement -</h6>
        <a class="widget-ad-link" target="_blank" href="#url"><img src="../assets/images/ad.jpg"
                                                                   alt="- Advertisement -"
                                                                   class="radius-image img-fluid"></a>
      </div>
    </div>
    <!-- //adv -->
    <div class="w3l-searchblock w3l-homeblock1 py-5">
      <div class="container py-lg-4 py-md-3">
        <!-- block -->
        <div class="row">
          <div class="col-lg-8 most-recent pr-lg-4">
            <h3 class="title-left mb-3">Latest Recipes</h3>
            <div class="row">
              <div class="col-lg-6 col-md-6 item">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#blog-single">
                      <img class="card-img-bottom d-block radius-image"
                           src="../assets/images/4.jpg" alt="Card image cap">
                    </a>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe green">Reciepe</a>
                      <span class="meta-info meta-info-custom">
												<span class="fa fa-clock-o mr-2"></span>10 Min Cook
											</span>
                    </div>
                  </div>
                  <div class="card-body p-0 blog-details">
                    <a href="#blog-single" class="blog-desc">本周末烘焙的最佳饼干食谱
                    </a>
                    <div class="p-footer mt-3">
                      <div class="p-meta-info">
                        <a href="#img" class="post-img-anchor">
                          <img src="../assets/images/a1.jpg" alt=""
                               class="post-img radius-img img-fluid"/>
                        </a>
                        <a href="#url">Elizabeth</a>
                      </div>
                      <a href="#read" class="read">Read more <span
                          class="fas fa-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 item mt-md-0 mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#blog-single">
                      <img class="card-img-bottom d-block radius-image"
                           src="../assets/images/5.jpg" alt="Card image cap">
                    </a>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe orange">How to</a>
                      <span class="meta-info meta-info-custom">
												<span class="fa fa-clock-o mr-2"></span>10 Min Cook
											</span>
                    </div>
                  </div>
                  <div class="card-body p-0 blog-details">
                    <a href="#blog-single" class="blog-desc">草莓汁混合绿葡萄酒配方
                    </a>
                    <div class="p-footer mt-3">
                      <div class="p-meta-info">
                        <a href="#img" class="post-img-anchor">
                          <img src="../assets/images/a2.jpg" alt=""
                               class="post-img radius-img img-fluid"/>
                        </a>
                        <a href="#url">William</a>
                      </div>
                      <a href="#read" class="read">Read more <span
                          class="fas fa-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#blog-single">
                      <img class="card-img-bottom d-block radius-image"
                           src="../assets/images/6.jpg" alt="Card image cap">
                    </a>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe orange">How to</a>
                      <span class="meta-info meta-info-custom">
												<span class="fa fa-clock-o mr-2"></span>10 Min Cook
											</span>
                    </div>
                  </div>
                  <div class="card-body p-0 blog-details">
                    <a href="#blog-single" class="blog-desc">水果沙拉配蜂蜜和橙子，草莓，黑莓
                    </a>
                    <div class="p-footer mt-3">
                      <div class="p-meta-info">
                        <a href="#img" class="post-img-anchor">
                          <img src="../assets/images/a3.jpg" alt=""
                               class="post-img radius-img img-fluid"/>
                        </a>
                        <a href="#url">Alexander</a>
                      </div>
                      <a href="#read" class="read">Read more <span
                          class="fas fa-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#blog-single">
                      <img class="card-img-bottom d-block radius-image"
                           src="../assets/images/7.jpg" alt="Card image cap">
                    </a>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe blue">Drinks</a>
                      <span class="meta-info meta-info-custom">
												<span class="fa fa-clock-o mr-2"></span>10 Min Cook
											</span>
                    </div>
                  </div>
                  <div class="card-body p-0 blog-details">
                    <a href="#blog-single" class="blog-desc">Starbucks Blonde Caffeè：一杯牛奶浓缩咖啡
                    </a>
                    <div class="p-footer mt-3">
                      <div class="p-meta-info">
                        <a href="#img" class="post-img-anchor">
                          <img src="../assets/images/a4.jpg" alt=""
                               class="post-img radius-img img-fluid"/>
                        </a>
                        <a href="#url">Johnson</a>
                      </div>
                      <a href="#read" class="read">Read more <span
                          class="fas fa-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 trending mt-lg-0 mt-5 mb-lg-5 pl-lg-4">
            <div class="pos-sticky">
              <div class="side-post-banner text-center">
                <h3 class="title-left">Create a Stunning Website!</h3>
                <p class="mt-3">Lorem, ipsum dolor sit amet elit. Libero, facere dolor sit, amet elit.
                  ipsam
                  beatae eius.</p>
                <a href="#read" class="btn-style btn btn-primary mt-4"> Get started </a>
              </div>
              <div class="tweets mt-5">
                <h3 class="title-left mb-sm-3">Latest Tweets</h3>
                <ul class="blog-cat twitter-feed">
                  <li>
                    <a href="#url"> @W3layouts help Developers, Designers, Website owners create
                      Stunning Websites #design…
                      <br><em class="twitter-date">Oct 4, 2020</em></a>
                  </li>
                  <li>
                    <a href="#url">@W3layouts Delog starter just evolved. has acquired the
                      ability to generate sitemaps in production… @gatsbyjs @NetlifyCMS
                      <br><em class="twitter-date">Oct 4, 2020</em></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- //block-->
      </div>
    </div>
    <!-- grids -->
    <section class="grids-1 py-5" id="trip">
      <div class="grids py-lg-5 py-md-4">
        <div class="container">
          <div class="row grids-gap">
            <div class="col-lg-4 align-self">
              <div class="text-left">
                <h3 class="title-left mb-3">Categories</h3>
                <p class="text-para">Curabitur id gravida risus. Fusce eget ex, nisi ac sed,
                  lacinia est. Quisque ut lectus, eros et, commodo risus.
                  Nullam sit amet laoreet elit. non magna a velit. </p>
              </div>
            </div>
            <div class="col-lg-8 mt-lg-0 mt-md-5 mt-sm-4 mt-2">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 mt-sm-0 mt-4">
                  <div class="column">
                    <a href="#single"><img src="../assets/images/recipe.jpg" alt=""
                                           class="img-fluid"/></a>
                    <div class="info">
                      <h4><a href="#single">Recipes</a></h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mt-sm-0 mt-4">
                  <div class="column">
                    <a href="#single"><img src="../assets/images/drinks.jpg" alt=""
                                           class="img-fluid"/></a>
                    <div class="info">
                      <h4><a href="#single">Cooldrinks</a></h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mt-md-0 mt-4">
                  <div class="column">
                    <a href="#single"><img src="../assets/images/video.jpg" alt=""
                                           class="img-fluid"/></a>
                    <div class="info">
                      <h4><a href="#single">How to make</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //grids -->
    <div class="w3l-searchblock w3l-homeblock1 py-5">
      <div class="container py-lg-4 py-md-3">
        <!-- block -->
        <div class="most-recent">
          <div class="title-align mb-4">
            <h3 class="title-left">20-Minutes Meals</h3>
            <a href="#blog" class="more-posts"> View more posts <span class="fas fa-arrow-right"></span></a>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 item">
              <div class="card">
                <div class="card-header p-0 position-relative">
                  <a href="#blog-single">
                    <img class="card-img-bottom d-block radius-image"
                         src="../assets/images/meal1.jpg" alt="Card image cap">
                  </a>
                  <div class="post-pos">
                    <a href="#reciepe" class="receipe blue">How to</a>
                  </div>
                </div>
                <div class="card-body p-0 blog-details">
                  <a href="#blog-single" class="blog-desc">你需要的12道咖喱食谱
                  </a>
                  <span class="post-date"><span class="fa fa-clock-o"></span> Oct 4, 2020</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 item mt-md-0 mt-5">
              <div class="card">
                <div class="card-header p-0 position-relative">
                  <a href="#blog-single">
                    <img class="card-img-bottom d-block radius-image"
                         src="../assets/images/meal2.jpg" alt="Card image cap">
                  </a>
                  <div class="post-pos">
                    <a href="#reciepe" class="receipe orange">Reciepe</a>
                  </div>
                </div>
                <div class="card-body p-0 blog-details">
                  <a href="#blog-single" class="blog-desc">如何像在餐厅一样烹饪法式炸薯条
                  </a>
                  <span class="post-date"><span class="fa fa-clock-o"></span> Oct 3, 2020</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 item mt-lg-0 mt-5">
              <div class="card">
                <div class="card-header p-0 position-relative">
                  <a href="#blog-single">
                    <img class="card-img-bottom d-block radius-image"
                         src="../assets/images/meal3.jpg" alt="Card image cap">
                  </a>
                  <div class="post-pos">
                    <a href="#reciepe" class="receipe blue">How to</a>
                  </div>
                </div>
                <div class="card-body p-0 blog-details">
                  <a href="#blog-single" class="blog-desc">北印度风味辣面
                  </a>
                  <span class="post-date"><span class="fa fa-clock-o"></span> Oct 3, 2020</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 item mt-lg-0 mt-5">
              <div class="card">
                <div class="card-header p-0 position-relative">
                  <a href="#blog-single">
                    <img class="card-img-bottom d-block radius-image"
                         src="../assets/images/meal4.jpg" alt="Card image cap">
                  </a>
                  <div class="post-pos">
                    <a href="#reciepe" class="receipe recipe">Reciepe</a>
                  </div>
                </div>
                <div class="card-body p-0 blog-details">
                  <a href="#blog-single" class="blog-desc">吃健康、美味、完美的汉堡
                  </a>
                  <span class="post-date"><span class="fa fa-clock-o"></span> Oct 7, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //block-->
      </div>
    </div>

    <!-- footer -->
    <footer class="py-5">
      <div class="container pt-md-5">
        <div class="footer-logo mb-lg-5 mb-4 text-center">
          <a class="navbar-brand" href="index.html"><span class="fa fa-bell-o"></span> Tmall</a>
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
            <p class="mt-4">© 2022 Tmall. All Rights Reserved | Design by <a
                href="https://github.com/1244951382?tab=repositories" target="=_blank">
              Charon.Wang
            </a></p>
          </div>
        </div>

      </div>
    </footer>
    <!-- footer -->

    <!-- 回到顶部 -->
    <button type="button" @click="topFunction" id="movetop" title="Go to top">
      &#10548;
    </button>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data() {
    return {
      userInf: {},
    }
  },
  created() {
    this.getUserInf();
  },
  methods: {
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
  }
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
</style>
