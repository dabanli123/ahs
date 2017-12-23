<template>
    <div class="shop-continar">
        <Top></Top>
        <Region></Region>
        <ShopList></ShopList>
        
        <div class="check-shop">
            已选择-上海五角场门店
        </div>
    </div>
</template>
<script>
import Region from "./region.vue";
import Top from "./top.vue";
import ShopList from "./shoplist.vue";
import {mapState, mapMutations, mapActions} from "vuex"; 

export default {
  components: {
    Top,
    Region,
    ShopList
  },
  computed:{
    ...mapState({
      // submitInfo:state=>state.trade.submitInfo,
      cityInfo:state=>state.trade.cityInfo
    })
  },
  mounted(){
    this.A_GET_SHOPLIST(this.cityInfo.id);
    this.A_GET_REGION(this.cityInfo.id);
  },
  methods:{
    ...mapActions(["A_GET_SHOPLIST","A_GET_REGION"])
  }
};
</script>
<style lang="less">
.shop-continar {
  .check-shop {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: 13px;
    color: #e29100;
    background: #fef8cc;
    height: 0.32rem;
    line-height: 0.32rem;
    text-align: center;
  }
}
</style>

