<template>
  <div>
    <!-- 轮播图开始 -->
    <div class="swiper-container homeCarousel">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
          <img :src="require(`../../assets/img/${item}.jpg`)" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 轮播图结束 -->
    <!-- 分类img lists -->
    <div class="classify clearfix">
      <ul>
        <li class="fl w20" v-for="(item,index) in lists" :key="index">
          <img :src="require(`../../assets/img/${item}.png`)" alt />
        </li>
      </ul>
    </div>
    <!-- 分类层结束 -->

    <!-- 广告 -->
    <div class="advertising-img">
      <img src="../../assets/img/m01.jpg" alt />
    </div>

    <!-- 精选 -->
    <div class="advertising-img">
      <img src="../../assets/img/m03.jpg" alt />
    </div>

    <!-- 手机列表 -->
    <div class="commodity">
      <ul>
        <li v-for="(item,index) in phones" :key="index">
          <router-link tag="a" to="/goods" class="displayblock">
            <img :src="require(`../../assets/img/${item.imgsrc}.jpg`)" />
            <p class="displayblock">{{item.name}}</p>
            <span class="displayblock">{{item.core}}</span>
            <i class="displayblock">
              <span class="red">{{item.money}}</span>
              <s>{{item.oldmoney}}</s>
            </i>
            <strong>立即购买</strong>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ti">更多小米手机产品 &gt;</div>

    <!-- 电视 -->
    <div class="advertising-img">
      <img src="../../assets/img/tv1.jpg" alt />
    </div>

    <!-- 电视列表 -->
    <div class="commodity">
      <ul>
        <li v-for="(item,index) in tvs" :key="index">
          <router-link tag="a" to="/goods" class="displayblock">
            <img :src="require(`../../assets/img/${item.imgsrc}.jpg`)" />
            <p class="displayblock">{{item.name}}</p>
            <span class="displayblock">{{item.core}}</span>
            <i class="displayblock">
              <span class="red">{{item.money}}</span>
              <s>{{item.oldmoney}}</s>
            </i>

            <strong>立即购买</strong>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ti">更多小米电视产品 &gt;</div>

    <!-- 笔记本电脑 -->
    <div class="advertising-img">
      <img src="../../assets/img/laptop1.jpg" alt />
    </div>
    <div class="advertising-img">
      <img src="../../assets/img/laptop2.jpg" alt />
    </div>

    <!-- 笔记本电脑列表 -->
    <div class="commodity">
      <ul>
        <li v-for="(item,index) in laptops" :key="index">
          <router-link tag="a" to="/goods" class="displayblock">
            <img :src="require(`../../assets/img/${item.imgsrc}.jpg`)" />
            <p class="displayblock">{{item.name}}</p>
            <span class="displayblock">{{item.core}}</span>
            <i class="displayblock">
              <span class="red">{{item.money}}</span>
              <s>{{item.oldmoney}}</s>
            </i>

            <strong>立即购买</strong>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ti">更多小米笔记本产品 &gt;</div>

    <!-- 米家家电 -->
    <div class="advertising-img">
      <img src="../../assets/img/homeAppliances1.jpg" alt />
    </div>
    <div class="advertising-img">
      <img src="../../assets/img/homeAppliances2.jpg" alt />
    </div>

    <!-- 米家家电列表 -->
    <div class="commodity">
      <ul>
        <li v-for="(item,index) in homeAppliances" :key="index">
          <router-link tag="a" to="/goods" class="displayblock">
            <img :src="require(`../../assets/img/${item.imgsrc}.jpg`)" />
            <p class="displayblock">{{item.name}}</p>
            <span class="displayblock">{{item.core}}</span>
            <i class="displayblock">
              <span class="red">{{item.money}}</span>
              <s>{{item.oldmoney}}</s>
            </i>

            <strong>立即购买</strong>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ti">更多米家家电产品 &gt;</div>

    <!-- 智能好物 -->
    <div class="advertising-img">
      <img src="../../assets/img/capacity1.jpg" alt />
    </div>
    <div class="advertising-img">
      <img src="../../assets/img/capacity2.jpg" alt />
    </div>

    <div class="commodity list_one_type2">
      <ul>
        <li>
          <router-link tag="a" to="/goods" class="displayblock">
            <img class="img-left fl" src="../../assets/img/capacity3.jpg" />
            <div class="text-right fl">
              <p class="displayblock">米家直流变频落地扇1X</p>
              <span class="displayblock">模拟自然风算法支持AI语音</span>
              <i class="displayblock">
                <span class="red">¥299</span>
              </i>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="commodity list_one_type2">
      <ul>
        <li>
          <router-link tag="a" to="/goods" class="displayblock">
            <img class="img-left fr" src="../../assets/img/capacity4.jpg" />
            <div class="text-right fl">
              <p class="displayblock">小爱音箱万能遥控版</p>
              <span class="displayblock">传统家电秒变智能</span>
              <i class="displayblock">
                <span class="red">￥149</span>
                <s>¥199</s>
              </i>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="commodity list_one_type2">
      <ul>
        <li>
          <router-link tag="a" to="/goods" class="displayblock">
            <img class="img-left fl" src="../../assets/img/capacity5.jpg" />
            <div class="text-right fl">
              <p class="displayblock">米家照片打印机</p>
              <span class="displayblock">手机即拍即印</span>
              <i class="displayblock">
                <span class="red">￥479</span>
                <s>¥499</s>
              </i>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ti">更多米家家电产品 &gt;</div>

    <!-- 底部 -->
    <div class="bottom" v-for="(item,index) in bottom" :key="index">
        <ul>
            <li class="fl">
                <img :src="require(`../../assets/img/${item.imgsrc}.webp`)" alt="">
            </li>
        </ul>
    </div>
    <div>
        <img src="../../assets/img/bottom7.jpg" alt="">
    </div>
    <div>
        <img src="../../assets/img/bottom8.png" alt="">
    </div>

  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    //轮播图效果
    new Swiper(".homeCarousel", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    });
  },
  data() {
    return {
      // 分类层数据
      lists: [
        "classify1",
        "classify2",
        "classify3",
        "classify4",
        "classify5",
        "classify6",
        "classify7",
        "classify8",
        "classify9",
        "classify10"
      ],
      //商品层数据
      phones: [
        {
          imgsrc: "phone1",
          name: "小米10Pro",
          core: "骁龙865/50倍变焦",
          money: "￥4999起"
        },
        {
          imgsrc: "phone2",
          name: "小米10",
          core: "骁龙865/1亿像素相机",
          money: "￥3799起",
          oldmoney: "￥3999"
        },
        {
          imgsrc: "phone3",
          name: "Redmi K30",
          core: "120Hz流速屏,全速热爱",
          money: "￥1499起",
          oldmoney: "￥1699"
        },
        {
          imgsrc: "phone4",
          name: "Redmi K30 5G",
          core: "双模5G,120Hz流速屏",
          money: "￥1899起",
          oldmoney: "￥2299"
        },
        {
          imgsrc: "phone5",
          name: "Redmi Note 8 Pro",
          core: "6400万全场景四摄",
          money: "￥1199起",
          oldmoney: "￥1399"
        },
        {
          imgsrc: "phone6",
          name: "Redmi Note 8",
          core: "千元4800万四摄",
          money: "￥849起",
          oldmoney: "￥999"
        }
      ],
      tvs: [
        {
          imgsrc: "tv2",
          name: "小米电视4A 65英寸",
          core: "4KHDR，人工智能语音系统",
          money: "￥2299",
          oldmoney: "￥2999"
        },
        {
          imgsrc: "tv3",
          name: "小米电视4X 43英寸",
          core: "FHD全高清屏，人工智能语音",
          money: "￥1099",
          oldmoney: "￥1399"
        },
        {
          imgsrc: "tv4",
          name: "小米电视4C 50英寸",
          core: "4K HDR，钢琴烤漆",
          money: "￥1499起",
          oldmoney: "￥1699"
        },
        {
          imgsrc: "tv5",
          name: "小米电视4C 55英寸",
          core: "4KHDR，人工智能系统",
          money: "￥1599",
          oldmoney: "￥1999"
        },
        {
          imgsrc: "tv6",
          name: "小米电视4A 32英寸",
          core: "人工智能系统，高清液晶屏",
          money: "￥599",
          oldmoney: "￥799"
        },
        {
          imgsrc: "tv7",
          name: "小米电视4A 50英寸",
          core: "4KHDR，人工智能语音系统",
          money: "￥1499",
          oldmoney: "￥1699"
        }
      ],
      laptops: [
        {
          imgsrc: "laptop3",
          name: "Air 13.3” 2019款",
          core: "新一代独立显卡",
          money: "￥5699起"
        },
        {
          imgsrc: "laptop4",
          name: "小米笔记本15.6” MX110 独显版",
          core: "全面均衡的国民轻薄本",
          money: "¥4299起"
        },
        {
          imgsrc: "laptop5",
          name: "小米游戏本",
          core: "冷酷的性能怪兽",
          money: "￥8999"
        },
        {
          imgsrc: "laptop6",
          name: "Pro 15.6” GTX显卡",
          core: "更强悍的专业笔记本",
          money: "¥7999"
        }
      ],
      homeAppliances: [
        {
          imgsrc: "homeAppliances3",
          name: "空调(1.5匹/变频/一级能效)",
          core: "变频节能，高效制冷热",
          money: "￥2099",
          oldmoney: "¥2699"
        },
        {
          imgsrc: "homeAppliances4",
          name: "米家洗烘一体机Pro",
          core: "智能洗烘,省心省力",
          money: "¥2999"
        },
        {
          imgsrc: "homeAppliances5",
          name: "空调(大1匹/定频/三级能效)",
          core: "出众静音，快速制冷热",
          money: "￥1499",
          oldmoney: "¥1799"
        },
        {
          imgsrc: "homeAppliances6",
          name: "米家洗烘一体机",
          core: "智能烘干,高效净衣",
          money: "￥2099",
          oldmoney: "¥2299"
        },
        {
          imgsrc: "homeAppliances7",
          name: "空调C1(1.5匹/变频/一级能效)",
          core: "变频节能省电，自清洁",
          money: "￥2099",
          oldmoney: "¥2699"
        },
        {
          imgsrc: "homeAppliances8",
          name: "Redmi波轮洗衣机1A",
          core: "一键操作，父母都爱用",
          money: "¥749",
          oldmoney: "¥899"
        }
      ],
      bottom: [
           {imgsrc: "bottom1"},
           {imgsrc: "bottom2"},
           {imgsrc: "bottom3"},
           {imgsrc: "bottom4"},
           {imgsrc: "bottom5"},
           {imgsrc: "bottom6"},
      ],
      //轮播图
      banners: ["banner1", "banner2", "banner3"]
    };
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
//轮播图
.swiper-container {
  width: 100%;
  height: 180px;
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
  img {
    height: 100%;
  }
}
//分类层
.classify {
  ul {
    li {
      height: 76px;
      padding-top: 10px;
      text-align: center;
      box-sizing: border-box;
      font-size: 10px;
      svg {
        font-size: 33px;
        margin-bottom: 5px;
      }
    }
  }
}
//三张图
.three-img {
  ul {
    padding-top: 0.5rem;
    background-color: #f5f5f5;
    li {
      float: left;
      width: 50%;
      height: 7rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    & li:first-child {
      height: 14rem;
    }
  }
}

//广告图
.advertising-img,
.daily-best {
  padding-top: 0.6rem;
  background-color: #f5f5f5;
}
//商品层
.commodity {
  overflow: hidden;
  ul {
    li {
      width: 50%;
       padding: .64rem .12rem 0 .32rem;
      box-sizing: border-box;
      float: left;
      a {
        width: 100%;
        text-align: center;
        p {
          color: #3f3e3e;
          font-size: 14px;
          padding-top: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .red {
            font-size: 16px;
          color: #eb6760;
        }
        s {
          margin-left: 4px;
        }
        strong {
          background-color: #ea625b;
          color: white;
          display: inline-block;
          width: 60%;
          border-radius: 4px;
          height: 1.8rem;
          line-height: 1.8rem;
        }
      }
    }
  }
}
.ti {
  width: 100%;
  height: 52px;
  text-align: center;
  line-height: 52px;
  color: #a0a0a0;
  font-size: 14px;
}
.list_one_type2 {
  width: 100%;
  height: 100%;
  ul {
    li {
      width: 100%;
      padding: 0;
      .img-left {
        width: 50%;
        height: 100%;
      }
      .text-right {
        width: 50%;
        height: 100%;
        padding-top: 3.32rem;
      }
    }
  }
}
.bottom{
    width: 100%;
    ul{
        li{
            width: 50%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        & li:nth-child(1){
            margin-top: 1px;
        }
    }
}
//没有更多
.footer {
  margin-top: 5px;
  text-align: center;
  color: #999;
}
</style>