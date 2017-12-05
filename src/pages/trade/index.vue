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
};
</script>

