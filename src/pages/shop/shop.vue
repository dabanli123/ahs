<template>
    <div class="shop-continar">
        <Top></Top>
        <Region></Region>
        <ShopList></ShopList>
        
        <div class="check-shop">
            已选择-上海五角场门店
        </div>
    </div>
</template>
<script>
import Region from "./region.vue";
import Top from "./top.vue";
import ShopList from "./shoplist.vue";

export default {
  components: {
    Top,
    Region,
    ShopList
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

