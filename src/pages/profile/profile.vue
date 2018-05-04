<template>
  <section>
    <!-- 主体内容 start -->
    <div class="content-container">

        <!-- 顶部的个人信息 start -->
        <div class="personal-info-wrap flex-y-align pr">

            <div class="bg-wrap">
                <img src="../../images/hd_bg@3x.png" alt="背景">
            </div>

            <router-link :to="{name: 'personal_info'}" class="flex-y-align">

                <img src="../../images/avatar_default@3x.png" alt="头像" class="headImg">

                <span class="nickname">{{nickname}}</span>

                <p class="personal-info flex-x-align"><span class="tel">{{tel}}</span><i class="icon" :class="(gender_id == 1) ? 'icon-male' : 'icon-female'"></i></p>
            </router-link>

        </div>
        <!-- 顶部的个人信息 end -->

        <!-- 各级入口 start -->
        <div class="entrance-wrap">

            <router-link :to="{name: 'order_list'}" class="entrance-box flex-x-align pr">
                <i class="icon icon-entrance icon-order"></i>
                <span class="entrance-label">我的订单</span>
                <i class="icon icon-arrow-right"></i>
            </router-link>

            <router-link :to="{name: 'message_center'}" class="entrance-box flex-x-align pr">
                <i class="icon icon-entrance icon-news"></i>
                <span class="entrance-label">消息</span>
                <i class="icon icon-arrow-right"></i>
            </router-link>

            <router-link :to="{name: 'coupon_list'}" class="entrance-box flex-x-align pr">
                <i class="icon icon-entrance icon-coupon"></i>
                <span class="entrance-label">我的优惠券</span>
                <i class="icon icon-arrow-right"></i>
            </router-link>

            <router-link :to="{name: 'use_help'}" class="entrance-box flex-x-align pr">
                <i class="icon icon-entrance icon-help"></i>
                <span class="entrance-label">使用帮助</span>
                <i class="icon icon-arrow-right"></i>
            </router-link>

            <router-link :to="{name: 'operating_guide'}" class="entrance-box flex-x-align pr">
                <i class="icon icon-entrance icon-star"></i>
                <span class="entrance-label">用户使用指南</span>
                <i class="icon icon-arrow-right"></i>
            </router-link>

            <router-link :to="{name: 'setting_page'}" class="entrance-box flex-x-align pr">
                <i class="icon icon-entrance icon-setting"></i>
                <span class="entrance-label">设置</span>
                <i class="icon icon-arrow-right"></i>
            </router-link>

        </div>
        <!-- 各级入口 end -->

    </div>
    <!-- 主体内容 end -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      nickname: 'shengsheng',
      tel: '13757499876',
      gender_id: 1
    }
  }
}
</script>

<style scoped>
  /* 主体内容 */
.content-container {
    width: 100%;
    height: 100%;
}

/* 顶部的个人信息 */
.personal-info-wrap {
    width: 100%;
    height: 9.0rem;
    padding-top: 1.75rem;
    box-sizing: border-box;
}
.personal-info-wrap .bg-wrap {
    width: 100%;
    height: 9.0rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.personal-info-wrap .bg-wrap img {
    width: 100%;
    height: 100%;
}

.personal-info-wrap .headImg {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 auto 0.45rem;
}
.personal-info-wrap .nickname {
    display: inline-block;
    font-size: 0.9rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 1.25rem;
    margin-bottom: 0.4rem;
}
.personal-info-wrap .personal-info .tel {
    display: inline-block;
    font-size: 0.65rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 0.75rem;
    margin-right: 0.4rem;
}
.personal-info-wrap .personal-info .icon {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
}

/* 各级入口 */
.entrance-wrap {
    width: 100%;
    padding-left: 0.6rem;
    box-sizing: border-box;
}
.entrance-wrap .entrance-box {
    width: 100%;
    height: 2.2rem;
    padding-right: 0.8rem;
    border-bottom: 1px solid #E1E1E1;
    box-sizing: border-box;
}
.entrance-wrap .entrance-box .icon-entrance {
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.9rem;
}
.entrance-wrap .entrance-box .icon-arrow-right {
    display: inline-block;
    width: 0.4rem;
    height: 0.7rem;
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
}
.entrance-wrap .entrance-box .entrance-label {
    display: inline-block;
    font-size: 0.7rem;
    color: #333333;
    letter-spacing: -0.41px;
    line-height: 1.0rem;
}
</style>
