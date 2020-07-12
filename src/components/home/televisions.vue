<template>
    <div>
        <div class="top">
            <img src="../../assets/img/h02.jpg" alt="">
        </div>
        <div class="con">
            <img src="../../assets/img/tv00.jpg" alt="">
            <ul>
                <li v-for="(item,index) in lists" :key="index">
                    <router-link tag="a" to="/goods" class="displayblock">
                        <img :src="require(`../../assets/img/${item.imgsrc}.jpg`)">
                        <div class="con-info">
                            <b class="displayblock">{{item.name}}</b>
                            <span class="displayblock">{{item.core}}</span>
                            <i class="displayblock">{{item.money}}</i>
                            <strong>立即购买</strong>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                lists:[
                    {imgsrc:"tv01",name:"全面屏 55英寸",core:"全面屏设计,人工智能",money:"￥1599起"},
                    {imgsrc:"tv02",name:"电视4A 65''",core:"4K HDR,人工智能",money:"￥2299起"},
                    {imgsrc:"tv03",name:"电视4A 32''",core:"人工智能系统,高清屏幕",money:"￥599起"},
                    {imgsrc:"tv04",name:"电视4A 43''",core:"人工智能语音",money:"￥1099起"},
                    {imgsrc:"tv05",name:"电视4A 50''",core:"4K HDR,人工智能",money:"￥1499起"},
                    {imgsrc:"tv06",name:"全面屏电视E4",core:"时尚全面屏设计",money:"￥1149起"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    background-color: #481794;
    overflow: hidden;
    padding: 0 5px;
    h1{
        text-align: center;
        font-size: 20px;
        color: #f7bdff;
    }
    ul{
        li{
            width: 50%;
            padding: 0.3rem;
            box-sizing: border-box;
            float: left;
            a{
                width: 100%;
                text-align: center;
                .con-info{
                    background-color: white;
                    padding: 0 10px 10px;
                    box-sizing: border-box;
                    b{
                        color: #3c3c3c;
                        font-size: 14px;
                        padding-top: 5px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    span{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    i{
                        color: red;
                        font-weight: bold;
                    }
                    strong{
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
}
</style>