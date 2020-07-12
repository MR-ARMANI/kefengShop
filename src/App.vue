<template>
  <div id="app">
    <!-- 导航 -->
    <van-tabbar v-model="$store.state.active" v-show="$store.state.isb" active-color="#ed5b00">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="bar-chart-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 一级路由 -->
    <transition 
    mode="out-in" 
    :duration="{enter:200,leave:200}"
    enter-active-class="animated fadeIn"  
    leave-active-class="animated fadeOut">
        <router-view></router-view>
    </transition>
    <footer></footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // active: 0,
    }
  }
}
</script>

<style lang="scss">
footer{
  // margin-top: 50px;
  height: 60px;
}
</style>
