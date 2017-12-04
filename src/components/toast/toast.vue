<template>
  <div class="comp-toast" :class="{'none-icon': !iconName}">
      <Icon :icon="iconName" className="icon" size="36" color="#fff" v-if="iconName"/>
      <span class="text">{{msg}}</span>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
    type: String
  },
  computed: {
    iconName() {
      let self = this;
      //   .icon-toast_shibai
      //   .icon-toast_zhuyi
      //   icon-toast_chenggong
      switch (self.type) {
        case "success":
          return "icon-toast_chenggong";
          break;
        case "warn":
          return "icon-toast_zhuyi";
          break;
        case "error":
          return "icon-toast_shibai";
          break;
        default:
          return "";
      }
    //   if (self.type == "success") {
    //     return "icon-toast_chenggong";
    //   } else if (self.type == "success") {
    //     return "icon-toast_chenggong";
    //   } else if (self.type == "success") {
    //     return "icon-toast_chenggong";
    //   }
    }
  }
};
</script>

<style lang="less">
.comp-toast {
  width: 1.2rem;
  height: 1.08rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -0.54rem;
  margin-left: -0.6rem;
  .icon {
    display: block;
    margin: 0.2rem auto 0;
  }
  .text {
    font-size: 15px;
    color: #ffffff;
    line-height: 19px;
    display: block;
    margin-top: 0.08rem;
    text-align: center;
  }

  &.none-icon {
      height:auto;
      .text {
          margin: 0.1rem .225rem;
      }
  }
}
</style>
