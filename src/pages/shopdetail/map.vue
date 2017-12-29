<template>
    <div class="shop-map-box" id="map-box"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      shopdetail: state => state.trade.shopdetail
    })
  },
  watch: {
    shopdetail(newVal) {
        var map = new BMap.Map("map-box"), // 创建Map实例
        point = new BMap.Point(
            this.shopdetail.logitude,
            this.shopdetail.latitude
        );
        var marker = new BMap.Marker(point); // 标注
        map.addOverlay(marker); // 创建标注
        map.centerAndZoom(point, 18);
    }
  },
  mounted() {
      if(!this.shopdetail) return;

    var map = new BMap.Map("map-box"), // 创建Map实例
      point = new BMap.Point(
        this.shopdetail.logitude,
        this.shopdetail.latitude
      );
      var marker = new BMap.Marker(point); // 标注
      map.addOverlay(marker); // 创建标注
      map.centerAndZoom(point, 18);
  }
};
</script>

<style lang="less">
.shop-map-box {
  width: 100%;
  height: 6.23rem;
  //background: #000;
}
</style>
