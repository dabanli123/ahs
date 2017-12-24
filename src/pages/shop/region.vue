<template>
    <div class="region-box">
        <div class="choose-region">
            <template v-if="!isShow">
                <span :class="{'action': chooseId == 0}" @click="selectRegion(0)">全部({{shoplist.length}})</span><span v-for="item in regionlist" :key="item.id" @click="selectRegion(item.id)" :class="{'action': chooseId == item.id}">{{item.name}}({{getShopLength(item.id)}})</span>
            </template>
            <span v-else>全部门店</span>
            
        </div>
         <div class="choose-more" @click="onToggle" :class="{rotate:isShow}">
                <Icon icon="icon-jiantou_ptdown" size="14" color="#999" className="choose-more-icon"/>
            </div>

        <div class="region-look" :class="{show:isShow}">
            <span :class="{'action': chooseId == 0}"  @click="selectRegion(0)">全部</span>
            <span 
                v-for="item in regionlist" 
                :key="item.id"  
                @click="selectRegion(item.id)" 
                :class="{'action': chooseId == item.id}"
                >{{item.name}}
            </span>
        </div>    
        <div class="region-mask" v-if="isShow"></div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      isShow: false,
      chooseId: 0
    };
  },
  computed: {
    ...mapState({
      regionlist: state => state.trade.regionlist,
      shoplist: state => state.trade.shoplist
      // cityInfo:state=>state.trade.cityInfo
    })
  },
  methods: {
    ...mapMutations(["M_UPDATE_FILTERSHOP"]),
    onToggle() {
      this.isShow = !this.isShow;
    },
    getShopLength(id) {
      return this.shoplist.filter(v => v.idRegion == id).length;
    },
    selectRegion(id) {
      this.chooseId = id;
      let list = this.shoplist;
      if(id != 0){
          list = this.shoplist.filter(v => v.idRegion == id);
      }
      this.M_UPDATE_FILTERSHOP(list);
      this.isShow = false;
    }
  }
};
</script>

<style lang="less">
.region-box {
  position: relative;
  .choose-region {
    height: 0.4rem;
    width: 100%;
    background: #fff;
    font-size: 14px;
    line-height: 0.4rem;
    padding: 0 0.15rem;
    color: #333;
    letter-spacing: 0;
    box-sizing: border-box;
    overflow-x: scroll;
    white-space: nowrap;
    position: relative;
    z-index: 10;
    span {
      display: inline-block;
      margin-right: 0.14rem;
    }
    .action {
      font-weight: 600;
      position: relative;
      &:after {
        content: "";
        display: block;
        height: 0.02rem;
        width: 100%;
        background: #fcdb00;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
   
  }
   .choose-more {
      width: 0.4rem;
      height: 0.4rem;
      background: #ffffff;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 11;
      line-height: 0.4rem;
      text-align: center;
      //box-shadow: -1px 0px 20px #ccc;
      &:before {
        width: 0.1rem;
        height: 0.4rem;
        background: url(../../assets/shadow.png) no-repeat center;
        position: absolute;
        content: "";
        display: block;
        left: -0.1rem;
        top: 0;
      }

      .choose-more-icon {
        transition: transform 0.3s;
        display: inline-block;
        transform: rotate(0);
      }

      &.rotate {
        .choose-more-icon {
          transform: rotate(-180deg);
        }
        &:before {
          display: none;
        }
      }
    }

  .region-look {
    background: #fff;
    padding-bottom: 0;
    height: auto;
    transition: max-height 0.3s, padding 0.3s;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0.4rem;
    z-index: 10;
    max-height: 0;
    span {
      display: inline-block;
      width: 0.75rem;
      height: 0.36rem;
      background: #f8f8f8;
      border-radius: 2px;
      margin-left: 0.15rem;
      margin-top: 0.15rem;
      line-height: 0.36rem;
      text-align: center;
      font-size: 13px;
      color: #333;
      &.action {
        background: #fcdb00;
      }
    }

    &.show {
      max-height: 3rem;
      padding-bottom: 0.18rem;
    }
  }

  .region-mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
}
</style>
