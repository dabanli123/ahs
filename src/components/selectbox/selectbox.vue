<template>
  <Popup :onShow="onShow" :title="title" @hideEvent="onHide" :titleStyle="titleStyle">
    <div class="ahs-ued-selectbox-float" v-if="type == 'float' && onShow" :style="{height:height}">
      <div class="left">
        <div class="list" 
          :class="{active: callbackData[0] && callbackData[0][fieldName[0].id] == item[fieldName[0].id]}" 
          v-for="(item, index) in items" 
          :key="index"
          @click="onSelect(0, item)"
        >{{item[fieldName[0].value]}}</div>
      </div>
      <div class="right">
        <div class="scroll">
          <Switchbutton
            v-for="(item, index) in callbackData[0][fieldName[0].child]"
            :key="index" 
            type="select" 
            noIcon 
            className="switch" 
            align="left"
            :value="'' + item[fieldName[1].id]"
            :checked="callbackData[1] && callbackData[1][fieldName[1].id]"
            @change="onSelect(1, item)"
          >{{item[fieldName[1].value]}}
            <Icon 
              icon="icon-xuanze" 
              size="18" 
              svg 
              className="icon" 
              v-if="callbackData[1] && callbackData[1][fieldName[1].id] == item[fieldName[1].id]">
            </Icon>
        </Switchbutton>
        </div>
      </div>
    </div>
    <div class="ahs-ued-selectbox-more" v-else-if="type== 'more' && onShow" :style="{height:height}">
      <header class="tab" v-if="dataTabs.length > 0 && tabs && tabs.length > 0">
        <div class="list" 
          v-for="(item, index) in dataTabs" 
          :key="index"
          v-if="numbers>= index"
          @click="onSwitchTab(index)"
        >
          <span :class="{active: numbers == index}">{{item}}</span>
        </div>
      </header>
      <div class="scroll">
        <div class="content-box" 
          v-for="(list, index) in fieldName" 
          :key="index" 
          v-if="numbers == index"
          :class="{[index]:true}">
          <Switchbutton
              v-for="(item, i) in (index == 0 ? items : callbackData[index-1][fieldName[index-1].child])"
              :key="i" 
              type="select" 
              noIcon 
              className="switch" 
              align="left"
              :value="'' + item[fieldName[index].id]"
              :checked="callbackData[index] && callbackData[index][fieldName[index].id]"
              @change="onSelect(index, item)"
              @click="onClick(index, item)"
            >{{item[fieldName[index].value]}}
              <Icon 
                icon="icon-xuanze" 
                size="18" 
                svg 
                className="icon" 
                v-if="callbackData[index] && callbackData[index][fieldName[index].id] == item[fieldName[index].id]">
              </Icon>
          </Switchbutton>
        </div>
      </div>
    </div>
  </Popup>
</template>
<script>
export default {
  data() {
    return {
      callbackData:[],
      numbers:0,
      dataTabs:[]
    }
  },
  props:{
    onShow: Boolean,
    title: String,
    type: {
      type:String,
      default: 'more'
    },
    items:Array,
    fieldName:Array,
    tabs:Array,
    titleStyle:Object,
    height:{
      type:String,
      default:'3.76rem'
    }
  },
  watch: {
    items() {
      if(this.type != 'more') {
        this.callbackData.splice(0, 1, this.items[0]);
      }
    }
  },
  mounted() {
    this.dataTabs = this.tabs ? [...this.tabs] : [];
    this.fieldName.forEach( v => this.callbackData.push({}));
    this.$set(this.callbackData);
    if(this.type != 'more' && this.items) {
      //console.log(this.items[0])
      this.callbackData.splice(0, 1, this.items[0]);
    }
  },
  methods: {
    onSelect(num, item) {
      this.callbackData.splice(num, 1, item);

      this.dataTabs.splice(num, 1, item[this.fieldName[num]['value']]);

      if(num == 0 && this.type == 'float') {
        this.callbackData.splice(1, 1, {});
      }

      if(!item[this.fieldName[num]['child']] || item[this.fieldName[num]['child']].length == 0) {
        setTimeout(() => {
          this.$emit('complete', this.callbackData);
        }, 10);

        return;
      }

      this.numbers ++;
    },
    onSwitchTab(index) {
       this.numbers = index;
      
      this.callbackData.forEach((v,i,a) => {
        if(index < i) {       
          this.callbackData.splice(i, 1, {});
          this.dataTabs.splice(i, 1, this.tabs[i]);
        }
      });
    },
    onClick(index, item) {
      if(this.callbackData[index][this.fieldName[index]['id']] == item[this.fieldName[index]['id']]) {

        if(!item[this.fieldName[index]['child']] || item[this.fieldName[index]['child']].length == 0) {
          setTimeout(() => {
            this.$emit('complete', this.callbackData);
          }, 10);
          return;
        }
        this.numbers = index+1;
      }
    },
    onHide() {
      this.$emit('hideEvent');
    }
  }
}
</script>
<style lang="less" scoped>
   @import '../../less/index.less';
  .ahs-ued-selectbox-float {
    position:relative;
    background: @gray-2;
    overflow: hidden;
    max-height: 3.76rem;
    min-height:1.96rem;
    &:after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        border-bottom: 1px solid #eee;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }

    .left {
      width:1.19rem;
      overflow: hidden;
      float:left;
      .list {
        padding:0 .08rem;
        height: 0.48rem;
        font-size:13px;
        line-height:.48rem;
        color:@black-2;
        background: @gray-2;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;

        &.active {
          background: @white;
        }
      }
    }
    .right {
      width:2.56rem;
      max-height: 3.76rem;
      min-height:1.96rem;
      // box-sizing:border-box;
      padding:.08rem;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      float:right;
      background: @white;
      height:100%;
      box-sizing:border-box;
      

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }

      .scroll {
        overflow: hidden;

        .switch {
          width:100%;
          background: #f8f8f8;
          margin-bottom:.08rem;
          text-align: left !important;
          position: relative;

          &:last-child {
            margin-bottom:0;
          }

          .icon {
            position: absolute;
            float:right;
            top:50%;
            margin-top:-9px;
            right:.08rem;
          }
        }
      }
    }
  }
  .ahs-ued-selectbox-more {
    //  max-height: 3.76rem;
    //  min-height:1.96rem;
    height: 3.76rem;
    .tab {
      width:100%;
      height: 0.32rem;
      line-height: .32rem;
      padding:0 .08rem;
      box-sizing: border-box;

      .list {
        max-width: 1.05rem;
        margin-right:.01rem;
        padding:0 .08rem;
        box-sizing: border-box;
        float:left;
        .retina-border();

        span {
          display:block;
          border-bottom:2px solid @white;
          height: 0.3rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          &.active {
            border-bottom:2px solid @yellow;
          }
        }
      }
    }

    .scroll {
       overflow-y: auto;
       -webkit-overflow-scrolling: touch;
       max-height: 3.44rem;
       min-height:1.64rem;
       width:100%;
       &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }

      .content-box {
        padding:.08rem;
        width:100%;
        background: @white;
        box-sizing: border-box;

        .switch {
          width:100%;
          margin-bottom:.08rem;

          &:last-child {
            margin-bottom:0;
          }

          .icon {
            position: absolute;
            float:right;
            top:50%;
            margin-top:-9px;
            right:.08rem;
          }
        }
      }
    }
  }
</style>

