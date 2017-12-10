<template>
    <div class="express-box">
        
        <div class="express-text">
            <span class="express-choose">
                选择快递取件方式
            </span>
            <Icon icon="icon-jiantouptccc" size="14" color="#ccc" className="go-right"/>
        </div>
       
        <div class="choose-time">
            <div class="time-left">取件时间</div>
            <div class="time-right" @click="onShowTimeClick">
                <span class="text">{{submitInfo.expressDate && submitInfo.expressDate.dateString}} {{submitInfo.expressTime && submitInfo.expressTime.hourString}}</span>
                <Icon icon="icon-jiantouptccc" size="14" color="#ccc"/>
            </div>
        </div>
        <Selectbox
            v-if="expressTime"
            :onShow="showTime" 
            title="选择日期" 
            type="float"
            :items="expressTime" 
            :fieldName="showTimeField"
            @complete="onTimeComplete"
            @hideEvent="onHideTime"
        ></Selectbox>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      showTime: false,
      showTimeField: [
        {
          id: "date",
          value: "dateString",
          child: "hourList"
        },
        {
          id: "hour",
          value: "hourString"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      expressTime: state => state.trade.expressTime,
      submitInfo: state => state.trade.submitInfo
    })
  },
  mounted() {
    this.A_EXPRESS_TIME();
  },
  methods: {
    ...mapActions(["A_EXPRESS_TIME"]),
    ...mapMutations(["M_UPDATE_SUBMITINFO"]),
    onTimeComplete(res){
        console.log(res)
        this.M_UPDATE_SUBMITINFO({
            expressTime:res[1],
            expressDate:res[0]
        })
        this.showTime = false;
    },
    onHideTime(){
        this.showTime = false;
    },
    onShowTimeClick(){
        this.showTime = true;
    }
  }
};
</script>

<style lang="less">
.express-box {
  margin: 0.08rem;
  font-size: 13px;
  color: #666;
  overflow: hidden;
  .express-text {
    background: #fff;
    height: 0.68rem;
    padding: 0 0.12rem;
    line-height: 0.68rem;
    font-size: 15px;
    position: relative;
    .express-choose {
      margin-left: 0.07rem;
    }
    &:after {
      content: "";
      width: 100%;
      height: 0;
      border-bottom: 1px solid #eee;
      position: absolute;
      bottom: 0;
      left: 0.2rem;
    }
    .go-right {
      position: absolute;
      right: 0.12rem;
    }
  }
  .express-input {
    padding-left: 0.28rem;
    position: relative;
    &:after {
      content: "";
      width: 100%;
      height: 0;
      border-bottom: 1px solid #eee;
      position: absolute;
      bottom: 0;
      left: 0.12rem;
    }
  }

  .choose-time {
    background: #fff;
    height: 0.48rem;
    padding: 0 0.12rem;
    line-height: 0.48rem;
    font-size: 15px;
    color: #333;
    position: relative;
    .time-left {
      display: inline-block;
      height: 100%;
      position: absolute;
      left: 0.12rem;
    }
    .time-right {
      display: inline-block;
      height: 100%;
      position: absolute;
      right: 0.12rem;
    }
  }
}
</style>
