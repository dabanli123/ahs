<template>
    <div class="shop-detail-top-box">
        <Icon icon="icon-jiantouptccc"  className="top-left" size="12" color="#000"/>
        <div class="top-center">
            <span class="shop-msg" :class="{action:isShow == 1}"  @click="onShowMsg">门店信息</span><span class="shop-map" :class="{action:isShow==2}"  @click="onShowMap">门店地图</span>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          isShow:1
      }
  },
  methods:{
      onShowMsg() {
          this.isShow = 1;
      },
      onShowMap() {
          this.isShow = 2;
      }
  }
}
</script>

<style lang="less">
.shop-detail-top-box {
  height: 0.44rem;
  background: #fff;
  line-height: 0.44rem;
  position: relative;
  text-align: center;
  .top-left {
    display: inline-block;
    transform: rotate(180deg);
    position: absolute;
    left: .15rem;
    
  }
  .top-center {
    display: inline-block;
    font-size: 13px;
    letter-spacing: 0;
    height: .44rem;
    span{
        display:inline-block;
        width:.8rem;
        height: 0.24rem;
        line-height: 0.24rem;
        color: #333;
        &.action{
            background:#666;
            color: #fff;
        }
    }
    .shop-msg{
        border:1px solid #666;
        border-radius:4px 0 0 4px;
    }
    .shop-map{
        border:1px solid #717171;
        border-radius:0 4px 4px 0;
    }
  }
}
</style>
