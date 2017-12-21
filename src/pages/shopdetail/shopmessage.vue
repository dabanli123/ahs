<template>
    <div class="msg-box">
        <div class="shop-check">
            <div class="shop-picture" @click="onToggle"></div>
            <div class="shop-name">
                <div class="shop-title-name">上海五角场万达店</div>
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
                <button class="shop-choose-btn">选择此店</button>
            </div>
        </div>
        <div class="shop-address">
            <div class="shop-address-text">淞沪路77号万达广场地下一层</div>
            <div class="shop-address-map">查看地图</div>
        </div>
        <div class="shop-tel">021-123456</div>
        <div class="shop-work-time">
            <span>工作日 10:00-22:00</span><span>节假日 10:00-22:00</span>
        </div>
        <div class="shop-img-wrap"  v-if="isShow" @click="onToggle">
            <div class="shop-img"></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
      return {
          isShow:false
      }
  },
  methods: {
      onToggle() {
          this.isShow = !this.isShow;
      }
  }
}
</script>
<style lang="less">
.msg-box{
    margin-top:.08rem;
    background:#fff;
    height: auto;
    // padding:0 .15rem;
    .shop-img-wrap{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        background: rgb(0, 0, 0, 0.6);
        z-index: 10;
        .shop-img{
            width:100%;
            height: 2.8rem;
            background: #fff;
            position: absolute;
            top:50%;
            left: 0;
            transform: translateY(-50%);
        }
    }
    .shop-check{
        display: flex;
        padding: .16rem .15rem .15rem .15rem;
        position: relative;
        &:after{
            content: '';
            width: 100%;
            height: 0.01rem;
            background: #eee;
            position: absolute;
            bottom: 0;
            left:0;
        }
        .shop-picture{
            width: .8rem;
            height: 0.8rem;
            background:#d8d8d8;
            margin-right:.12rem;
        }
        .shop-name{
            .shop-title-name{
                font-size: 15px;
                color:#333;
                font-weight: 600;
                line-height:.19rem;
                margin-bottom: .04rem;
            }
            .shop-comment-total{
                .write-star{
                    display: inline-block;
                    margin-right: .08rem;
                    img{
                        display: inline-block;
                        width: .1rem;
                        height: .1rem;
                    }
                }
                .comment-count{
                    font-size: 13px;
                    color: #666;
                    line-height: .17rem;
                }
            }
            .shop-choose-btn{
                width:.8rem;
                height:.32rem;
                padding: 0 0.07rem;
                line-height: 0.32rem;
                text-align: center;
                background-color: #fcdb00;
                border: none;
                font-size: .13rem;
                color: #333;
                margin-top: .08rem;
            }
        }
    }
    .shop-address{
        height: 0.48rem;
        margin-left: .16rem;
        border-bottom: 1px solid #eee;
        line-height: .48rem;
        color: #333;
        font-size: 14px;
        position: relative;
        
        .shop-address-map{
            position: absolute;
            right: .15rem;
            top:0;
            color: #4A90E2;
        }
    }
    .shop-tel{
        height: 0.48rem;
        margin-left: .16rem;
        border-bottom: 1px solid #eee;
        line-height: .48rem;
        color: #4A90E2;
        font-size: 14px;
    }
    .shop-work-time{
        height: 0.48rem;
        margin-left: .16rem;
        border-bottom: 1px solid #eee;
        line-height: .48rem;
        color: #333;
        font-size: 14px;
        span{
            display: inline-block;
            margin-right: .15rem;
        }
    }
}
</style>
