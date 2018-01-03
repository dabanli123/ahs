<template>
    <div class="address-box">
        <div class="address-title">上门地址/时间</div>
        <div class="address-content">
            <div class="address-text" @click="goSeachAddress">
                <Icon icon="icon-dingweimendian" size="16" color="#999"/>
                <span class="address-choose">
                    {{submitInfo.street ? submitInfo.street : "请输入详细地址或街道名称"}}
                </span>
                <Icon icon="icon-jiantouptccc" size="14" color="#ccc" className="right-icon"/>
            </div>
            <div class="address-input">
                <Input placeholder="填写门牌号/楼号" @input="onInput" :value="submitInfo.house"/> 
            </div>
        </div>
        <div class="choose-time">
                <div class="time-left">上门时间</div>
                <div class="time-right" @click="onShowTimeClick">
                    <span class="text">{{submitInfo.ondoorTime && submitInfo.ondoorTime.datestring}}</span>
                    <Icon icon="icon-jiantouptccc" size="14" color="#ccc"/>
                </div>
        </div>

        <Selectbox
            v-if="ondoorTime"
            :onShow="showTime" 
            title="选择日期" 
            type="more"
            :items="ondoorTime" 
            :fieldName="showTimeField"
            @complete="onTimeComplete"
            @hideEvent="onHide"
            height="3rem"
        ></Selectbox>
    </div>
</template>
<script>
import { mapState,mapActions, mapMutations} from "vuex";
export default {
    data() {
        return {
            showTime: false,
            showTimeField:[
                {
                    id: 'date',
                    value: 'datestring'
                }
            ],
        }
    },
  computed:{
       ...mapState({
        cityInfo:state=>state.trade.cityInfo,
        ondoorTime:state=>state.trade.ondoorTime,
        submitInfo:state=>state.trade.submitInfo
      })
  },
  mounted(){
    this.A_ONDOOR_TIME(this.cityInfo.id);
  },
  methods:{
    ...mapActions(["A_ONDOOR_TIME"]),
    ...mapMutations(['M_UPDATE_SUBMITINFO']),

    onTimeComplete(result) {
        this.M_UPDATE_SUBMITINFO({
            ondoorTime:{
                date:result[0].date,
                datestring: result[0].datestring
            }
        })
        this.showTime = false;

    },
    onHide() {
        this.showTime = false;
    },
    onShowTimeClick() {
        this.showTime = true;
    },
    goSeachAddress(){
        this.$router.push('/address');
    },
    onInput(v){
        this.M_UPDATE_SUBMITINFO({
        house:v
      });
    }
  }
}
</script>

<style lang="less">
    .address-box{
        height: 1.68rem;
        margin: .08rem;
        font-size: 13px;
        color:#666;
        overflow: hidden;
        .address-content{
            margin-top: .07rem;
            background: #fff;
            //height:1.44rem;
            color:#333;
            .address-text{
                height: 0.48rem;
                padding:0 .12rem;
                line-height: .48rem;
                font-size: 15px;
                position: relative;
                .address-choose{
                    margin-left:.07rem;
                }
                &:after{
                    content: "";
                    width:100%;
                    height: 0;
                    border-bottom: 1px solid #eee;
                    position: absolute;
                    bottom: 0;
                    left: .4rem;
                }
                .right-icon{
                    position: absolute;
                    right: 0.16rem;
                }
            }
            .address-input{
                padding-left:.28rem;
                position: relative;
                &:after{
                    content: "";
                    width:100%;
                    height: 0;
                    border-bottom: 1px solid #eee;
                    position: absolute;
                    bottom: 0;
                    left: .12rem;
                }
            }

        }
        .choose-time{
            background: #fff;
            height: .48rem;
            padding:0 .12rem;
            line-height: .48rem;
            font-size: 15px;
            color:#333;
            position: relative;
            .time-left{
                display: inline-block;
                height:100%;
                position: absolute;
                left:.12rem;
            }
            .time-right{
                display: inline-block;
                height:100%;
                position: absolute;
                right:.12rem;
            }
        }
    }
</style>
