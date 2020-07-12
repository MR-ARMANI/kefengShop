<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row gutter="20">
            <van-col span="3"  @click="$router.go(-1)">
                <span class="iconfont iconjiantou-copy"></span>
            </van-col>
            <van-col span="18">
                <input type="text" placeholder="搜索商品名称" > 
            </van-col>
            <van-col span="3">
                <span class="iconfont iconsearch"></span>
            </van-col>
        </van-row>
        <!-- 顶部导航结束 -->
        <!-- 搜索发现开始 -->
        <div class="find">
            <h2>搜索发现</h2>
            <img src="../assets/img/search1.jpg" alt="">
            <ul>
                <li v-for="(item,index) in lists" :key="index">
                    {{item}}
                    <van-tag type="warning" color="#fff0ec" text-color="#ff7557">热门</van-tag>
                </li>
            </ul>
            
        </div>
        <!-- 搜索发现结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[
                    "和Redmi天天向上",
                    "小米众筹",
                    "618活动主会场",
                    "Redmi K30Pro",
                    "向往的智能生活",
                    "冰箱",
                    "耳机",
                    "手机",
                    "智能",
                    "全部商品",
                ],
                
            }
        },
        methods:{
                
        },
        beforeCreate(){
            this.$store.state.isb=false;
        },
        beforeDestroy(){
            this.$store.state.isb=true;
        },
        
    }
</script>

<style lang="scss" scoped>
// 顶部导航
.van-row{
    background-color: #f2f2f2;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 20px;
    input{
        width: 100%;
        height: 24px;
        border: 1px solid #e5e5e5;
        padding-left: 8px;
        font-size: 13px;
    }
    span{
        font-size: 20px;
    }
}
//搜索发现
.find{
    margin: 1.3rem;
    img{
        border-radius: 8px;
        margin-top: 1rem;
    }
    ul{
        overflow: hidden;
        li{
            float: left;
            width: 50%;
            margin-top: 1rem;
        }
        h4{
            margin-top: 1rem;
        }
    }
}
</style>