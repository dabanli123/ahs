<template>
    <div class="promise-box">
        <div class="promise-title">
            <div class="promise-left">爱回收承诺</div>
            <div class="promise-right">
                <span class="text">查看详情</span>
                <Icon icon="icon-jiantouptccc" size="14" color="#ccc"/>
            </div>
        </div>  
        <div class="promise-content-box">
            <div class="promise-content">
                <div class="icon-box">
                    <Icon icon="icon-xuanze" svg size="32"/>
                </div>
                <div class="promsise-text">绝不压价</div>
            </div>
            <div class="promise-content">
                <div class="icon-box">
                    <Icon icon="icon-xuanze" svg size="32"/>
                </div>
                <div class="promsise-text">10天保价</div>
            </div>
            <div class="promise-content">
                <div class="icon-box">
                    <Icon icon="icon-xuanze" svg size="32"/>
                </div>
                <div class="promsise-text">安全贴士</div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.promise-box {
  background: #fff;
  height: 1.56rem;
  margin-top: 0.08rem;
  .promise-title {
    height: 0.35rem;
    position: relative;
    padding-top:.16rem;
    box-sizing: border-box;
    .promise-left {
      display: inline-block;
      font-size: 15px;
      color: #333;
      margin-left: 0.12rem;
    }
    .promise-right {
      display: inline-block;
      position: absolute;
      right: 0.12rem;
      .text {
        font-size: 13px;
        color: #666;
        margin-right: 0.04rem;
      }
    }
  }
  .promise-content-box{
      height: 1.2rem;
      display: flex;
      justify-content:center;
      
      .promise-content{
          width: 1.15rem;
          height: 1.2rem;
          text-align: center;
        //   align-items:center;
          .icon-box{
              width: .6rem;
              height: .6rem;
              margin: 0 auto;
              margin-top: .16rem;
              margin-bottom: .08rem;
              border-radius: 50%;
              background: #f5f5f5;
              line-height: .6rem;
          }
      }
  }
}
</style>
