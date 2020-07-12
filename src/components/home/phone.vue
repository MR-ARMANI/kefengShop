<template>
    <div>
        <div class="top">
            <img src="../../assets/img/shou00.jpg" alt="">
        </div>
        <div class="con">
            <!-- <img src="../../assets/img/z00.jpg" alt=""> -->
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
                    {imgsrc:"shou01",name:"Redmi 8A",core:"5000mAh超长续航",money:"￥599起"},
                    {imgsrc:"shou02",name:"Redmi 8",core:"5000mAh超长续航",money:"￥799起"},
                    {imgsrc:"shou03",name:"Redmi Note 8",core:"千元4800万四摄",money:"￥849起"},
                    {imgsrc:"shou04",name:"Redmi K30 Pro 变焦版",core:"双模5G,骁龙865",money:"￥3799起"},
                    {imgsrc:"shou05",name:"Redmi 7A",core:"小巧大电量",money:"￥540起"},
                    {imgsrc:"shou06",name:"Redmi K30",core:"120HZ流速屏,全速热爱",money:"￥1499起"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.con{
    background-color: white;
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