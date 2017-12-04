<template>
    <label class="comp-radio">
			<input 
                type="radio"  
                :name="name" 
                :value="value"
                @change="onClick" 
                :checked="checked == value"
            >
            <span >{{value}}</span>
	</label>
</template>
<style lang="less">

/* RADIO */

 .comp-radio{
    height: 0.32rem;
    display: inline-block;
    border-radius: 3px;

    span {
        padding:0 .12rem;
        display: inline-block;
        height:100%;
        line-height: .32rem;
        text-align: center;
        min-width: .54rem;
    }

    input {
        display: none;

        &:checked ~ span {
            background: #FCDB00;
        }
    }
}

</style>
<script>
export default {
  props:{
      value:String,
      checked:String,
      name:String
  },

  methods: {
      onClick(ev) {
          this.$emit('change', this.value)
      }
  }
}
</script>
