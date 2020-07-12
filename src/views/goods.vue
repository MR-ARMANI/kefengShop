<template>
  <div class="goods-page">
    <!-- 顶部导航 -->
    <div class="top-nav">
      <div class="top-left">
        <span class="iconfont iconjiantou-copy" @click="$router.go(-1);"></span>
      </div>
      <div class="top-right">
        <span class="iconfont iconupload-fill"></span>
      </div>
    </div>
    <!-- 轮播图开始 -->
    <div class="swiper-container homeCarousel">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
          <img :src="require(`../assets/img/${item}.jpg`)" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 轮播图结束 -->
    <!-- 商品信息开始 -->
    <div class="goods-message">
      <h1>￥4999</h1>
      <p class="goods-name">
        <img src="../assets/img/618.png" alt />小米10 Pro
      </p>
      <p class="goods-brief fz-xs">「赠价值199元立式风冷无线充；信用卡分期享24期免息」</p>
      <p class="sell_point_desc">①骁龙865旗舰平台，双模5G，用久了也不卡</p>
      <p class="sell_point_desc">②向往的生活同款手机，1亿像素8K电影相机</p>
      <p class="sell_point_desc">③对称式立体声，有声、有势，一听即知</p>
    </div>
    <!-- 商品信息结束 -->
    <!-- 商品技术开始 -->
    <div class="swiper-container technology">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in technology" :key="index">
          <span :class="item.ico"></span>
          <p>{{item.name1}}</p>
          <i>{{item.name2}}</i>
        </div>
      </div>
    </div>
    <!-- 商品技术结束 -->
    <div class="pay-info">
      <van-cell @click="addCart">
        <strong>促销</strong>
         <van-tag type="warning" color="#fff0ec" text-color="#ff7557">热门</van-tag>
        <i>赠立式风冷无线充</i>
        <span class="iconfont iconjiantou-copy-copy fr"></span>
      </van-cell>
      
    </div>
    <!-- 购买信息开始 -->
    <div class="pay-info">
      <van-cell @click="addCart">
        <strong>已选</strong>
        <i>小米10 Pro 8GB+256GB 星空蓝x1</i>
        <span class="iconfont iconjiantou-copy-copy fr"></span>
      </van-cell>
      <van-cell>
        <strong>送至</strong>
        <i>北京市 东城区</i>
        <b>有现货</b>
        <span class="iconfont iconjiantou-copy-copy fr"></span>
      </van-cell>
      <van-cell>
        <i class="autotrop">
          <span class="iconfont iconyiwancheng"></span>小米自营
        </i>
        <i class="autotrop">
          <span class="iconfont iconyiwancheng"></span>小米发货
        </i>
        <i class="autotrop">
          <span class="iconfont iconyiwancheng"></span>7天无理由退货
        </i>
        <span class="iconfont iconjiantou-copy-copy fr"></span>
      </van-cell>
    </div>
    <!-- 购买信息结束 -->
    <!-- 商品底部图片介绍开始 -->
    <div class="referral">
    <img src="../assets/img/s04.jpg" alt="">
    <img src="../assets/img/s05.jpg" alt="">
    <img src="../assets/img/s06.jpg" alt="">
    <img src="../assets/img/s02.jpg" alt />
    <img src="../assets/img/s03.jpg" alt />
    <img src="../assets/img/s01.jpg" alt />
    </div>
    <!-- 商品底部图片介绍结束 -->
    <!-- 划线价开始 -->
    <div class="lineation">
      <span>
        <b>划线价：</b>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在小米商城/小米有品/天猫小米官方旗靓店曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
      </span>
    </div>
    <!-- 划线价结束 -->
    <!-- 选择规格 -->
    <van-popup v-model="show" round position="bottom" :style="{ height: '75%' }">
      <div class="specif-top">
        <div class="specif-top-left fl">
          <img src="../assets/img/pp01.jpg" alt />
        </div>
        <div class="specif-top-right fl">
          <span>￥{{lists[num1].money}}</span>
          <p>小米10 {{lists[num1].name}} {{color[num2]}}</p>
        </div>
      </div>
      <div class="versions">
        <h4>版本</h4>
        <span
          v-for="(item,index) in lists"
          :key="index"
          @click="addvers(index)"
          ref="vers"
        >{{item.name}}</span>
      </div>
      <div class="color">
        <h4>颜色</h4>
        <span ref="colos" @click="addcol(index)" v-for="(item,index) in color" :key="index">{{item}}</span>
        <!-- <span ref="colos">珍珠白</span> -->
      </div>
      <div class="quantity">
        <span class="fl">购买数量</span>
        <van-stepper class="fr" v-model="value" />
      </div>
      <div class="quantity">
        <span class="fl">意外保护</span>
        <span class="iconfont icon-wen" style="margin-left:8px;color:#929292"></span>
      </div>
      <van-button round type="info" v-show="bool" @click="add">加入购物车</van-button>
      <van-button round type="info" v-show="!bool" @click="pay">立即购买</van-button>
    </van-popup>
    <!-- 加入购物车开始 -->
    <van-goods-action style="z-index:999">
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="$store.state.cart.cartsdata.length"
        @click="tocart"
      />
      <van-goods-action-icon
        icon="star"
        :text="warningtext"
        :color="warningcolor"
        @click="warningclick"
      />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="atPay" />
    </van-goods-action>
    <!-- 加入购物车结束 -->
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      // 轮播图
      banners: [
        "g06",
        "g07",
        "g03",
        "g04",
        "g05",
        "g09",
        "g10",
        "g11",
        "g12",
        "g13",
        "g14",
        "g15",
        "g16"
      ],
      //商品技术数据
      technology: [
        { ico: "iconfont iconxingzhuang", name1: "cpu", name2: "骁龙865" },
        {
          ico: "iconfont iconshexiangtou2",
          name1: "四摄像头",
          name2: "10800万+2000万"
        },
        { ico: "iconfont icondaping", name1: "超大屏", name2: "6.6英寸" },
        {
          ico: "iconfont iconpingmufenbianshuai",
          name1: "屏幕分辩率",
          name2: "2340x1080"
        },
        {
          ico: "iconfont iconyanjizhushou-shangchuan_neicun",
          name1: "极速畅玩",
          name2: "8GB"
        },
        { ico: "iconfont iconrongliang", name1: "存储容量", name2: "256GB" },
        { ico: "iconfont icongaodu", name1: "普通厚度", name2: "8.96mm" },
        { ico: "iconfont icondianliang", name1: "超长待机", name2: "4500mAh" },
        {
          ico: "iconfont iconyunyingshangguanli",
          name1: "运营商网络",
          name2: "双模5G全网通"
        },
        {
          ico: "iconfont iconxinyongshoujika",
          name1: "网络模式",
          name2: "双卡双待"
        }
      ],
      show: false, //显示选择规格层
      value: 1, // 步进器
      num1: 0,
      num2: 0,
      lists: [],
      color: [],
      warningtext: "未收藏",
      warningcolor: "#ccc",
      warningbool: "false",
      //立即购买和加入购物车按钮切换
      bool: true,
      
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    //点击加入购物车
    addCart() {
      this.show = true;
      this.bool = true;
    },
    //点击立即购买
    atPay() {
      this.show = true;
      this.bool = false;
    },
    //切换版本
    addvers(i) {
      for (var j = 0; j < this.lists.length; j++) {
        this.$refs.vers[j].className = "";
      }
      this.$refs.vers[i].className = "orgin";
      this.num1 = i;
    },
    //切换颜色
    addcol(i) {
      for (var k = 0; k < this.color.length; k++) {
        this.$refs.colos[k].className = "";
      }
      this.$refs.colos[i].className = "orgin";
      this.num2 = i;
    },
    //加入购物车
    add() {
      if (!this.$store.state.islogin) {
        this.$toast.fail("请先登录");
      } else {
        this.$toast.success("加入购物车成功");
        this.$store.state.cart.cartsdata.push({
          money: this.lists[this.num1].money,
          name: this.lists[this.num1].name,
          type: this.color[this.num2],
          checked: true,
          value: this.value,
        });
          console.log(this.$store.state.cart.cartsdata)
      }
    },
    //立即购买
    pay() {
      if (!this.$store.state.islogin) {
        this.$toast.fail("请先登录");
      } else {
        this.$store.state.order.indentlist.push({
          money: this.lists[this.num1].money,
          name: this.lists[this.num1].name,
          type: this.color[this.num2],
          checked: true,
          value: this.value
        });
        this.$router.push({ path: "/indent" });
        this.$store.state.cart.gross = this.lists[this.num1].money;
      }
    },
    //跳转到购物车
    tocart() {
      this.$store.state.active = 2;
      this.$router.push("/cart");
    },
    //收藏
    warningclick() {
      if (this.warningbool) {
        this.warningtext = "已收藏";
        this.warningcolor = "#ff5000";
        this.warningbool = true;
       
      } else {
        this.warningtext = "未收藏";
        this.warningcolor = "#ccc";
        this.warningbool = false;
        
      }
    }
  },
  created() {
    this.lists = this.$store.state.cart.lists;
    this.num1 = this.$store.state.cart.num1;
    this.num2 = this.$store.state.cart.num2;
    this.color = this.$store.state.cart.color;
  },
  mounted() {
    //轮播图效果
    new Swiper(".homeCarousel", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
    //商品技术
    new Swiper(".technology", {
      slidesPerView: 4.5, //显示个数
      freeMode: true
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
.goods-page {
  background-color: #f6f6f6;
}
// 顶部导航
.top-nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  span {
    font-size: 18px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
  }
  .top-left {
    float: left;
  }
  .top-right {
    float: right;
  }
}
//轮播图
.swiper-container {
  width: 100%;
  height: 100%;
  position: relative;

  .swiper-pagination {
    float: right;
    background-color: rgba(0, 0, 0, 0.5);
    color: #f1eae8;
    width: 3rem;
    padding: 0.1rem 0.15rem;
    border-radius: 12px;
    bottom: 0.32rem;
    right: 0.32rem;
    left: auto;
  }
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

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
//商品信息
.goods-message {
  padding: 10px 21px 0;
  box-sizing: border-box;
  background-color: #fff;
  h1 {
    font-size: 25px;
    color: #ff6700;
    margin-bottom: 5px;
    font-weight: bolder;
  }
  .goods-name {
    color: #000000;
    font-size: 18px;
    font-weight: bolder;
    line-height: 18px;
    img {
      display: inline-block;
      width: 40px;
      height: 18px;
      margin-right: 0.7rem;
    }
  }
  p {
    color: #757575;
    margin-top: 6px;
    i {
      color: #ff4a00;
    }
  }
}
//商品技术
.technology {
  margin-top: 6px;
  .swiper-slide {
    height: 52px;
    position: relative;
    line-height: 52px;
    padding: 16px 0;
    &:last-child {
      border-right: 0;
    }
    span {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
    }
    p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 25px;
      font-size: 11px;
      width: 100%;
    }
    i {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 9px;
      top: 40px;
      display: block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
//购买信息
.pay-info {
  overflow: hidden;
  margin: 20px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  .van-tag{
    padding: 2px;
    margin-right: 4px;
  }
  .van-cell {
    background-color: #fff;
    font-size: 12px;
    strong {
      color: #737373;
      margin-right: 18px;
    }
    span {
      color: #737373;
      font-size: 12px;
    }
    b {
      margin-left: 10px;
      font-weight: normal;
      color: #f56600;
    }
    .autotrop {
      color: #737373;
      margin-right: 10px;
      font-size: 10px;
      span {
        color: #f6802d;
        margin-right: 5px;
      }
    }
  }
}
//划线价
.lineation {
  padding: 20px;
  box-sizing: border-box;
  font-size: 11px;
  background-color: #fafafa;
  color: #b7b7b7;
  line-height: 20px;
  b {
    color: #5c5c5c;
  }
}
//选择规格
.van-popup {
  padding: 30px 20px 0;
  box-sizing: border-box;
  .specif-top {
    overflow: hidden;
    .specif-top-left {
      width: 105px;
      margin-right: 10px;
      img {
        border: 1px solid #eee;
      }
    }
    .specif-top-right {
      margin-top: 20px;
      span {
        font-size: 24px;
        color: #ff6903;
      }
      p {
        // margin-top: 10px;
        font-size: 14px;
        color: black;
      }
    }
  }
  .versions,
  .color {
    margin-top: 20px;
    h4 {
      font-weight: normal;
    }
    span {
      display: inline-block;
      border: 1px solid #ccc;
      color: black;
      padding: 8px 6px;
      margin: 0 10px;
      font-size: 11px;
      margin-top: 10px;
      min-width: 70px;
      text-align: center;
      color: #999;
    }
    .orgin {
      color: #ff6700;
      border: 1px solid #ff6700;
    }
  }
  .color {
    margin-bottom: 24px;
  }
  .quantity {
    // margin-top: 20px;
    height: 64px;
    line-height: 64px;
    border-top: 1px solid #eeeeee;
    span {
      font-size: 14px;
      color: black;
    }
  }
  .van-button {
    background-color: #ff6700;
    width: 100%;
    border: 0;
    bottom: 10px;
  }
}
</style>