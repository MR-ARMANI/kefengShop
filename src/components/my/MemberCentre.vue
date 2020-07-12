<template>
  <div>
    <backbar :title="title"></backbar>
    <div class="app-view">
      <div class="text">
        <p class="fz-m">请前往小米商城App查看会员福利</p>
      </div>
      <div class="action">
        <div class="btn">立即下载小米商城App</div>
      </div>
    </div>
  </div>
</template>

<script>
import backbar from "../bar/backbar";
export default {
  data() {
    return {
      title: "会员中心"
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
.app-view{
    margin-top: 40px;
    .text{
        padding: 78px 20px 52px;
        text-align: center;
        font-size: 18px;
    }
    .action{
        margin: 0 2rem;
        .btn {
            display: block;
            outline: 0;
            background: #ff6700;
            color: #fff;
            text-align: center;
            width: 100%;
            height: 3rem;
            line-height: 3rem;
            font-size: 13px;
        }
    }
}
</style>