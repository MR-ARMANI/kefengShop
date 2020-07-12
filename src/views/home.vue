<template>
  <div>
    <!-- 顶部导航开始 -->
    <van-row class="top-nav">
      <van-col span="3">
        <svg class="icon" aria-hidden="true" style="font-size:24px;">
          <use xlink:href="#iconlogo" />
        </svg>
      </van-col>
      <van-col span="18">
        <van-search placeholder="搜索商品名称" @click="getSearch" />
      </van-col>
      <van-col span="3">
        <span class="iconfont iconwode" @click="toMy"></span>
      </van-col>
    </van-row>
    <!-- 顶部导航结束 -->
    <!-- 首页导航开始 -->
    <div class="swiper-container homeNavSwiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in classify" :key="index">
          <router-link tag="span" :to="item.to">{{item.name}}</router-link>
        </div>
      </div>
    </div>

    <!-- 首页导航结束 -->

    <!-- 二级导航 -->
    <transition
      mode="out-in"
      :duration="{enter:200,leave:200}"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Swiper from "swiper";
// import { Toast } from 'vant';
export default {
  data() {
    return {
      count: 0,
      isLoading: false,

      //二级导航数据
      classify: [
        { to: "/home/recommend", name: "推荐" },
        { to: "/home/phone", name: "手机" },
        { to: "/home/intelligence", name: "智能" },
        { to: "/home/televisions", name: "电视" },
        { to: "/home/notebook", name: "笔记本" },
        { to: "/home/appliances", name: "家电" },
        { to: "/home/ambitus", name: "生活周边" }
      ]
    };
  },
  methods: {
    // 跳转搜素
    getSearch() {
      this.$router.push("/search");
    },
    //跳转用户
    toMy() {
      this.$store.state.active = 3;
      this.$router.push("/my");
    }

    // onRefresh() {
    //   setTimeout(() => {
    //     Toast('刷新成功');
    //     this.isLoading = false;
    //     this.count++;
    //   }, 1000);
    // },
  },
  // 注意：swiper必须要在页面渲染到浏览器后mounted钩子函数中才能运行
  mounted() {
    new Swiper(".homeNavSwiperContainer", {
      slidesPerView: 6, //显示个数
      freeMode: true
    });
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
// 顶部导航
.top-nav {
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #f7f7f7;
  svg {
    transform: translateY(3px);
  }
  .iconwode {
    font-size: 20px;
  }
  .van-search {
    height: 34px;
    margin: 5px 0;
  }
  .van-search__content {
    background-color: white;
  }
}
//首页导航
.swiper-container {
  width: 100%;
  height: 100%;
  z-index: 9;
  box-shadow: 0px 2px 4px #888;
}
.swiper-slide {
  text-align: center;
  font-size: 11px;
  background: #f7f7f7;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.homeNavSwiperContainer {
  height: 2.4rem;
  .swiper-slide {
    span {
      margin-top: 10px;
      padding: 0 4px 6px;
    }
  }
  .con {
    color: #ed5b00;
    border-bottom: 2px solid #ed5b00;
    box-sizing: border-box;
  }
}
</style>