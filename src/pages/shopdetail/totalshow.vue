<template>
    <div class="total-box">
        <div class="total-small-box">
            <span>我们的用户</span><span class="total-num">{{userCount && userCount.userCount}}</span>
        </div>
        <div class="total-small-box">
            <span>好评率反馈</span><span class="total-num">{{userCount && userCount.rank*100}}%</span>
        </div>
        <div class="total-small-box">
            <span>回收机器量</span><span class="total-num">{{userCount && userCount.orderCount}}</span>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      userCount: state => state.trade.userCount
    })
  }
};
</script>
<style lang="less">
.total-box {
  margin-top: 0.08rem;
  background: #fff;
  height: auto;
  padding: 0.16rem 0.15rem;
  display: flex;
  text-align: center;
  line-height: auto;
  .total-small-box {
    font-size: 12px;
    color: #666;
    line-height: 0.16rem;
    position: relative;
    .total-num {
      font-size: 14px;
      color: #333;
      line-height: 0.18rem;
    }
    &:after {
      content: "";
      width: 0.01rem;
      height: 0.24rem;
      background: #dedede;
      position: absolute;
      right: 0;
      top: 0.05rem;
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
