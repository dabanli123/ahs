<template>
    <div class="assess-coupons-box">
        <div class="coupon-left">领券加价</div>
        <div class="coupon-right">
            <span class="text">新用户礼包，千元邀请礼包</span>
            <Icon icon="icon-jiantouptccc" size="14" color="#ccc"/>
        </div>
    </div>
</template>
<style lang="less">
.assess-coupons-box{
    background: #ffffff;
    height: .48rem;
    margin-top: .08rem;
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
