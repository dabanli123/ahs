<template>
    <div class="comment-box">
        <div class="comment-user-box">
            <div class="comment-user-img"></div>
            <div class="comment-user">
                <div class="user-tel">{{userComment[0] && userComment[0].mobile}}</div>
                <div class="user-comment">
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
        <div class="comment-text">
            {{userComment[0] && userComment[0].content}}
        </div>
        <div class="comment-time-address">
          {{userComment[0] && userComment[0].createDt}}
            <!-- 2月17日 17:09  在上海虹口龙之梦店回收一台 -->
            <div class="comment-phone">{{userComment[0] && userComment[0].productName}}</div>
        </div>
        <div class="comment-more">查看更多</div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      userComment: state => state.trade.userComment
    })
  }
};
</script>
<style lang="less">
.comment-box {
  height: auto;
  background: #fff;
  margin-top: 0.08rem;

  .comment-user-box {
    padding: 0.16rem 0.15rem;
    display: flex;
    .comment-user-img {
      width: 0.44rem;
      height: 0.44rem;
      background: #d8d8d8;
      margin-right: 0.12rem;
    }
    .comment-user {
      font-size: 13px;
      color: #666;
      line-height: 0.17rem;
      .user-tel {
        margin-top: 0.03rem;
      }
      .user-comment {
        margin-top: 0.04rem;
        .write-star {
          img {
            display: inline-block;
            width: 0.1rem;
            height: 0.1rem;
          }
        }
      }
    }
  }
  .comment-text {
    font-size: 14px;
    color: #333;
    line-height: 0.18rem;
    padding: 0 0.15rem;
  }
  .comment-time-address {
    font-size: 13px;
    color: #666666;
    letter-spacing: 0;
    line-height: .17rem;
    padding: 0.16rem 0.15rem;
    .comment-phone {
      font-size: 13px;
      color: #333333;
      letter-spacing: 0;
      line-height: .16rem;
      margin-top: 0.04rem;
    }
  }

  .comment-more {
      height:.4rem;
    font-size: 13px;
    color: #4a90e2;
    letter-spacing: 0;
    line-height: .4rem;
    text-align: center;
    border-top:1px solid #eee;
  }
}
</style>
