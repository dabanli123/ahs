<template>
    <div class="order-box">
        <div class="order">
            <div class="order-left">
                <div class="normal">
                    <div class="price">回收总价 <span>￥1610</span></div>
                    <div class="context">提交订单等于同意<span class="blue">爱回收条款</span></div>
                </div>
                <div class="detail">
                    <span class="text">明细</span>
                    <Icon icon="icon-jiantou_down" size="14" color="#ccc"/>
                </div>
            </div>
            <div class="order-right">
                提交订单
            </div>
        </div>
        <div class="order-detail">
            <div class="detail-top">
                <div class="detail-title">价格明细</div>
                <div class="detail-close">
                    <Icon icon="icon-guanbi" size="20" color="#666"/>
                </div>
            </div>
            <div class="detail-context">
                <div class="context-list">
                    <div class="list">
                        <span class="left">iPhone X</span>
                        <span class="right">￥8888</span>
                    </div>
                    <div class="list">
                        <span class="left">优惠券</span>
                        <span class="right">+￥5</span>
                    </div>
                </div>
                <div class="context-total">
                    <span>预估回收价：<span class="total-price">￥8893</span></span>
                </div>
            </div>
        </div>
  </div>
</template>
<style lang="less">
@import '../../../styles/function.less';
.order-box {
  position: absolute;
  bottom: 0;
  
  width: 100%;
  .order {
    display: flex;
    //display:none;
    height: 0.49rem;
    background: #fff;
    .order-left {
      display: inline-block;
      width: 2.54rem;
      height: 100%;
      .normal {
        margin: 0.06rem 0.15rem;
        display: inline-block;
        vertical-align: middle;
        .price {
          font-size: 15px;
          font-weight: 500;
          color: #333;
          span {
            color: #fc6232;
          }
        }
        .context {
          font-size: 11px;
          color: #666;
          .blue {
            color: #4a90e2;
          }
        }
      }
      .detail {
        display: inline-block;
        line-height: 0.49rem;
        vertical-align: middle;
        font-size: 13px;
        color: #666;
        .text {
          margin-right: 0.03rem;
        }
      }
    }
    .order-right {
      display: inline-block;
      width: 1.2rem;
      height: 100%;
      background: #fcdb00;

      text-align: center;
      line-height: 0.49rem;
      font-size: 17px;
      color: #333;
    }
  }
  .order-detail{
      display: none;
      height:2.4rem;
      background: #fff;
      .detail-top{
          height: 0.44rem;
          line-height: .44rem;
          position: relative;
          display: flex;
          .retina-border();
          .detail-title{
              text-align: center;
              flex:1;
          }
          .detail-close{
              width:.2rem;
              position: absolute;
              right:.15rem;
          }
      }
      .detail-context{
          //border:1px solid red;
          position: relative;
          .context-list{
              margin: .16rem 0 .16rem .15rem;
              //border-bottom: 1px solid #ddd;
               position: relative;

              .retina-border();
              .list{
                  position: relative;
                  padding-bottom: .12rem;
                  font-size: 13px;
                  color:#333;
                  &:last-child{
                      padding-bottom:none;
                  }
                  span{
                      display: inline-block;
                      line-height: .17rem;
                  }
                  .right{
                      position: absolute;
                      right:.15rem;
                  }
              }
          }
          .context-total{
              font-size:13px;
              color: #333;
              position: relative;
              //top: .16rem;
              right: -2.43rem;
              .total-price{
                  color: #FC6232;
              }
          }
      }
  }
}

</style>
