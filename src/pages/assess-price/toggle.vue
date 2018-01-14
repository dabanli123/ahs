<template>
    <div class="toggle-box">
        <div class="toggle-title">
            <div class="toggle-comment" :class="{action:isshow == 1}" @click="onShowMsg(1)">用户评论</div>
            <div class="toggle-problem" :class="{action:isshow == 2}" @click="onShowMsg(2)">常见问题</div>
        </div>
        <div class="toggle-content">
            <template v-if="isshow == 1">
            <div class="toggle-name">评论({{totalComment}})</div>
            <div class="toggle-comment">
                <div class="one-comment" v-for="(item, index) in commentList" :key="index">
                    <div class="comment-people">
                        <div class="people-img"></div>
                        <div class="people-msg">
                            <div class="people-tel">
                                <span class="tel-num">{{item.mobile}}</span>
                                <span class="comment-time">{{item.createDt}}</span>
                            </div>
                            <div class="people-score">
                                <span>评分</span>
                                <span class="write-star">
                                    <img src="../../assets/active_star.png" alt="">
                                    <img src="../../assets/active_star.png" alt="">
                                    <img src="../../assets/active_star.png" alt="">
                                    <img src="../../assets/active_star.png" alt="">
                                    <img src="../../assets/star.png" alt="">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="comment-other-msg" v-if="item.pickupType == 5">
                        在{{item.shopName}}回收了一台<span class="other-color">{{item.productName}}</span>
                    </div>
                    <div class="comment-other-msg" v-else-if="item.pickupType == 4">
                        快递回收了一台<span class="other-color">{{item.productName}}</span>
                    </div>
                    <div class="comment-other-msg" v-else>
                        上门回收了一台<span class="other-color">{{item.productName}}</span>
                    </div>
                    <div class="comment-content">
                        {{item.content}}
                    </div>
                </div>
                
            </div>
            </template>
            <div class="toggle-problems" v-if="isshow == 2">
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      isshow: 1
    };
  },
  computed: {
    ...mapState({
      commentList: state => state.inquiry.commentList,
      totalComment: state => state.inquiry.totalComment
    })
  },
  async mounted() {
    this.A_GET_COMMENTS();
  },
  methods: {
    ...mapActions(["A_GET_COMMENTS"]),
    onShowMsg(num) {
      this.isshow = num;
    }
  }
};
</script>

<style lang="less">
.toggle-box {
  background: #fff;
  margin-top: 0.08rem;
  padding-bottom: 0.49rem;
  .toggle-title {
    height: 0.44rem;
    display: flex;
    line-height: 0.44rem;
    font-size: 15px;
    border-bottom: 1px solid #eee;
    .toggle-comment {
      width: 50%;
      text-align: center;
    }
    .toggle-problem {
      width: 50%;
      text-align: center;
    }
    .action {
      position: relative;
      color: #333;
      &:after {
        content: "";
        background: #facd2f;
        height: 0.03rem;
        width: 0.4rem;
        position: absolute;
        bottom: 0;
        left: 0.74rem;
      }
    }
  }
  .toggle-content {
    height: auto;
    padding: 0 0 0 0.15rem;
    .toggle-name {
      height: 0.34rem;
      font-size: 14px;
      color: #333;
      padding-top: 0.17rem;
      box-sizing: border-box;
    }
    .toggle-comment {
      font-size: 14px;
      color: #333333;
      line-height: 21px;
      .one-comment {
        padding: 0.24rem 0;
        border-bottom: 1px solid #eee;
        &:last-child {
          border-bottom: none;
        }
        .comment-people {
          padding-right: 0.15rem;
          .people-img {
            width: 0.44rem;
            height: 0.44rem;
            border-radius: 50%;
            background: #f2f2f2;
            margin-right: 0.12rem;
            float: left;
          }
          .people-msg {
            font-size: 13px;
            color: #333333;
            letter-spacing: 0;
            line-height: 17px;
            .people-tel {
              .comment-time {
                float: right;
                font-size: 12px;
                color: #999999;
              }
            }
            .people-score {
              margin-top: 0.04rem;
              font-size: 13px;
              color: #666666;
              letter-spacing: 0;
              line-height: 17px;
              .write-star {
                img {
                  width: 0.1rem;
                  height: 0.1rem;
                }
              }
            }
          }
        }
        .comment-other-msg {
          clear: both;
          margin-top: 0.12rem;
          margin-bottom: 0.12rem;
          font-size: 13px;
          color: #666666;
          letter-spacing: 0;
          line-height: 17px;
          .other-color {
            color: #000014;
            line-height: 17px;
          }
        }
        .comment-content {
          padding-right: 0.15rem;
          font-size: 14px;
          color: #333333;
          line-height: 21px;
        }
      }
    }
  }
  .toggle-problems{
      height: 2rem;
  }
}
</style>
