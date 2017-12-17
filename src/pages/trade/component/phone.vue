<template>
  <div class="phone-box">
      <Input 
        placeholder="输入手机号"
        label="手机号"
        rightWidth="80"
        @input="onInput"
        :value="submitInfo.mobile"
        maxlength="11"
        :readonly="userInfo? true : false"
       >
       <Button :disabled="isdisable" @click="onGetMsg" v-if="!userInfo">获取验证码</Button>
       </Input>
       <div class="msg-box-wrap" v-if="isshow">
            <div class="msg-box">
                <div class="msg-title">
                    <span class="title-txt">短信验证码</span>
                    <Icon icon="icon-guanbi" size="20" color="#ccc" className="msg-close"/>
                </div>
                <div class="msg-context">
                    <span class="context-txt">已发送至13888888888</span>
                    <div class="msg-input">
                        <input placeholder="请输入6位验证码" maxlength="6" @input="onCodeInput"/>
                    </div>
                    
                </div>
            </div>
       </div>
       <div class="msg-box-wrap" v-if="isimageshow">
            <div class="msg-box">
                <div class="msg-title">
                    <span class="title-txt">图形验证码</span>
                    <Icon icon="icon-guanbi" size="20" color="#ccc" className="msg-close"/>
                </div>
                <div class="msg-context">
                    <div class="msg-input">
                        <input placeholder="请输入图形验证码" maxlength="4" @input="onImageCodeInput"/>
                        <img :src="imagesrc" alt="">
                    </div>
                    
                </div>
            </div>
       </div>
       
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      isdisable: true,
      isshow: false,
      isimageshow: false,
      imagesrc: ""
    };
  },
  computed: {
    ...mapState({
      submitInfo: state => state.trade.submitInfo,
      userInfo: state => state.trade.userinfo
    })
  },
  methods: {
    ...mapMutations(["M_UPDATE_SUBMITINFO"]),
    ...mapActions(["A_GET_MSG_CODE", "A_SET_LOGIN", "A_GET_USERINFO"]),

    onInput(v) {
      this.M_UPDATE_SUBMITINFO({
        mobile: v
      });
      console.log(v);
      if (/^1(8|6|3|5|7)\d{9}$/.test(v)) {
        this.isdisable = false;
      } else {
        this.isdisable = true;
      }
    },
    onGetMsg($event, imgcode) {
      if (this.isdisable) return;
      this.A_GET_MSG_CODE([
        this.submitInfo.mobile,
        imgcode ? imgcode : "",
        error => {
          if (error) {
            if (error.code == "3001" || error.code == "3002") {
              this.isimageshow = true;
              this.imagesrc = error.data.captchaUrl;
            }
            return;
          }
          this.isshow = true;
        }
      ]);
    },
    onImageCodeInput($event) {
      let value = $event.target.value;

      if (value.length == 4) {
        this.onGetMsg("", value);
        this.isimageshow = false;
      }
    },
    async onCodeInput($event) {
      let value = $event.target.value;
      if (value.length == 6) {
        await this.A_SET_LOGIN({
            mobile:this.submitInfo.mobile,
            smsCaptcha:value
        });
        this.isshow = false;
        this.$Toast("登录成功","success")
        this.A_GET_USERINFO();
      }
    }
  }
};
</script>

<style lang="less">
.phone-box {
  height: 0.48rem;
  margin: 0 0.08rem 0.08rem 0.08rem;
  background-color: #fff;
  position: relative;
  .msg-box-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 77;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .msg-box {
    width: 3rem;
    height: 1.48rem;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .msg-title {
      height: 0.44rem;
      text-align: center;
      line-height: 0.44rem;
      position: relative;
      border-bottom: 1px solid #ccc;
      .msg-close {
        position: absolute;
        right: 0.15rem;
      }
    }
    .msg-context {
      height: 1.04rem;
      padding: 0 0.15rem;
      .context-txt {
        font-size: 13px;
        display: block;
        padding-top: 0.16rem;
        color: #666;
      }
      .msg-input {
        height: 0.44rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 0.08rem;
        position: relative;
        input {
          width: 100%;
          height: 100%;
          border: none;
          text-indent: 0.08rem;
          font-size: 17px;
          &::-webkit-input-placeholder {
            color: #ccc;
          }
        }
        img {
          width: 0.86rem;
          height: 0.3rem;
          display: block;
          background: #ccc;
          position: absolute;
          right: 0.06rem;
          top: 0.07rem;
        }
      }
    }
  }
}
</style>
