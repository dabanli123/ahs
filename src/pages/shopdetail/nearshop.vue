<template>
    <div class="nearshop-box">
        <div class="nearshop-title">附近门店</div>
        <div class="nearshop-list">
            <div class="nearshop-msg">
                <div class="shop-name">五角场万达店</div>
                <div class="shop-address">上海市杨浦区淞沪路433号6号楼12F</div>
                <div class="shop-distance">路程588米</div>
            </div>
            <div class="nearshop-btn">选择此店</div>
        </div>
        <div class="nearshop-list">
            <div class="nearshop-msg">
                <div class="shop-name">五角场万达店</div>
                <div class="shop-address">上海市杨浦区淞沪路433号6号楼12F我是第二行我是第二行我是第二行</div>
                <div class="shop-distance">路程588米</div>
            </div>
            <div class="nearshop-btn">选择此店</div>
        </div>
        <div class="nearshop-list">
            <div class="nearshop-msg">
                <div class="shop-name">五角场万达店</div>
                <div class="shop-address">上海市杨浦区淞沪路433号6号楼12F</div>
                <div class="shop-distance">路程588米</div>
            </div>
            <div class="nearshop-btn">选择此店</div>
        </div>
    </div>
</template>
<style lang="less">
.nearshop-box {
  height: auto;
  background: #fff;
  margin-top: 0.08rem;
  .nearshop-title {
    height: 0.35rem;
    font-size: 15px;
    color: #333333;
    letter-spacing: 0;
    line-height: 19px;
    padding: 0.16rem 0 0 0.15rem;
    box-sizing: border-box;
  }
  .nearshop-list {
    padding: 0.16rem 0 0.16rem 0.15rem;
    display: flex;
    height: auto;
    position: relative;
    line-height: auto;
    .nearshop-msg {
      .shop-name {
        font-size: 15px;
        color: #333333;
        letter-spacing: 0;
        line-height: 19px;
        margin-bottom: 0.04rem;
      }
      .shop-address {
        font-size: 13px;
        color: #666666;
        letter-spacing: 0;
        line-height: 17px;
        width: 2.34rem;
        margin-bottom: 0.04rem;
      }
      .shop-distance {
        font-size: 11px;
        color: #999999;
        letter-spacing: 0;
        line-height: 15px;
      }
    }
    .nearshop-btn {
      line-height: 0.32rem;
      width: 0.8rem;
      height: 0.32rem;
      background: #fcdb00;
      border-radius: 2px;
      font-size: 13px;
      color: #333333;
      text-align: center;
      position: absolute;
      top: 50%;
      right: 0.15rem;
      transform: translateY(-50%);
    }
    &:after {
      content: "";
      width: 3.59rem;
      height: 0.01rem;
      background: #eee;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &:last-child {
      &:after {
        content: "";
        width: 0;
        height: 0;
      }
    }
  }
}
</style>
