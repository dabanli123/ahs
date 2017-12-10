<template>
  <div class="comp-input">
      <label v-if="label">{{label}}</label>
      <div class="input-group">
          <div class="input-wrap" :style="styles2">
              <input type="text" :value="value" :placeholder="placeholder" @input="onInput">
          </div>
      </div>

      <div class="right" :style="styles1">
          <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  props:{
      label:String,
      placeholder:String,
      rightWidth: String,
      value:String
  },
  computed: {
      styles2() {
          return {
              marginRight: this.rightWidth ? this.rightWidth / 100 + 'rem' : '0',
              marginLeft: this.label ? '.68rem' : '0'
          }
      },
      styles1() {
          return {
              width: this.rightWidth / 100 + 'rem',
              marginLeft: - (this.rightWidth / 100) + 'rem'
          }
      },
  },
  methods: {
      onInput(ev) {
          let event = ev || window.event;
          this.$emit('input', event.target.value)
      }
  }
}
</script>
<style lang="less" scoped>
    .comp-input {
        overflow: hidden;
        height: 0.32rem;
        padding:.08rem .12rem;
        background: #fff;
        font-size: 15px;

        label {
            width:.68rem;
            height:100%;
            line-height: .32rem;
            text-align: left;
            display: block;
            float: left;
            margin-right:-.68rem;
        }

        .input-group {
            width: 100%;
            height:100%;
            float: left;
            .input-wrap {
                display: block;
                margin-left:.68rem;
                margin-right:.68rem;
            }
            input {
                box-sizing: content-box;
                width:100%;
                padding:.06rem 0;
                border:none;
                // -webkit-appearance: textfield;
                // -webkit-tap-highlight-color: transparent;
                // -webkit-writing-mode: horizontal-tb;
                height:.2rem;
                &::-webkit-input-placeholder{
                    color: #ccc;
                    font-size: 15px;
                }
            }
        }

        .right {
            width:.68rem;
             height:100%;
            float: right;
            margin-left:-.68rem;
        }
    }
</style>

