<template>
    <div>
        <!-- 顶部导航栏开始 -->
        <van-row>
            <van-col span="4">
                <router-link tag="span" to="/home" class="iconfont iconjiantou-copy"></router-link>
            </van-col>
            <van-col span="16">{{$route.name}}</van-col>
            <van-col span="4">
                <router-link tag="span" to="/search" class="iconfont iconsearch"></router-link>
            </van-col>
        </van-row>
        <!-- 顶部导航栏结束 -->
        <!-- 登录层开始 -->
        <div class="login clearfix" v-show="!$store.state.islogin">
            <span class="fl">登录后可享受更多优惠</span>
            <router-link tag="i" to="/login" class="fr">
                去登录<span class="iconfont iconjiantou"></span>
            </router-link>
        </div>
        <!-- 登录层结束 -->
        <!-- 购物车为空开始 -->
        <div class="cars" v-show="iscar">
                <span class="iconfont iconkonggouwuche"></span>
                <i>你的购物车空空如也</i>
            <a  @click="goHome">去逛逛</a>
        </div>
        <!-- 购物车结束为空 -->
        <!-- 购物车商品开始 -->
        <div class="car-goods" v-show="!iscar">
            <div class="car-sp" v-for="(item,index) in cartsdata" :key="index">
                <van-checkbox v-model="item.checked" class="fl"></van-checkbox>
                <div class="car-img fl">
                    <img src="../assets/img/pp01.jpg" alt="">
                </div>
                <div class="car-msg">
                    <p>小米10 Pro 全网通版</p>
                    <span>{{item.name}} {{item.type}}</span>
                    <i>售价:{{item.money}}元</i>
                    <van-stepper v-model="item.value" />
                </div>
                <span class="iconfont icon-lajitong-copy fr" style="font-size:19px" @click="del(index)"></span>
            </div>
        </div>
        <!-- 购物车商品结束 -->
        <!-- 猜你喜欢开始 -->
        <div class="guess-like">
            <div class="guess-like-titel">
                <img src="../assets/img/thinklike.jpg" alt="">
            </div>
            <div class="guess-like-goods">
                <ul>
                    <li v-for="(item,index) in goods" :key="index">
                        <img :src="require(`../assets/img/${item.imgsrc}.jpg`)">
                        <h4>{{item.name}}</h4>
                        <span>{{item.money}}<s>{{item.oldmoney}}</s></span>
                    </li>
                    
                </ul>
            </div>
        </div>
        <!-- 猜你喜欢结束 -->
        <!-- 提交订单开始 -->
        <van-submit-bar :price="gross*100" button-text="提交订单" style="bottom:49px" @submit="toindent" v-show="!iscar"/>
        <!-- 提交订单结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //猜你喜欢商品数据
                goods:[
                    {imgsrc:"car1",name:"米家驱蚊器 智能版",money:"￥59"},
                    {imgsrc:"car2",name:"米家直流变频落地扇1X",money:"￥299"},   
                    {imgsrc:"car4",name:"Redmi Note 8 6GB+12GB",money:"￥1299",oldmoney:"￥1599"},
                    {imgsrc:"car5",name:"Redmi 8 4GB+64GB",money:"￥799",oldmoney:"￥899"},
                    {imgsrc:"car6",name:"Redmi NOTE 8 Pro 6GB+64GB",money:"￥1099",oldmoney:"￥1199"},
                    {imgsrc:"car7",name:"米家 IH 电饭煲 4L",money:"￥499",oldmoney:"￥599"},
                    {imgsrc:"car8",name:"90分框体旅游箱 24英寸",money:"￥599",oldmoney:"￥799"},
                    {imgsrc:"car9",name:"Redmi 7A 3GB+32GB",money:"￥549",oldmoney:"￥799"},
                    {imgsrc:"car10",name:"电视4A 50电影版",money:"￥1798",oldmoney:"￥2098"},
                    {imgsrc:"car11",name:"米家电饭煲4L",money:"￥249",oldmoney:"￥299"},
                    {imgsrc:"car12",name:"8H多功能青春床垫",money:"￥399"},
                    {imgsrc:"car13",name:"米家洗烘一体机Pro",money:"￥2999"},
                    {imgsrc:"car14",name:"小米旅游箱",money:"￥379",oldmoney:"￥399"},
                    {imgsrc:"car15",name:"米家照片打印机",money:"￥499"},
                    {imgsrc:"car16",name:"小米巨能写中性笔",money:"￥9.9"},
                    {imgsrc:"car17",name:"米家互联网燃气灶",money:"￥600",oldmoney:"￥799"},
                    {imgsrc:"car18",name:"知吾煮汤锅 米家定制",money:"￥99"},
                    {imgsrc:"car19",name:"米家电子温湿度计Pro",money:"￥69",oldmoney:"￥79"},
                    {imgsrc:"car20",name:"小米活塞二级",money:"￥29"},
                    {imgsrc:"car21",name:"照片打印机彩色相纸",money:"￥59"},
                ],
                iscar:false,
                cartsdata:[]
            }
        },
        methods: {
            del(i){
                this.cartsdata.splice(i,1);
                if(this.cartsdata.length==0){
                    this.iscar = true;
                }
            },
            //去逛逛跳转
            goHome(){
                this.$store.state.active = 0;
                this.$router.push({path:"/home/recommend"});
            },
            //提交订单
            toindent(){
                for(var i=0;i<this.$store.state.cart.cartsdata.length;i++){
                    if(this.$store.state.cart.cartsdata[i].checked){
                        var cartsdata = this.$store.state.cart.cartsdata;
                        this.$store.state.order.indentlist.push({
                                name:cartsdata[i].name,
                                type:cartsdata[i].type,
                                money:cartsdata[i].money,
                                value:cartsdata[i].value
                            });
                    }
                }
                this.$store.state.cart.gross = this.gross;
                this.$router.push({path:"/indent"});
                //清空购物车
                this.$store.state.cart.cartsdata = [];
            }
        },
        created(){
            this.cartsdata = this.$store.state.cart.cartsdata;
            this.checked = this.$store.state.cart.checked;
            this.gross = this.$store.state.cart.gross=0;
            if(this.$store.state.cart.cartsdata.length>=1){
                this.iscar = false;
            }else{
                this.iscar = true;
            }
            for(var i = 0;i<this.$store.state.cart.cartsdata.length;i++){
                this.gross += Number(this.$store.state.cart.cartsdata[i].money)*Number(this.$store.state.cart.cartsdata[i].value);
            }
        },
        beforeUpdate(){
            this.gross = 0;
            for(var i = 0;i<this.$store.state.cart.cartsdata.length;i++){
                if(this.$store.state.cart.cartsdata[i].checked){
                    this.gross += Number(this.$store.state.cart.cartsdata[i].money)*Number(this.$store.state.cart.cartsdata[i].value);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
//顶部导航栏
.van-row{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f2f2f2;
    font-size: 16px;
}
// 登录层
.login{
    font-size: 16px;
    padding: 0 1rem;
    // height: 3rem;
    line-height: 3rem;
    span{
        font-size: 12px;
        color: #828282;
    }
    i{
        font-size: 12px;
    }
}
//购物车为空
.cars{
    background-color: #ebebeb;
    text-align: center;
    height: 5rem;
    line-height: 5.8rem;
    margin-top: 1px;
    span{
        font-size: 30px;
        color: #c8c8c8;
        margin-right: 1rem;
    }
    i{
        display: inline-block;
        font-size: 16px;
        color: #ababab;
        span{
            font-size: 26px;
        }
    }
    a{
        width: 10%;
        border: 1px solid #c8c8c8;
        padding: 5px 15px;
        color: #575757;
        margin-left:1rem;
    }
}
// 购物车商品
.car-goods{
    background-color: white;
    padding: 10px;
    overflow: hidden;
    .car-sp{
        overflow: hidden;
        margin-top: 16px;
        .van-checkbox{
            margin-top: 36px;
            margin-right: 10px;
        }
        .car-img{
            width:90px;
            border: 1px solid #eee;
            margin-right: 18px;
        }
        .car-msg{
            p{
                font-size: 14px;
            }
            span{
                display: block;
                font-size: 13px;
            }
            i{
                display: block;
                color: #999;
                margin: 3px 0;
            }
        }
    }
    
}
// 猜你喜欢
.guess-like{
    padding-top: 0.3rem;
    background-color: #f2f2f2;
    .guess-like-titel{
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .guess-like-goods{
        margin-top: 0.4rem;
        overflow: hidden;
        background-color: white;
        ul{
            li{
                width: 49.5%;
                float: left;
                font-size: 13px;
                &:nth-child(2n){
                    margin-left: 1%;
                }
                h4{
                    padding-left: 1rem;
                    padding-top: 0.5rem;
                    overflow: hidden;/*超出部分隐藏*/
                    white-space: nowrap;/*不换行*/
                    text-overflow:ellipsis;/*超出部分文字以...显示*/
                }
                span{
                    padding-left: 1rem;
                    color: #ff832f;
                    font-size: 16px;
                    s{
                        color: #666;
                        font-size: 12px;
                        padding-left: 0.4rem;
                    }
                }
            }
        }
    }
}
</style>