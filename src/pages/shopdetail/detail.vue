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
export default {
  components:{
      Top,
      ShopMsg,
      TotalShow,
      Comment,
      NearShop,
      ShopMap
  }
}
</script>

<style lang="less">

</style>

