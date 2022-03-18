<template>
    <view class="combo-wrapper">
        <u-swiper
                :list="list1"
                @change="handleSwiperChange"
        ></u-swiper>

        <view class="combo-detail">
            <h5>女神节 限定高端体检套餐</h5>
            <view class="combo-price">
                <view>￥1217.00</view>
                <view>销量：1</view>
            </view>
        </view>

        <view class="combo-params">
            <view>
                <text>门店</text>
                <text>南昌大学第一附属医院</text>
            </view>
            <view>
                <text>参数</text>
                <text>适用人群</text>

                <text>适用性别</text>
            </view>
        </view>

        <view>
            <view>
                <u-tabs :list="tabList"></u-tabs>
            </view>
        </view>

        <view class="footer-btn">
            <view>
                <u-button color="#D7D4D4" >取 消</u-button>
                <u-button color="#7A9AD0" style="margin-left:5px;">立即预约</u-button>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "combo-detail",
        data(){
            return {
                list1: [
                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                ],
                tabList:[{
                    name:'套餐介绍'
                },{
                    name:'检查流程'
                },{
                    name:'温馨提示'
                },{
                    name:'套餐推荐'
                }]
            }
        },
        onload:function(){
            console.log("--onload--")
        },
        onshow:function(){
            console.log("--------")
        },

        methods:{
            handleSwiperChange(){}
        }
    }
</script>

<style scoped lang="less">
    .combo-wrapper{
        width:100%;
        .combo-detail{
            width:90%;
            margin:10px auto;
            .combo-price{
                margin-top:10px;
                display:flex;
                justify-content: space-between;
                align-items: center;
                view{
                    &:nth-of-type(1){
                        color:#FB9A12;
                    }
                    &:nth-of-type(2){
                        font-size: 10px;
                        color:#B7B2B2;
                    }
                }
            }

        }
        .combo-params{
            border-bottom: 1px solid #eee;
            view{
                border-top: 1px solid #eee;
               padding:10px 0;
                text{
                    &:nth-of-type(1){
                        padding-left:20px;
                    }
                    &:nth-of-type(2){
                        padding-left:20px;
                    }
                }
            }
        }

        .footer-btn{
            position: fixed;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 50px;
            view{
                color:white;
                width:90%;
                margin:0 auto;
                display: flex;
            }
        }
    }


</style>