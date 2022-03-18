<template>
    <view class="phyExam-wrapper">
        <view class="item">
            <text>体检类型</text>
            <view>
                <u-picker :show="show" :columns="phyExamOptions"></u-picker>
                <u-button class="item-btn" @click="show = true" >请选择体检类型</u-button>
            </view>
        </view>
        <view class="item">
            <text>体检时间</text>
            <view>
                <u-picker :show="show" :columns="columns"></u-picker>
                <u-button class="item-btn" @click="show = true">请选择体检时间</u-button>
            </view>
        </view>
        <view class="item">
            <text>体检套餐</text>
            <view>
                <u-picker :show="show" :columns="columns"></u-picker>
                <u-button class="item-btn" @click="show = true">请选择体检套餐</u-button>
            </view>
        </view>
        <view class="item">
            <text>体检状态</text>
            <view>
                <u-checkbox-group
                        v-model="status"
                        iconPlacement="right"
                        placement="row">
                    <u-checkbox >是否加急</u-checkbox>
                    <u-checkbox >是否复检</u-checkbox>
                </u-checkbox-group>
            </view>
        </view>
        <view class="footer-btn">
            <view>
                <u-button color="#D7D4D4" @click="handleCancel">取 消</u-button>
                <u-button color="#7A9AD0" @click="handleSubmitPhysicalExam" style="margin-left:5px;">提 交</u-button>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "advance-physicalExam",
        data(){
            return {
                columns:[],
                show:false,
                status:[],
                phyExamOptions:[], //体检类型字典

            }
        },
        onLoad: function() {
        },


        methods:{
            handleComboType(){},
            handleCancel(){
                uni.navigateBack()
            },
            handleSubmitPhysicalExam(){
                uni.navigateTo({
                    url:'/pages/advance-project/advance-item'
                })
            },
        }
    }
</script>

<style scoped lang="less">
.phyExam-wrapper{
    width:100%;
    .item{
        &:first-of-type{
            border-top:1px solid #eee;
        }
        font-size: 13px;
        padding:5px 0px 5px 20px;
        display:flex;
        align-items: center;
        border-bottom:1px solid #eee;
        view{
            width:150px;
            margin-left:20px;
            .item-btn{
                color:#bababa;
                font-size: 12px;
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