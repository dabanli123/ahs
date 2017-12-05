<template>
  <div class="payee-box">
      <Input class="after-border"
        placeholder="输入收款人姓名"
        label="收款人"
       >
       </Input>
  </div>
</template>
<style lang="less">
    .payee-box{
        height: 0.48rem;
        margin: .08rem .08rem 0 .08rem;
        background-color: #fff;
        overflow: hidden;
        .after-border{
            position: relative;
            &:after{
                content: "";
                width:100%;
                height: 0;
                border-bottom: 1px solid #eee;
                position: absolute;
                bottom: 0;
                left: .12rem;
            }
        }
        
    }
</style>