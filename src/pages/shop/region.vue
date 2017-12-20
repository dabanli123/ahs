<template>
    <div class="region-box">
        <div class="choose-region" >
            <span class="action">全部(44)</span><span>杨浦区(3)</span><span>闵行区(3)</span><span>徐汇区(3)</span><span>长宁区(3)</span><span>徐汇区(3)</span><span>长宁区(3)</span>
            <div class="choose-more">
                <Icon icon="icon-jiantou_ptdown" size="14" color="#999" />
            </div>
        </div>
        <div class="region-top" style="display: none;">
            <span>全部门店</span>
            <Icon icon="icon-jiantou_ptup"  className="to-right" size="14" color="#999"/>
        </div>
        <div class="region-look" style="display: none;">
            <span class="action">全部</span><span>杨浦区</span><span>闵行区</span><span>浦东新区</span><span>长宁区</span><span>徐汇区</span><span>长宁区</span><span>闵行区</span><span>浦东新区</span><span>长宁区</span><span>徐汇区</span>
        </div>    
    </div>
</template>
<style lang="less">
.region-box {
  .choose-region {
    height: 0.4rem;
    width: 100%;
    background: #fff;
    font-size: 14px;
    line-height: 0.4rem;
    padding: 0 0.15rem;
    color: #333;
    letter-spacing: 0;
    box-sizing: border-box;
    overflow-x: scroll;
    white-space: nowrap;
    position: relative;
    span {
      display: inline-block;
      margin-right: 0.14rem;
    }
    .action {
      font-weight: 600;
      &:after {
        content: "";
        border-bottom: 1px solid #fcdb00;
      }
    }
    .choose-more {
      width: 0.4rem;
      height: 0.4rem;
      background: #ffffff;
      position: fixed;
      top: 0.44rem;
      right: 0;
      z-index: 2;
      line-height: 0.4rem;
      text-align: center;
      box-shadow: -1px 0px 20px #ccc;
    }
  }
  .region-top {
    height: 0.4rem;
    padding: 0 0.15rem;
    background: #fff;
    font-size: 14px;
    line-height: 0.4rem;
    color: #333;
    letter-spacing: 0;
    box-sizing: border-box;
    position: relative;
    .to-right {
      position: absolute;
      right: 0.15rem;
    }
  }
  .region-look{
      background:#fff;
      padding-bottom: .18rem;
      span{
          display: inline-block;
          width:.75rem;
          height: .36rem;
          background:#f8f8f8;
          border-radius: 2px;
          margin-left:.15rem;
          margin-top:.15rem;
          line-height: .36rem;
          text-align: center;
          font-size: 13px;
          color: #333;
          &.action{
              background:#FCDB00;
          }
      }
  }
}
</style>
