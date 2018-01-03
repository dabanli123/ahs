<template>
    <div class="page-address-box">
        <div class="address-search-box">
            <Icon icon="icon-jiantouptccc"  className="top-left" size="12" color="#000" @click="goBack"/>
            <div class="address-search">
                <Icon icon="icon-sousuo" svg className="input-icon" size="14" />
                <input placeholder="输入您的小区，大厦，街道名称" id="seachAddress"/>
            </div>
        </div>
        <div class="location-address" >
            <div class="no-location" v-if="noAddress">
                <div class="no-msg">未搜索到您的地址，请重新输入详细地址</div>
                <!-- <div class="other-choose">
                    <div class="other-box">门店回收</div>
                    <div class="other-box">快递回收</div>
                </div> -->
            </div>
            <!-- <template>
                <div class="location-icon" style="display:none">
                    <Icon icon="icon-dingwei" svg className="input-icon" size="16" />
                </div>
                <div class="location-shop" style="display:none">
                    <div class="shop-name">创职天地</div>
                    <div class="shop-address">杨浦区淞沪路234-239号</div>
                </div>
                <div class="loaction-reset" style="display:none">重新定位</div>
            </template> -->
        </div>
        <div class="nearaddress-box"  style="display:none">
            <div class="txt">附近地址（支持上门）</div>
            <div class="nearaddress-list">
                <div class="nearaddress-choose"></div>
                <div class="nearaddress-shop">
                    <div class="shop-name">创职天地</div>
                    <div class="shop-address">杨浦区淞沪路234-239号</div>
                </div>
            </div>
            <div class="nearaddress-list">
                <div class="nearaddress-choose"></div>
                <div class="nearaddress-shop">
                    <div class="shop-name">创职天地</div>
                    <div class="shop-address">杨浦区淞沪路234-239号</div>
                </div>
            </div>
            <div class="nearaddress-list">
                <div class="nearaddress-choose"></div>
                <div class="nearaddress-shop">
                    <div class="shop-name">创职天地</div>
                    <div class="shop-address">杨浦区淞沪路234-239号</div>
                </div>
            </div>
            <div class="nearaddress-list">
                <div class="nearaddress-choose"></div>
                <div class="nearaddress-shop">
                    <div class="shop-name">创职天地</div>
                    <div class="shop-address">杨浦区淞沪路234-239号</div>
                </div>
            </div>
            <div class="nearaddress-list">
                <div class="nearaddress-choose"></div>
                <div class="nearaddress-shop">
                    <div class="shop-name">创职天地</div>
                    <div class="shop-address">杨浦区淞沪路234-239号</div>
                </div>
            </div>
        </div>

        <div class="search-address">
            <div class="search-address-list" v-for="(item,index) in addresslist" :key="index" @click="onChooseAddress(item)">
                <div class="search-address-choose"></div>
                <div class="search-address-shop">
                    <div class="search-address-shop-name"><span v-html="redFont(item.business)"></span></div>
                    <div class="search-address-shop-address">{{item.city}}{{item.district}}</div>
                </div>
            </div>
            
        </div>


    </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      map: null,
      ac:null,
      addresslist:[],
      keywords:'',
      noAddress:false
    };
  },
  computed: {
    ...mapState({
      cityInfo: state => state.trade.cityInfo
    })
  },
  mounted() {
      let self = this;
    this.map = new BMap.Map();

    this.map.centerAndZoom(self.cityInfo.cityName, 12);
    this.ac = new BMap.Autocomplete({
        "input": "seachAddress",
        "type": "city",
        "location": this.map,
        "onSearchComplete": function(AutocompleteResult) {
          self.keywords = AutocompleteResult.keyword;
          self.ac.hide();
            console.log(AutocompleteResult);
          if (AutocompleteResult.getNumPois() === 0) {
            self.noAddress = true;
            self.addresslist = [];
          } else {
           self.addresslist = AutocompleteResult.yr;
           self.noAddress = false;
          }
        },
      });
  },
  methods: {
    ...mapMutations(["M_UPDATE_SUBMITINFO"]),
    goBack() {
      this.$router.back();
    },
    redFont(msg) {
        let reg = new RegExp(this.keywords);

        return msg.replace(reg, '<span class="other-color">'+this.keywords+'</span>');
    },
    onChooseAddress(item){
      console.log(item);
      let str = item.city + item.district + (item.district == item.business ? "" : item.business);
      this.M_UPDATE_SUBMITINFO({
        street:str
      });
      this.$router.back();
    }
  }
};
</script>

<style lang="less">
.page-address-box {
  .address-search-box {
    height: 0.44rem;
    background: #fff;
    line-height: 0.44rem;
    border-bottom: 1px solid #eee;
    position: relative;
    .top-left {
      display: inline-block;
      transform: rotate(180deg);
      padding-right: 0.12rem;
      padding-left: 0.05rem;
    }
    .address-search {
      display: inline-block;
      background: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 2px;
      height: 0.28rem;
      width: 3.27rem;
      position: relative;
      line-height: 0.28rem;
      .input-icon {
        margin-left: 0.08rem;
        display: inline-block;
      }
      input {
        border: none;
        display: inline-block;
        width: 3rem;
      }
    }
  }
  .location-address {
    background: #fff;
    display: flex;
    // padding: 0.16rem 0.2rem 0.16rem 0.15rem;
    position: relative;
    height: auto;
    .no-location {
      text-align: center;
      width: 2.28rem;
      margin: 0 auto;
      padding-top: 0.19rem;
      padding-bottom: 0.16rem;
      .no-msg {
        font-size: 13px;
        color: #666666;
        letter-spacing: 0;
        line-height: 17px;
        margin-bottom: 0.15rem;
        .other-color {
          color: #fc6232;
        }
      }
      .other-choose {
        display: flex;
        .other-box {
          width: 0.96rem;
          height: 0.32rem;
          border: 1px solid #979797;
          border-radius: 2px;
          line-height: 0.32rem;
          text-align: center;
          margin-right: 0.24rem;
          font-size: 13px;
          color: #333;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .location-icon {
      margin-left: 0.15rem;
      margin-right: 0.12rem;
      line-height: 0.72rem;
    }
    .location-shop {
      padding-top: 0.16rem;
      .shop-name {
        font-size: 15px;
        color: #333333;
        letter-spacing: 0;
        line-height: 19px;
        margin-bottom: 0.04rem;
      }
      .shop-address {
        font-size: 13px;
        color: #999999;
        letter-spacing: 0;
        line-height: 17px;
      }
    }
    .loaction-reset {
      line-height: 0.72rem;
      position: absolute;
      right: 0.2rem;
      font-size: 13px;
      color: #4a90e2;
      letter-spacing: 0;
    }
  }
  .nearaddress-box {
    .txt {
      font-size: 13px;
      color: #666666;
      letter-spacing: 0;
      line-height: 17px;
      padding: 0.12rem 0 0.07rem 0.15rem;
    }
    .nearaddress-list {
      height: auto;
      background: #fff;
      display: flex;
      border-bottom: 1px solid #eee;
      .nearaddress-choose {
        width: 0.08rem;
        height: 0.08rem;
        border: 2px solid #ccc;
        border-radius: 50%;
        margin: 0.3rem 0.14rem 0.3rem 0.15rem;
      }
      .nearaddress-shop {
        margin: 0.16rem 0;
        .shop-name {
          font-size: 15px;
          color: #333333;
          letter-spacing: 0;
          line-height: 19px;
          margin-bottom: 0.04rem;
        }
        .shop-address {
          font-size: 13px;
          color: #999999;
          letter-spacing: 0;
          line-height: 17px;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .search-address {
    height: auto;
    background: #fff;
    .search-address-list {
      height: auto;
      background: #fff;
      display: flex;
      border-bottom: 1px solid #eee;
      .search-address-choose {
        width: 0.08rem;
        height: 0.08rem;
        border: 2px solid #ccc;
        border-radius: 50%;
        margin: 0.3rem 0.14rem 0.3rem 0.15rem;
      }
      .search-address-shop {
        margin: 0.16rem 0;
        .search-address-shop-name {
          font-size: 15px;
          color: #151515;
          letter-spacing: 0;
          line-height: 19px;
          margin-bottom: 0.04rem;
          .other-color {
            color: #fc6232;
          }
        }
        .search-address-shop-address {
          font-size: 13px;
          color: #999999;
          letter-spacing: 0;
          line-height: 17px;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
