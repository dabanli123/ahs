<template>
    <div class="order-cart-box">
        <div class="shopping-cart-box">
            <Icon icon="icon-icon_buy" size="22" color="#ccc"/>
            <div>回收车</div>
        </div>
        <div class="add-cart-box">
            加入回收车
        </div>
        <div class="now-cart-box">
            立即换钱
        </div>
    </div>
</template>
<style lang="less">
.order-cart-box {
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 2;
  height: 0.49rem;
  width: 100%;
  display: flex;
  line-height: 0.49rem;
  .shopping-cart-box {
    width: 0.94rem;
    border-right: .5px solid #dedede;
    text-align: center;
    font-size: 11px;
    color: #333333;
    letter-spacing: 0;
    line-height: 22px;
  }
  .add-cart-box {
    width: 1.26rem;
    text-align: center;
    font-size: 17px;
    color: #333333;
  }
  .now-cart-box {
    background: #fcdb00;
    font-size: 17px;
    color: #333333;
    width: 1.54rem;
    text-align: center;
  }
}
</style>
