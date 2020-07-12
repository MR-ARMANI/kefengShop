<template>
    <div>
        <div class="top">
            <img src="../../assets/img/h06.jpg" alt="">
        </div>
        <div class="con">
            <!-- <img src="../../assets/img/jia00.jpg" alt=""> -->
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
                    {imgsrc:"zhou01",name:"小米小背包",core:"城市休闲,简约设计",money:"￥24.9起"},
                    {imgsrc:"zhou02",name:"MIJOY抽绳式背包",core:"让清洁更简单",money:"￥9.9起"},
                    {imgsrc:"zhou03",name:"抽纸 24包/箱",core:"精选原生竹浆,健康卫生",money:"￥27.9起"},
                    {imgsrc:"zhou04",name:"米家自动洗手机",core:"伸手出泡,抑菌有效",money:"￥79起"},
                    {imgsrc:"zhou05",name:"小魔爪按摩器",core:"全身按摩,小巧百搭",money:"￥9.9起"},
                    {imgsrc:"zhou06",name:"柚家湿巾",core:"75%酒精,有效清洁",money:"￥39起"},
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