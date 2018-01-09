<template>
    <div class="assess-header-box">
        <Icon icon="icon-jiantouptccc"  className="top-left" size="12" color="#333"/>
        <span class="top-center">评估价格</span>
        <span class="top-right">重新询价</span>
    </div>
</template>
<style lang="less">
.assess-header-box {
  height: 0.44rem;
  background: #fff;
  line-height: .44rem;
  position: relative;
  .top-left{
    margin-left:.15rem;
    display: inline-block;
    transform:rotate(180deg);
  }
  .top-center{
    display: inline-block;
    font-size: 17px;
    letter-spacing: 0;
    position: absolute;
    left:50%;
    margin-left:-.34rem;
    color: #333333;
  }
  .top-right{
    display: inline-block;
    font-size: 15px;
    letter-spacing: 0;
    position: absolute;
    right:.12rem;
  }
}
</style>
