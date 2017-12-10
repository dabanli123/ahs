<template>
  <div class="popup-wrapper" :class="{isShow: isShow}">
    <div class="popup-box" @click="onClose()"></div>
    <div class="popup-main">
      <header class="pop-header" v-if="title">
        <h3 :class="{center:title}" :style="titleStyle">{{title}}</h3>
        <!-- <i class="ok" @click="onSubmit" v-if="okTxt">{{okTxt}}</i> -->
        <Icon icon="icon-guanbi" size="20" color="#999" className="cancel" @click="onCancel(null)"></Icon>
      </header>
      <div class="content">
        <slot></slot>
      </div>
      <div :class="['submit', submitDisabled ? 'submitDisabled' : '']" @click="onSubmit" v-if="subTxt" :style="{background:submitBgColor}">{{subTxt}}</div>
    </div>
  </div>
</template>
<script>
  //import Util from 'util';

  export default {
    name: 'popup',

    props: ['subTxt', 'cancelTxt', 'title', 'onShow', 'okTxt', 'submitDisabled', 'cancel', 'mountedEvent', 'submitBgColor', 'titleStyle'],

    data: () => ({
      isShow: false
    }),

    mounted() {
      this.mountedEvent &&　this.mountedEvent();
    },
    watch: {
      'onShow': 'isShowHide'
    },

    methods: {

      isShowHide(n, o) {
        if (n) {
          this.$el.style.display = 'block';
          setTimeout(() => {
            this.isShow = true;
            //Util.scroll.close();
          }, 0);
          return;
        }

        if (this.isShow) {

          this.isShow = false;

          setTimeout(() => {
            this.$el.style.display = 'none';
            //Util.scroll.open();
          }, 150);
        }
      },

      onCancel(close) {

        if (this.cancel && !close) {
          this.cancel(this.onClose);
          return;
        }

        this.isShow = false;

        setTimeout(() => {
          this.$el.style.display = 'none';
         // Util.scroll.open();
        }, 110);

        this.$emit('hideEvent');
      },

      onClose() {
        this.onCancel(true);
      },

      onSubmit() {
        this.$emit('submit', this.onClose);
      }
    }
  }
</script>
<style lang="less">
  @import '../../less/index.less';

  .popup-wrapper {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    -webkit-transition: background-color .1s;
    transition: background-color .1s;

    .popup-box {
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      background: rgba(0, 0, 0, 0);
    }

    &.isShow {
      .popup-box {
         background: rgba(0, 0, 0, .7);
      }

      .popup-main {
        height: initial;
        max-height: 100rem;
      }
    }

    .popup-main {
      width: 100%;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      background: @white;
      box-sizing: border-box;
      max-height: 0;
      -webkit-transition: max-height .1s;
      transition: max-height .1s;
      z-index:3;

      header.pop-header {
        height: .44rem;
        background: @white;
        padding: 0 .15rem;
        .retina-border();

        .cancel {
          
          display: block;
          position: absolute;
          top: .11rem;
          right: .15rem;
          z-index: 1;
        }

        h3 {
          line-height: .44rem;
          text-align: center;
          font-size: .15rem;
          color: @black-2;
          font-weight:600;

          &.center {
            margin:0 auto;
            width:3.05rem;
          }

          .comp-icon-box {
            width:.2rem;
            height:.18rem;
            display: inline-block;
          }
        }
      }

      .content {
        overflow: hidden;
      }

      .submit {
        width: 100%;
        height: .45rem;
        background: @yellow;
        color: @black-2;
        text-align: center;
        line-height: .45rem;
        font-size: .17rem;
      }

      .submitDisabled {
        color: @black-2;
        background: @gray-3;
      }
    }
  }
</style>