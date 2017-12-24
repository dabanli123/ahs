<template>
    <div class="shop-continar">
        <Top></Top>
        <Region></Region>
        <ShopList></ShopList>
        
        <div class="check-shop">
            已选择-{{submitInfo.chooseshop.name}}
        </div>
    </div>
</template>
<script>
import Region from "./region.vue";
import Top from "./top.vue";
import ShopList from "./shoplist.vue";
import {mapState, mapMutations, mapActions} from "vuex"; 
import Util from "../../utils";

export default {
  components: {
    Top,
    Region,
    ShopList
  },
  computed:{
    ...mapState({
      shoplist:state=>state.trade.shoplist,
      cityInfo:state=>state.trade.cityInfo,
      submitInfo:state=>state.trade.submitInfo
    })
  },
  async mounted(){
    await this.A_GET_SHOPLIST(this.cityInfo.id);
    this.A_GET_REGION(this.cityInfo.id);
    
    let id =  Util.getQueryString('id');
    this.shoplist.forEach(v => {
      if(v.id == id){
        this.M_UPDATE_SUBMITINFO({
          chooseshop:v
        });
      }
    });
  },
  methods:{
    ...mapActions(["A_GET_SHOPLIST","A_GET_REGION"]),
     ...mapMutations(['M_UPDATE_SUBMITINFO']),
    // ...mapActions(["A_GET_SHOPLIST"])
    
      // this.M_UPDATE_SUBMITINFO({
      //   chooseshop:item
      // })
      
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

