<template>
    <div class="shoplist-box">
        <div class="shop-list" v-for="(item, index) in filtershop" :key="index">
            <div class="shop-detail">
                <div class="choose-shop">
                    <div class="circle"></div>
                    <Icon icon="icon-xuanze" svg size="18" color="#000"/>
                </div>
                <div class="shop-msg">
                    <div class="shop-head">
                        <div class="shop-title">{{item.name}}<span>最近</span></div>
                        <div class="on-right">
                            <span>330m</span>
                            <Icon icon="icon-jiantouptccc"  className="top-left" size="14" color="#999"/>
                        </div>
                        
                    </div>
                    <div class="shop-address">{{item.address}}</div>
                </div>
            </div>
            <div class="shop-contact">
                <div class="shop-tel">
                    <a :href="'tel:'+item.mobile">
                        <Icon icon="icon-lianximendian" size="14" color="#666"/>
                        <span>联系门店</span>
                    </a>
                </div>
                <div class="shop-map">
                    <Icon icon="icon-chakanditu1"  size="14" color="#666"/>
                    <span>查看地图</span>
                </div>
            </div>
        </div>
    </div>
  
</template>
<script>
import {mapState, mapMutations, mapActions} from "vuex"; 

export default {
  computed:{
    ...mapState({
      filtershop:state=>state.trade.filtershop,
      // cityInfo:state=>state.trade.cityInfo
    })
  },
  mounted(){
    // this.A_GET_SHOPLIST(this.cityInfo.id);
    // this.A_GET_USERINFO();
  },
  methods:{
    //...mapMutations(['M_TEST']),
    // ...mapActions(["A_GET_SHOPLIST"])
  }
};
</script>

<style lang="less">
.shoplist-box {
  .shop-list {
    margin-top: 0.08rem;
    background: #fff;
    width: 100%;
    .shop-detail {
      display: flex;
      border-bottom: 1px solid #eee;
      .choose-shop {
        width: 0.4rem;
        padding: 0.18rem 0.08rem 0 0.15rem;
        box-sizing: border-box;
        .circle {
          width: 0.17rem;
          height: 0.17rem;
          border: 1px solid #ccc;
          border-radius: 50%;
          display: none;
        }
      }
      .shop-msg {
        padding: 0.16rem 0.15rem 0.16rem 0;
        width: 100%;
        .shop-head {
          position: relative;
          margin-bottom: 0.04rem;
          font-size: 15px;
          color: #333;
          .shop-title {
            span {
              font-size: 11px;
              color: #ff7831;
            }
          }
          .on-right {
            position: absolute;
            top: 0;
            right: 0;
            text-align: right;
            font-size: 11px;
            color: #999;
          }
        }
        .shop-address {
          width: 2.68rem;
          font-size: 13px;
          color: #666;
        }
      }
    }
    .shop-contact {
      height: 0.4rem;
      display: flex;
      line-height: 0.4rem;
      text-align: center;
      padding: 0 0.15rem;
      font-size: 13px;
      color: #666;
      .shop-tel {
        width: 1.72rem;
        a{
            text-decoration: none;
            color:#666;
        }
      }
      .shop-map {
        width: 1.72rem;
        text-align: center;
      }
    }
  }
}
</style>
