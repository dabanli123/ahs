<template>
  <div class="choose-box">
      <label class="radio-box" v-if="pickuptype.includes(5)" @click="onClickType(5)">
          <span class="top-left">快速</span>
          <input type="radio" value="门店回收" name="choosetype" :checked="submitInfo.pickuptype == 5">
          <span class="radio-context">
              <Icon icon="icon-mendian" svg size="26" className="context-icon"/>
              <span class="context-text">门店回收</span>
          </span>
          <Icon icon="icon-gouxuan" svg size="15.8" className="bottom-icon" v-if="submitInfo.pickuptype == 5"/>
      </label>

      <label class="radio-box" v-if="pickuptype.includes(1) || pickuptype.includes(2)" @click="onClickType(1)">
          <span class="top-left">方便</span>
          <input type="radio" value="上门回收" name="choosetype" :checked="submitInfo.pickuptype == 1">
          <span class="radio-context">
              <Icon icon="icon-shangmen-" svg size="26" className="context-icon"/>
              <span class="context-text">上门回收</span>
          </span>
          <Icon icon="icon-gouxuan" svg size="15.8" className="bottom-icon" v-if="submitInfo.pickuptype == 1"/>
      </label>

      <label class="radio-box" v-if="pickuptype.includes(4)" @click="onClickType(4)">
          <span class="top-left">包邮</span>
          <input type="radio" value="快递回收" name="choosetype" :checked="submitInfo.pickuptype == 4">
          <span class="radio-context">
              <Icon icon="icon-kuaidi-" svg size="26" className="context-icon"/>
              <span class="context-text">快递回收</span>
          </span>
          <Icon icon="icon-gouxuan" svg size="15.8" className="bottom-icon" v-if="submitInfo.pickuptype == 4"/>
      </label>

      <div class="triangle" :style="styles"></div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed:{
      ...mapState({
        cityInfo:state=>state.trade.cityInfo,
        pickuptype:state=>state.trade.pickuptype,
        submitInfo:state=>state.trade.submitInfo,
      }),
      styles() {
          let lefts = '.62rem';
          switch(this.submitInfo.pickuptype)  {
              case 1:
                lefts = '1.82rem';
                break;
              case 4:
                lefts = '3rem';
                break;

          }
          return {
              left: lefts
          }
      }
  },
  mounted(){
    this.A_GET_PICKUP_TYPE({"id":this.cityInfo.id,"keys":"3107234671304225693"});
  },
  methods:{
    ...mapMutations(["M_UPDATE_SUBMITINFO"]),
    ...mapActions(["A_GET_PICKUP_TYPE"]),
    onClickType(num){
        this.M_UPDATE_SUBMITINFO({
            pickuptype:num
        })
    }
  }
}
</script>

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
  }
}
</style>