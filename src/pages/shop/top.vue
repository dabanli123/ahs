<template>
    <div class="title-box">
        <Icon icon="icon-jiantouptccc"  className="top-left" size="12" color="#000"/>
        <span class="top-center">选择门店</span>
    </div>
</template>
<style lang="less">
.title-box {
    width: 100%;
    height: 0.44rem;
    background-color: #fff;
    line-height: 0.44rem;
    position: relative;
    z-index: 10;
    .top-left {
      margin-left: 0.15rem;
      display: inline-block;
      transform: rotate(180deg);
    }
    .top-center {
      display: inline-block;
      font-size: 17px;
      letter-spacing: 0;
      position: absolute;
      left: 50%;
      margin-left: -0.51rem;
    }
  }
</style>
