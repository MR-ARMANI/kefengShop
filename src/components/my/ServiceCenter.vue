<template>
  <div>
    <backbar :title="title"></backbar>
    <div class="app-view">
      <div class="self-service">
        <p>自助服务</p>
        <div class="nav">
          <ul>
            <li v-for="(item,index) in serveImgs" :key="index">
              <img class="fl" :src="require(`../../assets/img/${item}.png`)" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="online-customer-service">
      <div class="warp">
        <div class="center">
          <img src="../../assets/img/server9.png" />
          <span>人工在线客服</span>
        </div>
      </div>
      <div class="tel">
        <ul>
          <li>
            <img src="../../assets/img/server10.png" />
            <p class="black">商城热线</p>
            <p class="red">400-100-5678</p>
            <p class="grey">8:00 - 18:00</p>
          </li>
          <li>
            <img src="../../assets/img/server11.png" />
            <p class="black">金融热线</p>
            <p class="red">400-100-3399</p>
            <p class="grey">9:00 - 19:00</p>
          </li>
          <li>
            <img src="../../assets/img/server12.png" />
            <p class="black">小米移动</p>
            <p class="red">400-922-3838</p>
            <p class="grey">8:00 - 18:00</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import backbar from "../bar/backbar";
export default {
  data() {
    return {
      title: "服务",
      serveImgs: [
        "server1",
        "server2",
        "server3",
        "server4",
        "server5",
        "server6",
        "server7",
        "server8"
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
  margin-top: 40px;
  padding: 10px 12px 50px;
  background-color: #fff;
  color: #3c3c3c;
  .self-service {
    width: 100%;
    height: 200px;
    p {
      border-bottom: 1px solid #f6f6f6;
      color: #919191;
      padding: 10px 10px;
    }
    .nav {
      width: 100%;
      height: 162px;
      border-bottom: 1rem solid #f6f6f6;
      img {
        width: 25%;
      }
    }
  }
}
.online-customer-service {
  width: 100%;
  height: 188px;
  .warp {
    width: 100%;
    height: 63px;
    border-bottom: 1px solid #f6f6f6;
    margin: 0 auto;
    .center {
      display: block;
      height: 63px;
      margin-left: 35%;

      img {
        width: 31px;
        height: 31px;
        float: left;
      }
      span {
        text-align: center;
        float: left;
        margin: 8px 10px;
      }
    }
  }
  .tel{
      width: 100%;
      height: 60px;
      padding: 15px 0;
      ul{
        li{
          width: 33%;
          height: 90px;
          float: left;
          text-align: center;
          img{
            width: 32px;
            height: 32px;
            margin: 0 auto;
          }
          .black{
            margin-top: 1rem;
            color: #333333;
          }
          .red{
            color: #ff6700;
          }
          .grey{
            color: #969696;
          }
        }
      }
    }
}
</style>