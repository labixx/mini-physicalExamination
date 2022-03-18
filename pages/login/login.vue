<template>
    <view>
<!--        <view class="login_title">一体化体检预约平台</view>-->
        <view class="login_title">
            <view>一体化体检预约平台</view>
        </view>
        <view class="login-wechat">
            <u-icon name="weixin-fill"></u-icon>
        </view>
        <view class="login_form">
            <view class="input_wrap">
                <u-input prefixIcon="phone"  v-model="form.userName" placeholder="请输入手机号码" />
            </view>
            <view class="input_wrap">
                <u-input prefixIcon="search"  placeholder="请输入验证码" >
                    <template slot="suffix">
                        <u-code ref="uCode" seconds="60" changeText="60秒重新获取"></u-code>
                    <u-button @tap="getCode" :text="tips" type="success" size="mini" ></u-button>
					</template>
                </u-input>
            </view>
            <u-button class="login_btn" type="success" @click="login">登录</u-button>
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
    margin-top:180rpx;
}

.login-wechat{
    display: flex;
    justify-content: end;
}


.login_form{
    width:80%;
    height:300px;
    margin:50px auto 0;
    .input_wrap{
        background: rgb(248,248,248);
        margin-bottom: 30rpx;
        padding:0 20rpx;
        border-radius: 4rpx;
        overflow: hidden;
    }
    .login_btn{
        margin-top:60rpx;
        background-color:#45AE98;
    }
}
</style>