<template>
    <div>
        <!-- 全部商品为空 -->
        <div class="order-none" v-show="!$store.state.order.allorder.length">
            <div class="none">
                <span class="iconfont iconiconfontgantanhao"></span>
                <p>您还没有相关的订单</p>
                <i>可以去看看有哪些想买的</i>
            </div>
        </div>
        <!-- 全部商品的商品 -->
         <div class="indent-goods" v-for="(item,index) in $store.state.order.allorder" :key="index">
            <i>订单号:1591089993000</i>
            <div class="goods-details">
                
                <div class="goods-img fl">
                    <img src="../../assets/img/pp01.jpg">
                </div>
                <div class="goods-name fl">
                    <h4>小米10</h4>
                    <p>{{item.name}} {{item.type}}</p>
                    <span>￥{{item.money}}</span>
                </div>
                <span class="goods-number fr">x{{item.value}}</span>
                <div class="goods-affirm">
                    <button @click="del(index)">删除订单</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                indentlist:[]
            }
        },
        methods:{
            del(i){
                this.$store.state.order.allorder.splice(i,1);
            }
        }
    }
</script>

<style lang="scss" scoped>
// 商品为空
.order-none{
    transform: translateY(50px);
    .none{
        text-align: center;
        span{
            font-size: 50px;
            width: 110px;
            height: 110px;
            line-height: 110px;
            box-sizing: border-box;
            margin: 0 auto;
            display: block;
            border-radius: 50%;
            color: #ccc;
        }
        p{
            font-size: 16px;
            font-weight: bold;
            color: #666;
        }
        i{
            font-size: 16px;
            color:#999;
        }
    }
}
.indent-goods{
    border-bottom: 1px solid #ccc;
    &>i{
        font-size: 13px;
        display: block;
        background-color: #fafafa;
        padding-left: 10px;
        padding-top: 10px;
    }
    .goods-details{
        background: #fafafa;
        height: 104px;
        padding: 8px 16px 14px;
        // box-sizing: border-box;
        position: relative;
        .goods-img{
            width: 88px;
        }
        .goods-name{
            margin-left: 12px;
            h4{
                font-weight: normal;
                color: black;
            }
            span{
                margin-top: 32px;
                display:block;
                font-size: 14px;
            }
        }
        .goods-number{
            margin-top: 66px;
            color: #999;
        }
        .goods-affirm{
            position: absolute;
            bottom: 8px;
            right: 15px;
            button{
                margin-left: 10px;
                background-color: #999;
                border:0;
                padding: 4px;
                color: white;
                &:last-child{
                    background: #ee0a24;
                }
            }
        }
    }
}
</style>