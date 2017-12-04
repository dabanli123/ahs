<template>
  <div class="coupon-box">
      <div class="coupon-left">优惠券</div>
      <div class="coupon-right">
          <span class="text">无优惠券可用</span>
          <Icon icon="icon-jiantouptccc" size="14" color="#ccc"/>
      </div>
  </div>
</template>
<style lang="less">
    .coupon-box{
        height: 0.48rem;
        margin:.08rem;
        background-color: #fff;
        line-height: 0.48rem;
        position: relative;
        .coupon-left{
            display: inline-block;
            font-size: 15px;
            color: #333;
            margin-left:.12rem;
        }
        .coupon-right{
            display: inline-block;
            position: absolute;
            right:.12rem;
            .text{
                font-size: 13px;
                color:#666;
                margin-right:.04rem;
            }
        }
    }
</style>
