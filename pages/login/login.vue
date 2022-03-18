<template>
    <view style="margin-top:180rpx;">
        <view class="login_title">
            <view>一体化体检预约平台</view>
        </view>
        <view class="login_form">
            <view class="input_wrap">
                <u-input prefixIcon="phone"  v-model="form.userName" placeholder="请输入手机号码" />
            </view>
            <view class="input_wrap">
                <u-input prefixIcon="search"  placeholder="请输入验证码" >
                    <template slot="suffix">
                        <u-code ref="uCode" seconds="60" changeText="60秒重新获取"></u-code>
                    <u-button @tap="getCode" :text="tips" color="#45AE98" size="mini" ></u-button>
					</template>
                </u-input>
            </view>
            <u-button class="login_btn"  @click="login">登 录</u-button>
        </view>
        <view class="login-wechat">
            <svg t="1647569827080" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2458" width="30" height="30"><path d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="#00C800" p-id="2459"></path><path d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#00C800" p-id="2460"></path></svg>
        </view>
    </view>
</template>

<script>
import { login } from '../../api/login.js'

export default {
    data(){
        return{
            form:{
                userName:'',
                password:''
            },
            tips:'获取验证码'
        }
    },
    methods:{
        login(){
            uni.navigateTo({
                url:'/pages/home/home'
            })

            // this.$store.dispatch('Login',this.form).then(res=>{
            //
            // })
        },
    //    获取验证码
        getCode(){},
    }
}
</script>

<style lang="scss">
/*.login_title{*/
/*    font-size:24px;*/
/*    color:#45AE98;*/
/*    font-weight: bold;*/
/*    margin-top:180rpx;*/
/*    text-align: center;*/
/*    dis*/
/*}*/
.login_title{
    font-size:24px;
    color:#45AE98;
    font-weight: bold;
    text-align: center;
}

.login_form{
    width:80%;
    height:170px;
    margin:50px auto 0;
    position: relative;
    .input_wrap{
        background: rgb(248,248,248);
        margin-bottom: 30rpx;
        padding:0 20rpx;
        border-radius: 4rpx;
        overflow: hidden;
    }
    .login_btn{
        color:white;
        font-size: 14px;
        margin-top:60rpx;
        background-color:#45AE98;
        /*background-color: #7A9AD0;*/
    }
}

.login-wechat{
    position: absolute;
    right:120rpx;

    /*right:120rpx;*/
    /*top:100rpx;*/
}
</style>