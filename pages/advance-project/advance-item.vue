<template>
    <view class="item-wrapper">
        <u-subsection :list="menuList" :current="currentNo" @change="sectionChange"></u-subsection>
        <view class="project-item">
            <view>
                <view>体检套餐</view>
                <view class="small-title">组合套餐</view>
            </view>
            <view>
                <text class="small-title">2020-03-14</text>
            </view>
            <view>
                <u-button v-if="currentNo === 0" type="primary" @click="cancelShow = true">取消预约</u-button>
                <u-button v-else type="primary" @click="againTimeshow = true">重新预约</u-button>
            </view>
        </view>
        <view>
            <u-modal :show="cancelShow" :title="cancelTitle" :content='content' @cancel="cancelShow = false" :showCancelButton='true'></u-modal>
            <u-datetime-picker :show="againTimeshow" v-model="againTime" mode="datetime" @cancel="againTimeshow = false" ></u-datetime-picker>
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
                cancelShow:false,
                againShow:false,
                againTitle:"重新预约体检套餐",
                cancelTitle:'取消预约体检套餐',
                content:'确定取消2020-03-14日的体检套餐吗？',
                againTimeshow:false,
                againTime:'',
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