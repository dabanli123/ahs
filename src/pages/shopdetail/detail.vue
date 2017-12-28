<template>
    <div class="list-box">
        <Top></Top>
        <ShopMsg></ShopMsg>
        <TotalShow></TotalShow>
        <Comment></Comment>
        <NearShop></NearShop>
        <!-- <ShopMap></ShopMap> -->
    </div>
</template>
<script>
import Top from './top.vue';
import ShopMsg from './shopmessage.vue';
import TotalShow from './totalshow.vue';
import Comment from './comment.vue';
import NearShop from './nearshop.vue';
import ShopMap from './map.vue';
import Util from '../../utils/index.js';
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  components:{
      Top,
      ShopMsg,
      TotalShow,
      Comment,
      NearShop,
      ShopMap
  },
  computed:{
    ...mapState({
      shoplist:state=>state.trade.shoplist,
      cityInfo:state=>state.trade.cityInfo,
      submitInfo:state=>state.trade.submitInfo,
      shopdetail:state=>state.trade.shopdetail
    })
  },
  mounted(){
      let id = Util.getQueryString("id");
      this.A_GET_SHOP_DETAIL(id);
      this.A_GET_USER_COUNT();
      this.A_GET_USER_COMMENT();
      if(this.shoplist.length == 0){
        this.A_GET_SHOPLIST(this.cityInfo.id);
      }
  },
  methods:{
    ...mapActions(["A_GET_SHOP_DETAIL","A_GET_USER_COUNT","A_GET_USER_COMMENT","A_GET_SHOPLIST"])
      
  }
}
</script>

<style lang="less">

</style>

