<template>
    <view>
       <view>
           <u-grid :border="false" @click="handleComboType">
               <u-grid-item v-for="(item,index) in comboType" :key="index" >
                   <u-image :showLoading="true" :src="item.img" width="80px" height="80px" ></u-image>
                   <text class="grid-text">{{item.title}}</text>
               </u-grid-item>
           </u-grid>
           <u-toast ref="uToast" />
       </view>
    </view>
</template>

<script>
    export default {
        name: "combo",
        data(){
            return {
                comboType:[],
            }
        },
        onload:function(){
            console.log("--onload--")
        },
        onshow:function(){
            console.log("--------")
        },

        methods:{
            handleComboType(){},
        }
    }
</script>

<style scoped>

</style>