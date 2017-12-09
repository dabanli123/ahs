<template>
  <div class="service-box">
      <span v-if="submitInfo.pickuptype == 1">单次上门收取服务费10元</span>
      <span v-if="submitInfo.pickuptype == 4">全国快递费25元以内包邮</span>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed:{
      ...mapState({
        submitInfo:state=>state.trade.submitInfo,
      })
  }
}
</script>
<style lang="less">
    .service-box{
        height: 0.32rem;
        color:#E29100;
        font-size: 13px;
        line-height: .32rem;
        margin:.08rem;
        background: #fff;
        span{
            padding-left:.12rem;
        }
    }
</style>
