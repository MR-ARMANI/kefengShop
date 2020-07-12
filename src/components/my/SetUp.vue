<template>
  <div>
    <backbar :title="title"></backbar>
    <div class="page-user-set app-view">
      <ol>
        <li v-for="(item,index) in lists" :key="index">
          <a href="#">
            <p class="list">
              <span class="text">{{ item }}</span>
              <span class="iconfont iconjiantou-copy-copy"></span>
            </p>
          </a>
        </li>
      </ol>
      <div class="fooder">
        <span>退出账号</span>
      </div>
    </div>
  </div>
</template>

<script>
import backbar from "../bar/backbar";
export default {
  data() {
    return {
      title: "个人中心",
      lists: [
        "地址管理",
        "经营证照",
        "协议规则",
        "小米商城用户协议",
        "小米商城隐私政策",
        "小米帐号使用协议",
        "小米帐号隐私政策"
      ]
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
  width: 100%;
  height: 324px;
  margin-top: 40px;
  ol {
    width: 100%;
    height: 274px;
    li {
      width: 100%;
      padding: 10px;
      display: inline-block;
      border-bottom: 1px solid #f6f6f6;
      box-sizing: border-box;
      position: relative;
      text-align: left;
      color: #3c3c3c;
      position: relative;
      .text {
        font-size: 15px;
        color: #3c3c3c;
      }
      .iconjiantou-copy-copy {
        position: absolute;
        right: 10px;
      }
    }
  }
  .fooder {
    background-color: #f4f4f4;
    text-align: center;
    height: 52px;
    line-height: 52px;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    span {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 16px;
      color: #3c3c3c;
    }
  }
}
</style>