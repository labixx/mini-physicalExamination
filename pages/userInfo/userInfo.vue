<template>
    <view class="userInfo-wrapper">
       <view class="userInfo-content">
           <u-form labelPosition="left"
                   :model="userInfoForm"
                   :rules="rules"
                   ref="userInfoRef">
               <u-form-item label="姓  名" prop="" borderBottom labelWidth="80px">
                   <u-input v-model="userInfoForm.name" border="none" placeholder="请输入姓名"></u-input>
               </u-form-item>
               <u-form-item label="性  别" prop="" borderBottom labelWidth="80px">
                   <u-radio-group
                           v-model="userInfoForm.sex"
                           placement="row">
                       <u-radio activeColor="red" label="男" name="1"></u-radio>
                       <u-radio activeColor="red" label="女" name="2"></u-radio>
                   </u-radio-group>
               </u-form-item>
               <u-form-item label="出生日期" prop="" borderBottom labelWidth="80px"  @click="birthdayShow = true">
                   <view>
                       <u-calendar :show="birthdayShow" @confirm="handleConfirm" @close="birthdayShow = false"></u-calendar>
                       <u-input v-model="userInfoForm.birthday" border="none" placeholder="请选择出生日期"></u-input>
                   </view>
               </u-form-item>
               <u-form-item label="婚  否" prop="" borderBottom labelWidth="80px">
                   <u-radio-group
                           v-model="userInfoForm.marry"
                           placement="row">
                       <u-radio activeColor="red" label="未婚" name="1"></u-radio>
                       <u-radio activeColor="red" label="已婚" name="2"></u-radio>
                   </u-radio-group>
               </u-form-item>
               <u-form-item label="证件类型" prop="" borderBottom labelWidth="80px" @click="certTypeShow = true">
                   <view>
                       <u-picker :show="certTypeShow" :columns="certOptions" @cancel="certTypeShow= false"></u-picker>
                       <u-input v-model="userInfoForm.birthday" border="none" placeholder="请选择证件类型"></u-input>
                   </view>
               </u-form-item>
               <u-form-item label="证 件 号" prop="" borderBottom labelWidth="80px">
                   <u-input v-model="userInfoForm.idCard" type="idcard" border="none" placeholder="请输入证件号"></u-input>
               </u-form-item>
               <u-form-item label="联系电话" prop="" borderBottom labelWidth="80px">
                   <u-input v-model="userInfoForm.phone" type="number" border="none" placeholder="请输入联系电话"></u-input>
               </u-form-item>
           </u-form>
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
        name: "combo",
        data(){
            return {
                userInfoForm:{
                    name:'',
                    sex:'1',
                    birthday:'',
                    phone:'',
                    idCard:'',
                    marry:'1'
                },
                birthdayShow:false,
                certOptions:[],
                certTypeShow:false,
                rules:[],
            }
        },
        onload:function(){
            console.log("--onload--")
        },
        onshow:function(){
            console.log("--------")
        },

        methods:{
            handleConfirm(){
                this.birthdayShow = false
            },
            handleCancel(){
                uni.navigateBack()
            },

        }
    }
</script>

<style scoped lang="less">
.userInfo-wrapper{
    border-top:1px solid #eee;
    .userInfo-content{
        padding:0px 10px;
    }
    .btn{
        border:none;
        color:rgb(192, 196, 204);
    }
    uni-text{
        white-space: nowrap;
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