<template>
  <div>
    <backbar :title="title"></backbar>
    <div class="app-view">
      <div class="form-content">
        <input type="text" placeholder="输入 F 码兑换并使用" class="ui-input" />
        <span>兑换</span>
      </div>
      <div class="notic-main">
        <img class="notic-img" src="../../assets/img/fcode.png" />
      </div>
      <p class="notic-foot">
          <span class="help">使用帮助</span>
          <span class="gift">礼物码兑换</span>
      </p>
    </div>
  </div>
</template>

<script>
import backbar from "../bar/backbar";
export default {
  data() {
    return {
      title: "我的F码"
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
  height: 44px;
  margin-top: 40px;
  .form-content {
    width: 100%;
    height: 41px;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    .ui-input {
      width: 80%;
      height: 80%;
      border: 1px solid #ccc;
    }
    .ui-input::placeholder {
      padding: 7px 11px;
      font-size: 13px;
    }
    span {
      display: inline-block;
      padding: 0 10px;
      font-size: 16px;
      color: #737373;
    }
  }
  .notic-main{
      height: 600px;
     padding: 59px 60px;
     background-color: #eeeeee; 
  }
  .notic-foot{
      width: 100%;
      position: fixed;
        bottom: 2rem;
        width: 100%;
        text-align: center;
        span{
            color: #a08c72;
        }
      .help{
          margin-right: 20px;
      }
  }
}
</style>