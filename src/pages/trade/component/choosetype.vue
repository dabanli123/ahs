<template>
  <div class="choose-box">
      <!-- <Radio value="门店回收" name="choosetype" :checked="item" @change="onSelect" ></Radio>
      <Radio value="上门回收" name="choosetype" :checked="item" @change="onSelect" ></Radio>
      <Radio value="快递回收" name="choosetype" :checked="item" @change="onSelect" ></Radio> -->
      <label class="radio-box">
          <span class="top-left">快速</span>
          <input type="radio" value="门店回收" name="choosetype" checked>
          <span class="radio-context">
              <Icon icon="icon-mendian" svg size="26" className="context-icon"/>
              <span class="context-text">门店回收</span>
          </span>
          <Icon icon="icon-gouxuan" svg size="15.8" className="bottom-icon"/>
      </label>

      <label class="radio-box">
          <span class="top-left">方便</span>
          <input type="radio" value="上门回收" name="choosetype" >
          <span class="radio-context">
              <Icon icon="icon-shangmen-" svg size="26" className="context-icon"/>
              <span class="context-text">上门回收</span>
          </span>
          <Icon icon="icon-gouxuan" svg size="15.8" className="bottom-icon"/>
      </label>

      <label class="radio-box">
          <span class="top-left">包邮</span>
          <input type="radio" value="快递回收" name="choosetype" >
          <span class="radio-context">
              <Icon icon="icon-kuaidi-" svg size="26" className="context-icon"/>
              <span class="context-text">快递回收</span>
          </span>
          <Icon icon="icon-gouxuan" svg size="15.8" className="bottom-icon"/>
      </label>

      <div class="triangle type2"></div>
  </div>
</template>
<style lang="less">
.choose-box {
  background-color: #fff;
  height: 0.88rem;
  text-align: center;
  padding: 0;
  margin: 0;
  position: relative;
  padding:0 .15rem;
  box-sizing:border-box;
  .radio-box {
    display: block;
    width: 1.07rem;
    height: 0.64rem;
    border-radius: 2px;
    //border: 1px solid red;
    background: #f8f8f8;
    position: relative;
    margin-right:.12rem;
    float:left;

    &:nth-of-type(3) {
        margin-right:0;
    }
    .top-left {
        position: absolute;
        top:0;
        left: 0;
        font-size:9px;
        background-color: #FCDB00;
        text-align: center;
    }
    input {
        display: none;

        &:checked ~ .radio-context {
            background: #FEF8CC;
        }
    }
    .radio-context{
        padding:0 .12rem;
        display: block;
        height:100%;
        text-align: center;
        .context-icon{
            margin-top:.09rem;
        }
        .context-text{
            display: block;
            margin-top:.04rem;
        }
    }
    .bottom-icon{
        position: absolute;
        bottom:0;
        right:0;
    }
  }
  .triangle{
      position: absolute;
      bottom: 0rem;
      left:.62rem;
      border: 6px solid transparent;
      border-bottom-color:#eee;

      &.type2 {
          left:1.82rem;
      }
  }
}
</style>

<script>
// export default {
//     data() {
//        return {
//            item:''
//        }
//     },
//     methods:{
//         onSelect(data) {
//             this.item = data;
//         }
//     }
// }
</script>