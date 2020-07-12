<template>
  <div>
    <backbar :title="title"></backbar>
    <div class="app-view">
      <div class="coupon-tab">
        <div class="flex on">
          <span>未使用</span>
        </div>
        <div class="flex">
          <span>已使用 / 已过期</span>
        </div>
      </div>
      <div class="none">
        <span class="iconfont iconiconfontgantanhao"></span>
        <p>您没有未使用的优惠券</p>
      </div>
    </div>
  </div>
</template>

<script>
import backbar from "../bar/backbar";
export default {
  data() {
    return {
      title: "优惠券列表"
    };
  },
  components: {
    backbar
  },
  beforeCreate() {
    this.$store.state.isb = false;
  },
  beforeDestroy() {
    this.$store.state.isb = true;
  }
};
</script>

<style lang="scss" scoped>
.app-view {
  margin-top: 40px;
  padding: 10px 12px 50px;
  background-color: #fff;
  color: #3c3c3c;
  .coupon-tab {
    font-size: 14px;
    border-bottom: 1px solid #eee;
    margin-top: 5px;
    display: flex;
  }
  .flex {
    // width: 175px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    flex: 1 1 auto;
    margin: 0 40px;
  }
  .on {
    color: #ff3100;
    border-bottom: 2px solid #ff3100;
  }
  .none {
    text-align: center;
    margin-top: 18px;
    span {
      font-size: 90px;
      width: 110px;
      height: 110px;
      line-height: 110px;
      box-sizing: border-box;
      margin: 0 auto;
      display: block;
      border-radius: 50%;
      color: #ccc;
    }
    p {
      font-size: 16px;
      color: #666;
    }
  }
}
</style>