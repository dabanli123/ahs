<template>
    <div class="msg-box">
        <div class="shop-check">
            <img class="shop-picture" @click="onToggle" :src="shopdetail.coverImg"/>
            <div class="shop-name">
                <div class="shop-title-name">{{shopdetail.name}}</div>
                <div class="shop-comment-total">
                    <span class="write-star">
                        <img src="../../assets/active_star.png" alt="">
                        <img src="../../assets/active_star.png" alt="">
                        <img src="../../assets/active_star.png" alt="">
                        <img src="../../assets/active_star.png" alt="">
                        <img src="../../assets/star.png" alt="">
                    </span>
                    <span class="comment-count">共2123条评论</span>
                </div>
                <button class="shop-choose-btn" @click="goBack">选择此店</button>
            </div>
        </div>
        <div class="shop-address">
            <div class="shop-address-text">{{shopdetail.address}}</div>
            <div class="shop-address-map">查看地图</div>
        </div>
        <div class="shop-tel"><a :href="'tel:' + shopdetail.mobile"></a>{{shopdetail.mobile}}</div>
        <div class="shop-work-time">
            <span>工作日 {{shopdetail.normalBusinessStartTime}}-{{shopdetail.normalBusinessEndTime}}</span><span>节假日 {{shopdetail.weekendBusinessStartTime}}-{{shopdetail.weekendBusinessEndTime}}</span>
        </div>
        <div class="shop-img-wrap"  v-if="isShow" @click="onToggle">
            <div class="shop-img"></div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    ...mapState({
      submitInfo: state => state.trade.submitInfo,
      shopdetail: state => state.trade.shopdetail
    })
  },
  methods: {
      ...mapMutations(['M_UPDATE_SUBMITINFO']),
    onToggle() {
      this.isShow = !this.isShow;
    },
    goBack() {
      this.M_UPDATE_SUBMITINFO({
        chooseshop: this.shopdetail
      });
      this.$router.go(-2);
    }
  }
};
</script>
<style lang="less">
.msg-box {
  margin-top: 0.08rem;
  background: #fff;
  height: auto;
  // padding:0 .15rem;
  .shop-img-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.6);
    z-index: 10;
    .shop-img {
      width: 100%;
      height: 2.8rem;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .shop-check {
    display: flex;
    padding: 0.16rem 0.15rem 0.15rem 0.15rem;
    position: relative;
    &:after {
      content: "";
      width: 100%;
      height: 0.01rem;
      background: #eee;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .shop-picture {
      width: 0.8rem;
      height: 0.8rem;
      background: #d8d8d8;
      margin-right: 0.12rem;
    }
    .shop-name {
      .shop-title-name {
        font-size: 15px;
        color: #333;
        font-weight: 600;
        line-height: 0.19rem;
        margin-bottom: 0.04rem;
      }
      .shop-comment-total {
        .write-star {
          display: inline-block;
          margin-right: 0.08rem;
          img {
            display: inline-block;
            width: 0.1rem;
            height: 0.1rem;
          }
        }
        .comment-count {
          font-size: 13px;
          color: #666;
          line-height: 0.17rem;
        }
      }
      .shop-choose-btn {
        width: 0.8rem;
        height: 0.32rem;
        padding: 0 0.07rem;
        line-height: 0.32rem;
        text-align: center;
        background-color: #fcdb00;
        border: none;
        font-size: 0.13rem;
        color: #333;
        margin-top: 0.08rem;
      }
    }
  }
  .shop-address {
    min-height: 0.48rem;
    margin-left: 0.16rem;
    border-bottom: 1px solid #eee;
    line-height: 0.18rem;
    color: #333;
    font-size: 14px;
    padding-top: 0.16rem;
    position: relative;
    .shop-address-text {
      width: 2.6rem;
      float: left;
    }
    .shop-address-map {
      float: right;
      color: #4a90e2;
      margin-right: 0.16rem;
    }
  }
  .shop-tel {
    height: 0.48rem;
    margin-left: 0.16rem;
    border-bottom: 1px solid #eee;
    line-height: 0.48rem;
    color: #4a90e2;
    font-size: 14px;
  }
  .shop-work-time {
    height: 0.48rem;
    margin-left: 0.16rem;
    border-bottom: 1px solid #eee;
    line-height: 0.48rem;
    color: #333;
    font-size: 14px;
    span {
      display: inline-block;
      margin-right: 0.15rem;
    }
  }
}
</style>
