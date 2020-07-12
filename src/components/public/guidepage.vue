<template>
  <div>
    <div class="swiper-container containerguidepage">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/gui1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/gui2.jpg" alt />
        </div>

        <div class="swiper-slide">
          <img src="../../assets/img/gui3.jpg" alt />
          <router-link tag="span" to="/home/recommend" class="button">立即体验</router-link>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  beforeCreate() {
    //进入隐藏底部导航
    this.$store.state.isb = false;
  },
  beforeDestroy() {
    //离开显示底部导航
    this.$store.state.isb = true;
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  position: relative;
  height: 100vh;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100vh;
  position: absolute;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
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
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #00a5d3;
    color: white;
    position: absolute;
    bottom: 17%;
  }
}
</style>