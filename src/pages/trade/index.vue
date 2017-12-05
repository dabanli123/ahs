<template>
  <div>
    <Headers></Headers>
    <Choosetype></Choosetype>
    <Service></Service>
    <Payee></Payee>
    <!-- <Chooseshop></Chooseshop>
    <Chooseaddress></Chooseaddress> -->
    <Phone></Phone>
    <Chooseexpress></Chooseexpress>
    <Phoneorigin></Phoneorigin>
    <Coupon></Coupon>
    <Order></Order>
    <Othertext></Othertext>
    {{a}}
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
     // a:state=>state.trade.a
    })
  },
  mounted(){
    //this.A_TEST()
    // setTimeout(()=>{
    //   this.M_TEST(2)
    // },2000)
  },
  methods:{
    //...mapMutations(['M_TEST']),
    //...mapActions(["A_TEST"])
  }
};
</script>

