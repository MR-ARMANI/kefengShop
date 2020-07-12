<template>
    <div>
        <!-- 广告页 -->
        <div class="adver">
            <img src="../../assets/img/gui5.jpg" alt="">
            <span  @click="toHome">跳过{{num}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:3,
                cleardata:null
            }
        },
        methods:{
            toHome(){
                this.$router.push("/home/recommend");//跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home/recommend");//跳转首页
                }else{
                    this.num--;
                }
            },1000)
        },
        beforeCreate() {
            //进入隐藏底部导航
            this.$store.state.isb = false;
        },
        beforeDestroy(){
            //离开显示底部导航
            this.$store.state.isb = true;
            // 当路由器切换时候，关闭定时器
            clearInterval(this.cleardata);
        },
        
    }
</script>

<style lang="scss" scoped>
.adver{
    position: absolute;
    height: 100vh;
    img{
        height: 100%;
        margin-top: -48px;
    }
    span{
        position: absolute;
        bottom: 70px;
        right: 20px;
        border: 1px solid #ccc;
        color: #696969;
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 30px;
        font-size: 13px;
    }
}

</style>