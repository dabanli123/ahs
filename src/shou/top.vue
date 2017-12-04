<template>
    <div>
        <!-- <p>123</p>
        <i class="iconfont icon-icon_gou_left abc"></i>

        <svg class="icon bbc" aria-hidden="true">
            <use xlink:href="#icon-icon_gou_left"></use>
        </svg>
        <Icon icon="icon-smallloading"  className="abc" size="200" color="#000"/>

        <Icon icon="icon-icon_tishi" svg size="20" color="#f00"/>

        <Icon icon="icon-ruhe_icon_4A90E2" svg size="20" color="#f00"/>

        <Icon icon="icon-shunfeng" svg size="200" color="#f00" className="abc bbc"/>
        <Button @click="onClick1" disabled bgColor="#f00">
            <Icon icon="icon-smallloading"  className="abc" size="14" color="#000"/>
        </Button>

        <Button @click="onClick2">
            <Icon icon="icon-smallloading"  className="abc" size="14" color="#000"/>222
        </Button> -->
    
        <!-- <Alert /> -->
        <!-- <Radio value="1" name="b" :checked="item" @change="onSelect" />{{list}}
        <Radio value="2" name="b" :checked="item" @change="onSelect" />
        <Radio value="3" name="b" :checked="item" @change="onSelect" />

        <div>{{item}}</div> -->

       <Input 
        placeholder="填写门牌号/楼号"
        label="姓名"
        rightWidth="54"
        :value="item"
        @input="onInput"
       >
       <Button>点我</Button>
       </Input>

        <br>
       <Input 
        placeholder="填写门牌号/楼号"
        rightWidth="54"
        :value="item"
        @input="onInput"
       >
       <Button>点我</Button>
       </Input>
<br>
       <Input 
        placeholder="填写门牌号/楼号"
        :value="item"
        @input="onInput"
       >
       </Input>
    </div>
</template>
<style lang="less">
.comp-input {
    background: #000;
}
.abc {
    color:red;
    font-size:40px;
}
.bbc {
  font-size:20px;  
}

.test {
    label {
        width:1rem;
        height: 0.32rem;
        border:1px solid #dcdcdc;
        display: inline-block;
        position: relative;
        span {
            display: block;
            width:100%;
            height:100%;
        }

        input {
           width:0;
           height: 0;
           opacity: 0;
           position: absolute;
           left: 0;top:0;
            &:checked ~ span {
                background: #f00;
            }
        }
    }
}
</style>
<script>
import util from '../utils/index';
export default {
    data() {
       return {
           item:''
       }
    },
    async mounted() {
        // setTimeout(() => {
        //     this.$Toast('念完哈佛念阿弥陀佛念完哈佛念阿弥陀佛念完哈佛念阿弥陀佛念完哈佛念阿弥陀佛念完哈佛念阿弥陀佛…')
        // },3000)
        /*
        title
        message
        cancelBtnText  default 取消
        showCancelBtn 是否显示取消按钮  default false
        confirmBtnText 确认按钮文字  default 确定
        confirmBtnColor：yellow 
        confirmBtnCallback: function 默认关闭弹框
        cancelBtnCallback: function  默认关闭坦克

        */
       //this.$Alert('标题','说明当前状态、提示用户解决方案，最好不要超过两行。','按钮1','按钮2');
    //    this.$Alert({
    //         title: '标题<span style="color:red">dasff</span>',
    //         message: '说明当前状态、提示用户解决方案，最好不要超过两行',
    //         //cancelBtnText: '', 
    //         showCancelBtn: false, 
    //         //confirmBtnText: '', 
    //         confirmBtnColor: '#FCDB00',  
    //         confirmBtnCallback: ()=>{alert(1)}, 
    //         cancelBtnCallback: ()=>{alert(2)} 
    //    });

    let res;
    // try {
    //     res = await util.Request({
    //         url:"http://www.baidu.com",
    //         data:{
    //             a:1
    //         },
    //         method:'get'
    //     });
    //  }catch(e){
    //      console.log(e)
    //  }
    

    this.list = res;

    },
    watch: {
        item(newItem, old) {
            console.log('old:' + old)
            console.log(newItem)
        }
    },
    methods:{
        onSelect(data) {
            this.item = data;
        },
         onClick1(){
            alert(1)
        },
        onClick2(){
            alert(2)
        },
        onInput(newVal) {
            this.item = newVal;
        }
    }
}
</script>


