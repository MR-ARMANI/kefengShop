<template>
    <div>
        <van-nav-bar
        title="地址编辑"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="form">
            <van-field
            v-model="username"
            label="姓名"
            placeholder="姓名"
            />
            <van-field
            v-model="tel"
            label="电话"
            placeholder="电话"
            />
            <van-field
            v-model="address"
            label="地址"
            placeholder="地址"
            />
            <van-button round block type="info" native-type="submit" @click="edit">提交</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:"",
                tel:"",
                address:"",
            }
        },
        methods:{
            edit(){
                this.$store.state.cart.sidedata[this.$store.state.cart.editnum].name = this.username;
                this.$store.state.cart.sidedata[this.$store.state.cart.editnum].tel = this.tel;
                this.$store.state.cart.sidedata[this.$store.state.cart.editnum].address = this.address;
                this.$router.push({path:"/alterside"});
            },
            onClickLeft(){
                this.$router.go(-1);
            }
        },
        created(){
            this.username = this.$store.state.cart.sidedata[this.$store.state.cart.editnum].name;
            this.tel = this.$store.state.cart.sidedata[this.$store.state.cart.editnum].tel;
            this.address = this.$store.state.cart.sidedata[this.$store.state.cart.editnum].address;
        },
        beforeCreate() {
            //进入隐藏底部导航
            console.log(this.$store.state.isb);
            this.$store.state.isb = false;
        },
        beforeDestroy() {
            //离开显示底部导航
            this.$store.state.isb = true;
        }
    }
</script>

<style lang="scss" scoped>
.form{
    padding: 0 20px;
    ul{
        li{
            font-size: 16px;
            border-top:1px solid #f6f7f8 ;
            height: 44px;
            line-height: 44px;
        }
    }
}
.van-button {
    background-color: #ee0a24;
    border: 0;

}
</style>