<template>
    <i class="iconfont" :class="classes" :style="styles" v-if="!svg" @click="onClick"></i>
    <svg class="icon bbc" :class="classes" aria-hidden="true" :style="styles" @click="onClick" v-else>
        <use :xlink:href="'#' + icon"></use>
    </svg>
</template>
<script>
export default {
  props:{
      icon:{
          type:String,
          default:''
      },
      svg:{
          type:Boolean,
          default: false
      },
      size: {
          type:String,
          default:'14px'
      },
      className: {
          type:String,
          default:''
      },
      color: {
          type:String,
          default:''
      },
  },
  computed: {
      classes() {
          let json = {
              [this.className]: !!this.className,
          }

          if(!this.svg) json[this.icon] = !!this.icon;

          return json
      },
      styles() {
          return {
              fontSize: this.size + 'px',
              color: this.color
          }
      }
  },
  methods: {
      onClick($event) {
          this.$emit('click', $event);
      }
  }
}
</script>
<style lang="less">
    .comp-icon-box {
        overflow: hidden;
        display: inline;
        position: relative;
    }
</style>
