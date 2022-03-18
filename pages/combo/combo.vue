<template>
    <view class="combo-wrapper">
       <view class="comboType">
           <view @click="handleComboType(4)" >
               <u-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="60px" height="60px" shape="circle"></u-image>
               <view class="comboType-text" :style="{color:isClick === 4 ?'#4EA4FB':''}">全部</view>
           </view>
           <view @click="handleComboType(1)">
               <u-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="60px" height="60px" shape="circle"></u-image>
               <view class="comboType-text" :style="{color:isClick === 1 ?'#4EA4FB':''}"  >健康体检</view>
           </view>
           <view @click="handleComboType(2)">
               <u-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="60px" height="60px" shape="circle"></u-image>
               <view class="comboType-text" :style="{color:isClick === 2 ?'#4EA4FB':''}">从业人员体检</view>
           </view>
           <view @click="handleComboType(3)" >
               <u-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="60px" height="60px" shape="circle"></u-image>
               <view class="comboType-text" :style="{color:isClick === 3 ?'#4EA4FB':''}">老年体检</view>
           </view>
       </view>

        <view style="position: relative">
                <view class="combo-filter">
                    <view style="display: flex" @click="handleFilterChange">
                        <text style="font-size: 13px">筛选</text>
                        <u-icon name="arrow-down"></u-icon>
                    </view>
                    <view class="filter-pop" v-show="filterShow">
                        <view class="sex">
                            <view>性别</view>
                            <view class="sexoptions">
                               <view :style="{backgroundColor:sex=== 1? 'rgba(66, 159, 254, 0.71)' : ''}"  @click="handleSexChange(1)">男</view>
                                <view :style="{backgroundColor:sex=== 2? 'rgba(66, 159, 254, 0.71)' : ''}" @click="handleSexChange(2)">女</view>
                                <view :style="{backgroundColor:sex=== 0? 'rgba(66, 159, 254, 0.71)' : ''}" @click="handleSexChange(0)">通用</view>
                            </view>
                        </view>
                        <view class="age">
                            <view>年龄</view>
                            <view class="input-range">
                                <u-input type="number"  class="input"/> 至
                                <u-input type="number" class="input"/>
                            </view>
                        </view>
                        <view>
                            <view>价格区间</view>
                            <view class="input-range">
                                <u-input type="number"   class="input"/> 至
                                <u-input type="number" class="input"/>
                            </view>
                        </view>
                    </view>
                    <view class="line"></view>
                    <view style="display: flex" @click="handleChangeSort">
                        <text style="font-size: 13px">销量排序</text>
                        <u-icon v-if="sortByDesc" name="arrow-down"></u-icon>
                        <u-icon v-else name="arrow-up"></u-icon>
                    </view>
                </view>
        </view>

        <view class="combo-list">
            <view v-for="item in 5" @click="handleTOComboDetail">
                <u-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="100px" height="100px"></u-image>
                <view class="content">
                    <view>女神节 限定优惠高端套餐</view>
                    <view>女神节 专属套餐 一年仅此一次</view>
                    <view class="price">
                        <view>￥ 5200.00</view>
                        <view>1人已加购</view>
                    </view>
                </view>

            </view>
        </view>

        <u-tabbar
                :value="active"
                :fixed="true"
                :placeholder="false"
                :safeAreaInsetBottom="false">
            <u-tabbar-item text="首页" icon="home" @click="handleToHome" ></u-tabbar-item>
            <u-tabbar-item text="套餐" icon="bag" ></u-tabbar-item>
            <u-tabbar-item text="我的" icon="account" @click="handleToMy" ></u-tabbar-item>
        </u-tabbar>
    </view>
</template>

<script>
    export default {
        name: "combo",
        data(){
            return {
                comboType:[],
                sortByDesc:true,
                filterShow:false,
                active:1,
                isClick:4,
                sex:0,
            }
        },
        onload:function(){
            console.log("--onload--")
        },
        onshow:function(){
            console.log("--------")
        },

        methods:{
            handleToHome(){
                uni.navigateTo({
                    url:'/pages/home/home'
                })
            },
            handleToMy(){
                uni.navigateTo({
                    url:'/pages/profile/profile'
                })
            },
            handleChangeSort(){
                this.sortByDesc = !this.sortByDesc
            },
            handleFilterChange(){
                this.filterShow= !this.filterShow
            },
            handleTOComboDetail(){
                uni.navigateTo({
                    url:'/pages/combo/combo-detail'
                })
            },
            handleComboType(index){
                this.isClick = index
            },
            handleSexChange(type){
                this.sex = type
            }
        }
    }
</script>

<style scoped lang="less">
.combo-wrapper {
    .comboType {
        padding: 5px 0;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-around;

        .comboType-text {
            font-size: 12px;
            text-align: center;
        }
    }

    .combo-filter {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 40px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;

        .line {
            width: 1px;
            height: 45px;
            background-color: #eee;
        }

        .filter-pop {
            position: absolute;
            left: 0px;
            top: 40px;
            width: 100%;
            padding: 5px 10px;

            border-bottom: 1px solid #eee;
            background-color: white;
            z-index: 999;

            .sex {
                .sexoptions {
                    width: 80%;
                    display: flex;
                    justify-content: space-around;

                    view {
                        width: 60px;
                        height: 25px;
                        border: 1px solid #eee;
                        text-align: center;
                    }
                }
            }

            .age {
            }

            .input-range {
                display: flex;
                width: 80%;
                align-items: center;

                .input {
                    width: 30px;
                    text-align: center;
                }
            }
        }
    }

    .combo-list {
        margin-bottom: 50px;
    & > view {
        display: flex;
        padding: 5px;
        .content {
            margin-left: 3px;
            & > view {
                padding-top: 7px;
            }
            & > view:nth-of-type(1) {
                font-weight: bold;
                font-size: 14px;
                text-indent: 20px;
            }
            & > view:nth-of-type(2) {
                font-size: 13px;
            }
            .price {
                display: flex;
                justify-content: space-between;

                view {
                    &:nth-of-type(1) {
                        color: #FB9A12;
                    }

                    &:nth-of-type(2) {
                        font-size: 10px;
                        color: #B7B2B2;
                    }
                }
            }
        }


    }
}
}
</style>