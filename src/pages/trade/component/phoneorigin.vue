<template>
    <div class="origin-box">
        <div class="origin-choose">
            <div class="origin-left">机器来源</div>
            <div class="origin-right">
                <span class="origin-text">自购</span>
                <Icon icon="icon-jiantouptccc" size="14" color="#ccc"/>
            </div>
        </div>
        <div class="origin-text">确保机器来源合法，拒收脏机</div>
        
    </div>
</template>
<style lang="less">
    .origin-box{
        margin: .08rem;
        font-size: 13px;
        color:#666;
        .origin-choose{
            background: #fff;
            height: .48rem;
            padding:0 .12rem;
            line-height: .48rem;
            font-size: 15px;
            color:#333;
            position: relative;
            .origin-left{
                display: inline-block;
                height:100%;
                position: absolute;
                left:.12rem;
            }
            .origin-right{
                display: inline-block;
                height:100%;
                position: absolute;
                right:.12rem;
            }
        }
        .origin-text{
            margin: .08rem;
            font-size: 13px;
            color: #666;
            line-height: .17rem;
        }
    }
</style>
