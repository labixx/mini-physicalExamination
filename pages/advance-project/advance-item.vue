<template>
    <view class="item-wrapper">
        <u-subsection :list="menuList" :current="currentNo" @change="sectionChange"></u-subsection>
        <view class="project-item">
            <view>
                <view>体检套餐名</view>
                <view class="small-title">组合套餐名</view>
            </view>
            <view>
                <text>2020-03-14</text>
            </view>
            <view>
                <u-button v-if="currentNo === 0" type="primary">取消预约</u-button>
                <u-button v-else type="primary">重新预约</u-button>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "combo",
        data(){
            return {
                menuList:['代体检','已过期'],
                currentNo:0,
            }
        },
        onload:function(){
            console.log("--onload--")
        },
        onshow:function(){
            console.log("--------")
        },

        methods:{
            sectionChange(value){
                this.currentNo = value
            },
        }
    }
</script>

<style scoped lang="less">
.item-wrapper{
    width:100%;
    .project-item{
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom:1px solid #f2f2f2;
        padding:5px 0px 5px 0px;
        .small-title{
            font-size:12px;


        }
    }
}
</style>