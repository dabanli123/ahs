<template>
  <div id="app">
    <router-view v-if="cityInfo"/>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
  name: 'app',
  computed:{
    ...mapState({
      cityInfo:state=>state.trade.cityInfo
    })
  },
  mounted(){
    this.A_GET_CITY()
  },
  methods:{
    ...mapActions(["A_GET_CITY"])
  }
}
</script>

<style lang="less">
@import './styles/iconfont/iconfont.css';
@import './reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 // text-align: center;
 // color: #2c3e50;
  //margin-top: 60px;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
