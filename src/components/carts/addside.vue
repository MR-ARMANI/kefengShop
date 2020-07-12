<template>
  <div>
      <van-nav-bar
        title="新增地址"
        left-arrow
        @click-left="onClickLeft"
        />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import areaList from "../../assets/erea.js";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onSave(save) {
      this.$store.state.cart.sidedata.push({
          id:this.$store.state.cart.sidedata.length+1,
          name:save.name,
          tel:save.tel,
          address:save.province+save.city+save.county+save.addressDetail
        });
      this.$router.push({path:"/alterside"});
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    onDelete() {
      Toast("delete");
    },
  },
    created(){
        this.name=1
        console.log(this.name);
    },
    beforeCreate(){
      this.$store.state.isb=false;
    },
    beforeDestroy(){
      this.$store.state.isb=true;
    }
};
</script>

<style lang="scss" scoped>
</style>