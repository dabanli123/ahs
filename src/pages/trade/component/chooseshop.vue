<template>
    <div class="shop-box">
        <div class="has-address">
            <div class="shop-left">
                <Icon icon="icon-xuanzemencdian" size="16" color="#999" className="shop-icon"/>
                <div class="shop-name">
                    <h4>上海五角场万达店</h4>
                    <span class="distance"><span class="flag">离你最近</span>路程596米</span>
                </div>
            </div>
            <div class="shop-right">
                <span class="choose">选择其他门店</span>
                <Icon icon="icon-jiantouptccc" size="14" color="#ccc" className="right"/>
            </div>
        </div>
        <div class="no-address">
            <div class="shop-left">
                <Icon icon="icon-xuanzemencdian" size="16" color="#999" className="shop-icon"/>
                <div class="shop-name">
                    <h4>选择离你最近的门店</h4>
                </div>
            </div>
            <div class="shop-right">
                <Icon icon="icon-jiantouptccc" size="14" color="#ccc" className="right"/>
            </div>
        </div>
  </div>
</template>
<style lang="less">
.shop-box {
  //width:100%;
  height: 0.8rem;
  margin: 0.08rem;
  background-color: #fff;

  .has-address {
    //display: flex;
    display: none;
    .shop-left {
      width: 50%;
      height: 100%;
      flex: 1;
      .shop-icon {
        display: inline-block;
        margin: 0.21rem 0.12rem 0 0.12rem;
        vertical-align: top;
      }
      .shop-name {
        display: inline-block;
        margin-top: 0.19rem;
        font-size: 15px;
        line-height: 0.19rem;
        h4 {
          margin-bottom: 0.08rem;
        }
        .distance {
          font-size: 11px;
          color: #999;
          line-height: 0.16rem;
          .flag {
            color: #fc6232;
            display: inline-block;
            background-color: #ffebe5;
            margin-right: 0.1rem;
          }
        }
      }
    }
    .shop-right {
      width: 50%;
      height: 100%;
      flex: 1;
      line-height: 0.8rem;
      text-align: right;
      //margin-right:.12rem;
      .choose {
        display: inline-block;
        margin-right: 0.04rem;
        color: #666;
        font-size: 13px;
      }
      .right {
        display: inline-block;
        margin-right: 0.12rem;
      }
    }
  }
  .no-address {
    display: flex;
    padding:0 .12rem;
    box-sizing:border-box;
    .shop-left {
      width: 50%;
      height: 100%;
      flex: 1;
      line-height: .8rem;
      .shop-icon {
        display: inline-block;
      }
      .shop-name {
        display: inline-block;
        font-size: 15px;
      }
    }
    .shop-right {
      width: 50%;
      height: 100%;
      flex: 1;
      line-height: 0.8rem;
      text-align: right;
      .right {
        display: inline-block;
        //margin-right: 0.12rem;
      }
    }
  }
}
</style>
