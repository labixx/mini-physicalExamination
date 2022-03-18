<template>
    <view class="phyExam-wrapper">
        <view style="border-top: 1px solid #eee;margin:0px 20rpx;">
            <u-form :model="phyExamForm">
                <u-form-item label="体检类型" borderBottom @click="phyExamShow = true" label-width="180rpx">
                    <view>
                        <u-picker :show="phyExamShow" :columns="phyExamOptions" @cancel="phyExamShow = false"></u-picker>
                        <u-input v-model="phyExamForm.type"  placeholder="请选择体检类型" border="none"></u-input>
                    </view>
                </u-form-item>
                <u-form-item label="体检时间" borderBottom @click="timeShow = true" label-width="180rpx">
                    <view>
                        <u-datetime-picker  :show="timeShow" v-model="phyExamForm.time"  mode="datetime"  @cancel="timeShow = false" ></u-datetime-picker>
                        <u-input v-model="phyExamForm.time"  placeholder="请选择体检类型" border="none"></u-input>
                    </view>
                </u-form-item>
                <u-form-item label="体检套餐" borderBottom label-width="180rpx" @click="comboShow = true">
                    <view>
                        <u-picker :show="comboShow" :columns="comboOptions" @cancel="comboShow = false"></u-picker>
                        <u-input v-model="phyExamForm.comboList"  placeholder="请选择体检类型" border="none"></u-input>
                    </view>
                </u-form-item>
                <u-form-item label="体检状态" border-bottom label-width="180rpx">
                    <u-checkbox-group>
                        <u-checkbox v-model="phyExamForm.status" label="是否加急" name="1"/>
                        <u-checkbox v-model="phyExamForm.status" label="是否复检" name="2"/>
                    </u-checkbox-group>
                </u-form-item>
                <u-form-item>
                    <view class="footer-btn">
                        <view>
                            <u-button color="#D7D4D4" @click="handleCancel">取 消</u-button>
                            <u-button color="#7A9AD0" @click="handleSubmitPhysicalExam" style="margin-left:5px;">提 交</u-button>
                        </view>
                    </view>
                </u-form-item>
            </u-form>
        </view>

    </view>
</template>

<script>
    import UFormItem from "../../uview-ui/components/u-form-item/u-form-item";
    export default {
        name: "advance-physicalExam",
        components: {UFormItem},
        data(){
            return {
                columns:[],
                show:false,

                phyExamOptions:[['健康体检','从业人员体检','老年体检']], //体检类型字典
                phyExamShow:false,
                timeShow:false,
                comboShow:false,
                phyExamForm:{
                    comboList:'',
                    time:'',
                    type:'',
                    status:['1'],

                },
                comboOptions:[['测试体检套餐1']]

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