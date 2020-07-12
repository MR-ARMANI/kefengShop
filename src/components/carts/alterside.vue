<template>
    <div>
        <van-nav-bar
        title="地址编辑"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-address-list
        v-model="chosenAddressId"
        :list="$store.state.cart.sidedata"
        default-tag-text="默认"
        add-button-text="使用地址"
        @add="add"
        @edit="edit"
        />
        <!-- 添加联系人开始 -->
        <van-contact-card @click="addattn"/>
        <!-- 添加联系人结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                chosenAddressId: '1',
            }
        },
        methods:{
            //保存地址
            add(){
                this.$store.state.cart.chosenAddressId = this.chosenAddressId;
                this.$router.push({path:"/indent"});
            },
            //编辑地址
            edit(item,index){
                console.log(item);
                console.log(index);
                this.$store.state.cart.editnum = index;
                this.$router.push({path:"/editside"});
            },
            //返回
            onClickLeft(){
                this.$router.go(-1);
            },
            //添加联系人
            addattn(){
                this.$router.push({path:"/addside"});
            }
        },
        beforeCreate() {
            //进入隐藏底部导航
            this.$store.state.isb = false;
        },
        // beforeDestroy() {
        //     //离开显示底部导航
        //     this.$store.state.isb = false;
        // }
    }
</script>

<style lang="scss" scoped>
.van-address-list{
    padding-bottom: 0;
}
</style>