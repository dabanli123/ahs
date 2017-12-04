<template>
    <div class="comp-alert">
        <div class="alert-bg" :class="{'none-title': !isTitle}">
            <span class="title" v-if="isTitle" v-html="title"></span>
            <span class="text" v-html="message"></span>
            <div class="btn-box">
                <div class="btn btn1" v-if="showCancelBtn" @click="onCancelBtnCallback">{{cancelBtnText}}</div>
                <div class="btn btn2" 
                    :class="{'onebtn':!showCancelBtn}"
                    :style="{'backgroundColor':confirmBtnColor,'borderColor':confirmBtnColor}"
                    @click="onConfirmBtnCallback"
                >{{confirmBtnText}}</div>
            </div>
        </div>
        
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    message: String,
    cancelBtnText: {
      type: String,
      default: "取消"
    },
    showCancelBtn: Boolean,
    confirmBtnText: {
      type: String,
      default: "确认"
    },
    confirmBtnColor: String,
    confirmBtnCallback: Function,
    cancelBtnCallback: Function,
    close: Function
  },
  computed: {
    isTitle() {
      return this.title;
    }
  },
  methods: {
    onConfirmBtnCallback() {
      this.confirmBtnCallback();
      this.close();
    },
    onCancelBtnCallback() {
      this.cancelBtnCallback();
      this.close();
    }
  }
};
</script>

<style lang="less">
.comp-alert {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  .alert-bg {
    width: 3rem;
    height: 1.76rem;
    background-color: #fff;
    //color: #fff;
    border-radius: 4px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -0.88rem;
    margin-left: -1.5rem;
    .title {
      font-size: 17px;
      color: #000;
      letter-spacing: 0;
      line-height: 21px;
      text-align: center;
      display: block;
      font-weight: 800;
      margin: 0.2rem auto 0;
    }
    .text {
      font-size: 14px;
      color: #898989;
      letter-spacing: 0;
      line-height: 22px;
      display: block;
      margin: 0.12rem 0.16rem;
      //text-align: center;
    }
    .btn-box {
      margin: 0.2rem 0.15rem;
      display: flex;
      .btn {
        width: 1.28rem;
        height: 0.42rem;
        text-align: center;
        line-height: 0.42rem;
        border: 1px solid #cccccc;
        border-radius: 4px;
        font-size: 17px;
        color: #000;
        letter-spacing: 0;
      }
      .btn1 {
        background: #ffffff;
        margin-right: 0.14rem;
      }
      .btn2 {
        background: #fcdb00;
        border-color: #fcd800;
      }
      .onebtn{
          width:100%;
          
      }
    }
    &.none-title {
      height: auto;
      .text {
        margin: 0.2rem 0.15rem;
      }
    }
  }
}
</style>
