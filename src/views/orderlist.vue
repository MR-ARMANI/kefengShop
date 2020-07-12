<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-arrow
            @click-left="left"
        />
        <van-tabs v-model="$store.state.order.active" color="#ed5b00" title-active-color="#ed5b00">
            <van-tab title="全部订单" to="/orderList/orderAll"></van-tab>
            <van-tab title="待支付" to="/orderList/orderPay"></van-tab>
            <van-tab title="待收货" to="/orderList/orderGoods"></van-tab>
            <van-tab title="已完成" to="/orderList/orderEnd"></van-tab>
        </van-tabs>
        <!-- 二级路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // active: 2,
            }
        },  
        methods:{
            //返回
            left(){
                this.$store.state.active = 3;
                this.$router.push('/my');
            }
        },
        beforeCreate() {
            //进入隐藏底部导航
            this.$store.state.isb = false;
        },
        beforeDestroy() {
            //离开显示底部导航
            this.$store.state.isb = true;
        }
    }
</script>

<style lang="scss" scoped>

</style>