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
            <div class="time-right">
                <span class="text">9-20（今天）10:10-11:00</span>
                <Icon icon="icon-jiantouptccc" size="14" color="#ccc"/>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .express-box{
        margin: .08rem;
        font-size: 13px;
        color:#666;
        overflow: hidden;
        .express-text{
            
            background: #fff;
            height: 0.68rem;
            padding:0 .12rem;
            line-height: .68rem;
            font-size: 15px;
            position: relative;
            .express-choose{
                margin-left:.07rem;
            }
            &:after{
                content: "";
                width:100%;
                height: 0;
                border-bottom: 1px solid #eee;
                position: absolute;
                bottom: 0;
                left: .2rem;
            }
            .go-right{
                position: absolute;
                right:.12rem;
            }
        }
        .express-input{
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
