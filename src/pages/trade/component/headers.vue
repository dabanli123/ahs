<template>
  <div class="top-box">
    <Icon icon="icon-jiantouptccc"  className="top-left" size="12" color="#000"/>
    <!-- <span class="top-left"></span> -->
    <span class="top-center">选择回收方式</span>
    <span class="top-right">
      <Icon icon="icon-chengshidingwei"  className="right-icon" size="20" color="#000"/>
      <span class="right-span">{{cityInfo.name}}</span>
    </span>
  </div>
</template>
<script>
import {mapState} from "vuex";
export default {
  computed:{
    ...mapState({
      cityInfo:state=>state.trade.cityInfo
    })
    
  }
}
</script>

<style lang="less">
.top-box{
  width:100%;
  height: 0.44rem;
  background-color: #fff;
  line-height: .44rem;
  position: relative;
  .top-left{
    margin-left:.15rem;
    display: inline-block;
    transform:rotate(180deg);
  }
  .top-center{
    display: inline-block;
    font-size: 17px;
    letter-spacing: 0;
    position: absolute;
    left:50%;
    margin-left:-.51rem;
  }
  .top-right{
    display: inline-block;
    font-size: 15px;
    letter-spacing: 0;
    position: absolute;
    right:.19rem;
    .right-icon{
      vertical-align: middle;
    }
    .right-span{
      vertical-align:middle;
    }
  }
}
</style>
