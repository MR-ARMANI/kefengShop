<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-nav-bar
            title="订单"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 顶部导航结束 -->
        
        <!-- 联系人开始 -->
        <van-contact-card type="edit" :name="side.name" :tel="side.tel" to="/alterside"/>
        <!-- 联系人结束 -->
        <!-- 订单商品开始 -->
        <div class="indent-goods" v-for="(item,index) in $store.state.order.indentlist" :key="index">
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
            </div>
        </div>
        <!-- 订单商品结束 -->
        <!-- 提交订单开始 -->
        <van-submit-bar :price="$store.state.cart.gross*100" button-text="提交订单" @submit="toorder"/>
        <!-- 提交订单结束 -->
    </div>
</template>

<script>
import { Dialog } from 'vant';
import { Notify } from 'vant';
    export default {
        data(){
            return {
                // indentlist:[],
                // cartsdata:[],
                //地址
                side:{name:"张三1",tel:"130000000000"}
            }
        },
        methods:{
            //返回按钮
            onClickLeft(){
                Dialog.confirm({
                    title: '是否要放弃此次支付',
                    message: '放弃自动把此次订单放到待支付',
                }).then(() => {
                    var upmoney = this.$store.state.order.upmoney;
                    var indentlist = this.$store.state.order.indentlist;
                    for(var i=0;i<this.$store.state.order.indentlist.length;i++){
                        upmoney.push({
                            money:indentlist[i].money,
                            name:indentlist[i].name,
                            type:indentlist[i].type,
                            value:indentlist[i].value,
                            times:Date.parse(new Date())
                        });
                    }
                    this.$store.state.order.active = 1;
                    this.$router.push({path:"/orderlist/orderPay"});
                    // this.$store.state.cart.cartsdata=[];
                })
                .catch(() => {
                });
            },
            // 提交订单
            toorder(){
                Notify({
                    type: 'primary',
                    message: '支付成功',
                    duration: 1000,
                });
                this.$router.push({path:"/orderlist/orderGoods"});
                this.$store.state.order.active = 2;
                var unpaid = this.$store.state.order.unpaid;
                var indentlist = this.$store.state.order.indentlist;
                var allorder =  this.$store.state.order.allorder;
                for(var i=0;i<indentlist.length;i++){
                    unpaid.push({
                        money:indentlist[i].money,
                        name:indentlist[i].name,
                        type:indentlist[i].type,
                        value:indentlist[i].value,
                        times:Date.parse(new Date())
                    });
                    allorder.push({
                        money:indentlist[i].money,
                        name:indentlist[i].name,
                        type:indentlist[i].type,
                        value:indentlist[i].value,
                        times:Date.parse(new Date())
                    });
                }
                this.$store.state.order.indentlist = [];
            }
        },
        created(){
            // this.cartsdata = this.$store.state.cart.cartsdata;
            this.side.name = this.$store.state.cart.sidedata[this.$store.state.cart.chosenAddressId-1].name;
            this.side.tel = this.$store.state.cart.sidedata[this.$store.state.cart.chosenAddressId-1].tel;
        },
        beforeCreate() {
            //进入隐藏底部导航
            this.$store.state.isb = false;
        },
        beforeDestroy() {
            //离开显示底部导航
        }
    }
</script>

<style lang="scss" scoped>
// 订单商品
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
        padding: 8px 16px;
        box-sizing: border-box;
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
    }
}
</style>