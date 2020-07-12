<template>
  <div>
    <!-- 登录注册开始 -->
    <div class="login">
      <div class="logimg fl">
        <!-- <img :src="require(`../assets/img/u${$store.state.login.compellation[$store.state.loginimg].src}.png`)"> -->
        <img src="../assets/img/user01.jpg" />
      </div>
      <router-link tag="span" to="/login" class="fl" v-show="!$store.state.islogin">登录/注册</router-link>
      <div class="userinfo fl" v-show="$store.state.islogin">
        <div class="userinfo-left">
          <b>用户0{{$store.state.login.loginNum+1}}</b>
          <p>账号:{{$store.state.login.user[$store.state.login.loginNum].uname}}</p>
          <i>普通会员</i>
        </div>
        <div class="userinfo-right" @click="quit">
          <i>退出</i>
        </div>
      </div>
    </div>
    <!-- 登录注册结束 -->
    <!-- 我的订单开始 -->
    <div class="myindent">
      <van-cell-group>
        <van-cell title="我的订单" is-link value="全部订单" @click="toAll" />
      </van-cell-group>
      <ul>
        <li @click="toPay">
          <span class="iconfont icondaifukuan">
            <i v-show="$store.state.order.upmoney.length>0">{{$store.state.order.upmoney.length}}</i>
          </span>
          <p>待付款</p>
        </li>
        <li @click="toGoods">
          <span class="iconfont icondaishouhuo">
            <i v-show="$store.state.order.unpaid.length>0">{{$store.state.order.unpaid.length}}</i>
          </span>
          <p>待收货</p>
        </li>
        <li @click="toEnd">
          <span class="iconfont icondingdanyiwancheng"></span>
          <p>已完成</p>
        </li>
      </ul>
    </div>
    <!-- 我的订单结束 -->
    <!-- 其他单元格开始 -->
    <div class="rests" v-for="(item,index) in rests" :key="index">
      <ul> 
        <router-link :to="item.routelink">
          <li>
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.ico" />
            </svg>
            <i>{{item.text}}</i>
            <span class="iconfont iconjiantou-copy-copy"></span>
        </li>
        </router-link>
      </ul>
    </div>
    <!-- 其他单元格结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      rests: [
        { text: "会员中心", ico: "#iconhuiyuan", routelink:"/MemberCentre" },
        { text: "我的优惠", ico: "#icondaifukuan", routelink:"/MyOffer" },
        { text: "服务中心", ico: "#iconfuwuzhongxin1", routelink:"/ServiceCenter" },
        { text: "我的f码", ico: "#iconfmashangpin", routelink:"/Fcode" },
        { text: "礼物码兑换", ico: "#iconliwu1", routelink:"/GiftCode" },
        { text: "设置", ico: "#iconshezhi2", routelink:"/SetUp" },
      ]
    };
  },
  methods: {
    //跳转到未支付
    toPay() {
      this.$store.state.order.active = 1;
      this.$router.push({ path: "/orderlist/orderPay" });
    },
    //跳转到全部商品
    toAll() {
      this.$store.state.order.active = 0;
      this.$router.push({ path: "/orderlist/orderAll" });
    },
    //跳转到待发货
    toGoods() {
      this.$store.state.order.active = 2;
      this.$router.push({ path: "/orderlist/orderGoods" });
    },
    //跳转到已完成
    toEnd() {
      this.$store.state.order.active = 3;
      this.$router.push({ path: "/orderlist/orderEnd" });
    },
    //退出
    quit() {
      this.$store.state.islogin = false;
    }
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
// 登录注册
.login {
  height: 80px;
  box-sizing: border-box;
  padding: 16px 30px;
  background-image: url("../assets/img/mybg01.png");
  background-size: 100%;
  background-color: #f37d0f;
  .logimg {
    width: 42px;
    padding: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: relative;
    img {
      padding: 1px;
      border-radius: 50%;
      padding: 0;
      vertical-align: middle;
    }
  }
  span {
    margin-top: 12px;
    margin-left: 12px;
    color: #ffffff;
    font-size: 14px;
  }
  .userinfo {
    color: #fbffff;
    margin-left: 16px;
    .userinfo-left {
      p {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.7);
      }
      i {
        font-size: 8px;
        color: yellow;
      }
    }
    .userinfo-right {
      position: absolute;
      top: 30px;
      right: 20px;
      background-color: #ffa41b;
      border-radius: 26px;
      width: 60px;
      height: 26px;
      line-height: 26px;
      box-sizing: border-box;
      text-align: center;
      i {
        font-size: 13px;
      }
    }
  }
}
// 我的订单
.myindent {
  // background-color: skyblue;
  overflow: hidden;
  ul {
    padding: 20px 0;
    overflow: hidden;
    li {
      float: left;
      width: 33%;
      text-align: center;
      // position: relative;
      span {
        font-size: 20px;
        position: relative;
      }
      i {
        position: absolute;
        top: -11px;
        right: -11px;
        background-color: red;
        width: 17px;
        height: 17px;
        line-height: 17px;
        text-align: center;
        border-radius: 50%;
        color: white;
        font-size: 10px;
      }
    }
  }
}
//其他单元格
.rests {
  padding-top: 1px;
  background-color: #f5f5f5;
  ul {
    li {
      height: 52px;
      line-height: 52px;
      font-size: 13px;
      background-color: white;
      position: relative;
      border-bottom: 1px solid #d9d9d9;
      svg {
        font-size: 26px;
        padding: 0 20px;
        color: #ed5b00;
        transform: translateY(3px);
      }
      span {
        position: absolute;
        top: 0;
        right: 20px;
      }
      &:nth-child(2n),
      &:last-child {
        border: 0;
      }
      &:nth-child(2n + 1) {
        margin-top: 10px;
      }
    }
  }
}
</style>