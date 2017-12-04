<template>
  <div class="comp-button" @click="onClick" :class="classes"><slot></slot></div>
</template>
<style lang="less">
.comp-button {
  height: 0.32rem;
  padding: 0 0.07rem;
  line-height: 0.32rem;
  background-color: #fcdb00;
  display: inline-block;
  font-size: 13px;

  &.disable {
    background-color:#F8F8F8;
    color: #999;
  }
}

</style>
<script>
export default {
  props: {
    disabled: Boolean
  },
  computed: {
    classes() {
      return {
          disable:this.disabled
      }
    }
  },
  methods: {
    onClick(ev) {
        if(this.disabled) return
      this.$emit('click', ev)
      
    }
  }
};
</script>
