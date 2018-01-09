<template>
    <div class="price-box">
        <div class="price-show">
            <div class="phone-name">iPhone 8 Plus</div>
            <div class="phone-price">10900<span>元</span></div>
            <div class="other-msg">
                <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
                    <title>Combined Shape</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="报价2.3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"></g>
                </svg>
                <span>哟，够一个伙食费</span>
            </div>
            <div class="triangle-box"></div>
        </div>
        <div class="point-msg">一周后<span class="other-color">再降¥50</span>，建议您赶快出手!</div>
        <div class="price-up-down">
            <div class="has-data"></div>
            <div class="no-data">
              <Icon icon="icon-mendian" svg size="26" className="context-icon"/>
              <div class="no-data-text">亲，该机型暂无历史价格趋势</div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.price-box {
  background: #fff;
  height: 2.99rem;
  .price-show {
    width: 3.45rem;
    height: 1.4rem;
    margin: 0 auto;
    // margin-top: 0.1rem;
    background-image: linear-gradient(-270deg, #fa632c 0%, #ffa028 98%);
    box-shadow: 0 0 10px 0 rgba(255, 89, 37, 0.3);
    border-radius: 4px;
    color: #fff;
    text-align: center;
    position: relative;
    .phone-name {
      font-size: 13px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 17px;
      padding-top: 0.2rem;
      //   margin-top:.2rem;
    }
    .phone-price {
      font-size: 48px;
      color: #ffffff;
      letter-spacing: -0.48px;
      line-height: 52px;
      span {
        font-size: 18px;
        color: #ffffff;
        letter-spacing: -0.18px;
        line-height: 30px;
      }
    }
    .other-msg {
      line-height: 0.24rem;
      height: 0.24rem;
      opacity: 0.2;
      background: #ffffff;
      border-radius: 2px;
      width: 1.24rem;
      margin: 0 auto;
      text-align: center;
      span {
        font-size: 12px;
        color: #ffffff;
        letter-spacing: 0;
        line-height: 16px;
      }
    }
    .triangle-box {
      position: absolute;
      bottom: 0rem;
      left: 165px;
      border: 6px solid transparent;
      border-bottom-color: #eee;
    }
  }
  .point-msg {
    text-align: center;
    margin: 0.16rem 0.15rem 0;
    position: relative;
    &:before {
      content: "";
      width: 0.54rem;
      height: 0.01rem;
      background: #eee;
      position: absolute;
      left: 0.05rem;
      top: 0.09rem;
    }
    &:after {
      content: "";
      width: 0.54rem;
      height: 0.01rem;
      background: #eee;
      position: absolute;
      right: 0.07rem;
      top: 0.09rem;
    }
  }
  .price-up-down {
    .no-data {
      height: 1rem;
      width: 3.45rem;
      border: 1px solid #eeeeee;
      margin: 0 auto;
      text-align: center;
      .content-icon {
        // margin-top: .28rem;
      }
      .no-data-text {
        font-size: 13px;
        color: #999999;
        line-height: 17px;
      }
    }
  }
}
</style>
