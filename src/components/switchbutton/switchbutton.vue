<template>
  <label class="ahs-ued-switchbutton-box" :class="classes" @click="onClick">
    <input type="radio" :value="value" :name="name" :checked="checked == value" @change="onChange">
    <div class="ahs-ued-switchbutton" :style="{textAlign:align}">
      <slot></slot>
      <Icon v-if="isShowIcon" svg size="16" icon="icon-gouxuan" className="switchbutton-icon"></Icon>
    </div>
  </label>
</template>
<script>
export default {
  props: {
    value:String,
    checked:{
      type:null,
      default:false
    },
    name:String,
    type: {
      type:String,
      default:'switch'
    },
    className: String,
    noIcon:Boolean,
    align: {
      type:String,
      default:'center'
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },

  computed: {
    classes() {
      return {
        [this.className]: !!this.className,
        [this.type]: !!this.type
      }
    },
    isShowIcon() {
      if(this.type != 'select') return false;

      if(this.checked != this.value) return false;

      if(this.noIcon) return false
      return true;
    }
  },

  methods: {
    onChange() {
      this.$emit('change', this.value);
    },
    onClick() {
      this.$emit('click', this.value);
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../less/index.less';
  .ahs-ued-switchbutton-box {
    display:inline-block;
    position: relative;

    input[type="radio"] {
      position: absolute;
      top:0;
      left: 0;
      opacity: 0;

      &:checked ~ .ahs-ued-switchbutton {
        background: @yellow;
        border-color: @yellow;
      }
    }
    .ahs-ued-switchbutton {
      min-width:.56rem;
      min-height: .36rem;
      height:100%;
      width:100%;
      padding:0 .12rem;
      line-height: .36rem;
      background: @gray-3;
      box-sizing: border-box;
      text-align: center;
      color:@black-2;
      border-radius:2px;
      border:.01rem solid @gray-3;

      .switchbutton-icon {
        position: absolute;
        right: 0;
        bottom:0;
      }
    }

    &.select {
      input[type="radio"] {
        &:checked ~ .ahs-ued-switchbutton {
          background: @yellow-4;
          border-color: @yellow;
        }
      }
    }
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
      .ahs-ued-switchbutton-box .ahs-ued-switchbutton {
        border-width:.005rem;
      }
    }
</style>


