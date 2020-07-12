<template>
    <div>
        <div class="top">
            <img src="../../assets/img/h03.jpg" alt="">
        </div>
        <div class="con">
            <img src="../../assets/img/bi00.jpg" alt="">
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
                    {imgsrc:"bi03",name:"RedmiBook 13",core:"锐龙版全面高性能轻薄本",money:"￥3499起"},
                    {imgsrc:"bi04",name:"曲面显示器 34英寸''",core:"超宽大环绕沉浸视野 爽快游戏娱乐体验",money:"￥1999起"},
                    {imgsrc:"bi01",name:"RedmiBook 16",core:"16英寸全面屏,超薄性能本",money:"￥3599起"},
                    {imgsrc:"bi05",name:"Air 12.5''",core:"全金属机身,极简设计,像杂志版便携",money:"￥3299起"},
                    {imgsrc:"bi06",name:"Air 13.3''",core:"独立显卡 指纹解锁",money:"￥4999起"},
                    {imgsrc:"bi02",name:"RedmiBook 14",core:"7nm AMD锐龙处理器,强劲性能",money:"￥3499起"},
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    background-color: #da7f90;
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