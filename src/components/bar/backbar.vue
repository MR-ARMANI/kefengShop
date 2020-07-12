<template>
    <div class="back-bar">
        <span class="back" @click="$router.go(-1)">
            <span class="iconfont iconjiantou-copy icon"></span>
        </span>
        <h2>{{ title }}</h2>
        <!-- <router-link to="/search" class="iconfont iconsearch icon"></router-link > -->
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
    data() {
        return {};
    }
}
</script>

<style lang="scss">
.back-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    overflow: hidden; 
    color: #666666;
    background-color: #e4e4e4;
    z-index: 1;
    .back {
        position: absolute;
        top: 8px;
        left: 5px;
        text-align: center;
        .icon {
            width: 24px;
            height: 24px;
        }
    }

    h2 {
        width: 70%;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
    }
    .iconsearch{
        position: absolute;
        right: 20px;
        top: 8px;
    }
}
</style>


