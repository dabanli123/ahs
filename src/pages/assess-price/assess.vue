<template>
    <div class="assess-box">
        <Headers></Headers>
        <Prompt></Prompt>
        <Price></Price>
        <Coupons></Coupons>
        <Promise></Promise>
        <Toggle></Toggle>
        <OrderCart></OrderCart>
    </div>
</template>
<script>
import Headers from "./headers.vue";
import Prompt from "./prompt.vue";
import Price from "./price.vue";
import Coupons from "./coupons.vue";
import Promise from "./promise.vue";
import Toggle from "./toggle.vue";
import OrderCart from "./order-cart.vue";
import {mapState, mapMutations, mapActions} from "vuex"; 
import Util from "../../utils";

export default {
  components: {
    Headers,
    Prompt,
    Price,
    Coupons,
    Promise,
    Toggle,
    OrderCart
  },
  computed:{
    ...mapState({
      productInfo:state=>state.inquiry.productInfo
    })
  },
  async mounted(){
    let key =  Util.getQueryString('key');
    this.A_GET_INQUIRY_RESULT(key)
  },
  methods:{
    ...mapActions(["A_GET_INQUIRY_RESULT"])
  
  }
}
</script>
