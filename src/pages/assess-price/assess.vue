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
export default {
  components: {
    Headers,
    Prompt,
    Price,
    Coupons,
    Promise,
    Toggle,
    OrderCart
  }
}
</script>
