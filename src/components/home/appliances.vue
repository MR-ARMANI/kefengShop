<template>
    <div>
        <div class="top">
            <img src="../../assets/img/h01.jpg" alt="">
        </div>
        <div class="con">
            <img src="../../assets/img/jia00.jpg" alt="">
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
                    {imgsrc:"jia01",name:"Redmi波轮洗衣机1A",core:"8kg大容量,一键操作,父母都爱用",money:"￥749起"},
                    {imgsrc:"jia02",name:"米家洗烘一体机",core:"智能烘干,高效率净衣",money:"￥1999起"},
                    {imgsrc:"jia03",name:"变频滚筒洗衣机1S 8kg",core:"超薄机身大容量,除菌净衣更健康",money:"￥1299起"},
                    {imgsrc:"jia04",name:"变频滚筒洗衣机1C",core:"10kg大容量,专业羽绒洗",money:"￥1499起"},
                    {imgsrc:"jia05",name:"米家两门冰箱 160L",core:"小体积大容量,三温区多效保鲜",money:"￥899起"},
                    {imgsrc:"jia06",name:"风冷对开门冰箱 483lL",core:"双变频,大容量,风冷无霜不结冰",money:"￥2099起"},
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