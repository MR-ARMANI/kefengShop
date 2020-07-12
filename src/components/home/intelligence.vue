<template>
    <div>
        <div class="top">
            <img src="../../assets/img/h04.jpg" alt="">
        </div>
        <div class="con">
            <img src="../../assets/img/z00.jpg" alt="">
            <ul>
                <li v-for="(item,index) in lists" :key="index">
                    <img :src="require(`../../assets/img/${item.imgsrc}.jpg`)">
                    <router-link tag="a" to="/goods" class="displayblock">
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
                    {imgsrc:"z01",name:"扫拖一体机器人",core:"扫得干净,拖得彻底",money:"￥1499起"},
                    {imgsrc:"z02",name:"小米智能摄像",core:"高清画质,守护家的安全",money:"￥179起"},
                    {imgsrc:"z03",name:"净水器600G",core:"600加仑桶量,流速快",money:"￥1399起"},
                    {imgsrc:"z04",name:"小米AI音箱",core:"听音乐、语音遥控家电",money:"￥299起"},
                    {imgsrc:"z05",name:"小米体脂秤2",core:"轻松掌握身体脂肪率",money:"￥99起"},
                    {imgsrc:"z06",name:"小米净水器",core:"400加仑大流量",money:"￥1099起"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    background-color: #fca04d;
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