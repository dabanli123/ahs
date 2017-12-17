<template>
  <div>
    <Headers></Headers>
    <Choosetype></Choosetype>
    <Service v-if="submitInfo.pickuptype != 5"></Service>
    <Payee v-if="submitInfo.pickuptype == 4"></Payee>
    <Chooseshop v-if="submitInfo.pickuptype == 5"></Chooseshop>
    <Chooseaddress v-if="submitInfo.pickuptype == 1"></Chooseaddress>
    <Phone></Phone>
    <Chooseexpress v-if="submitInfo.pickuptype == 4"></Chooseexpress>
    <Phoneorigin v-if="submitInfo.pickuptype == 4"></Phoneorigin>
    <Coupon></Coupon>
    <Order></Order>
    <Othertext v-if="submitInfo.pickuptype == 4"></Othertext>
  </div>
</template>
<script>
import Headers from "./component/headers.vue";
import Choosetype from "./component/choosetype.vue";
import Chooseshop from "./component/chooseshop.vue";
import Phone from "./component/phone.vue";
import Coupon from "./component/coupon.vue";
import Order from "./component/order.vue";
import Service from "./component/servicecharge.vue";
import Chooseaddress from "./component/chooseaddress.vue";
import Payee from "./component/payee.vue";
import Chooseexpress from "./component/chooseexpress.vue";
import Phoneorigin from "./component/phoneorigin.vue";
import Othertext from "./component/othertext.vue";
import {mapState, mapMutations, mapActions} from "vuex";
export default {
  components: {
    Headers,
    Choosetype,
    Chooseshop,
    Phone,
    Coupon,
    Order,
    Service,
    Chooseaddress,
    Payee,
    Chooseexpress,
    Phoneorigin,
    Othertext
  },
  computed:{
    ...mapState({
      submitInfo:state=>state.trade.submitInfo,
      cityInfo:state=>state.trade.cityInfo
    })
  },
  mounted(){
    this.A_GET_SHOPLIST(this.cityInfo.id);
    this.A_GET_USERINFO();
  },
  methods:{
    //...mapMutations(['M_TEST']),
    ...mapActions(["A_GET_SHOPLIST","A_GET_USERINFO"])
  }
};
</script>

