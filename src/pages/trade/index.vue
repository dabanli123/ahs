<template>
  <div>
    <Headers></Headers>
    <Choosetype></Choosetype>
    <Service></Service>
    <Chooseshop></Chooseshop>
    <Chooseaddress></Chooseaddress>
    <Phone></Phone>
    <Coupon></Coupon>
    <Order></Order>
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
export default {
  components: {
    Headers,
    Choosetype,
    Chooseshop,
    Phone,
    Coupon,
    Order,
    Service,
    Chooseaddress
  },
};
</script>

