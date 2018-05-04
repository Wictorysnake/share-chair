<template>
  <section>
    <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>

    <!-- 主体内容 start -->
    <div class="content-container">

        <!-- 个人信息 start -->
        <div class="headImg-block flex-x-align pr">
            <span class="left-label">头像</span>
            <div class="right-info flex-x-align" id="modify_headImg">
                <img src="../../../images/avatar_default@3x.png" alt="头像" class="headImg">
                <i class="icon icon-detail"></i>
            </div>
        </div>

        <div class="personal-info-block">

            <div class="personal-info flex-x-align pr">
                <span class="left-label">昵称</span>
                <router-link :to="{name: 'modify_nickname'}" class="right-info flex-x-align">
                    <span class="info">{{nickname}}</span>
                    <i class="icon icon-detail"></i>
                </router-link>
            </div>

            <div class="personal-info flex-x-align pr">
                <span class="left-label">性别</span>
                <div class="right-info flex-x-align" id="modify_gender">
                    <span class="info" v-if="gender_id == 1">男</span>
                    <span class="info" v-else>女</span>
                    <i class="icon icon-detail"></i>
                </div>
            </div>

            <div class="personal-info flex-x-align pr">
                <span class="left-label">手机</span>
                <router-link :to="{name: 'bind_mobile'}" class="right-info flex-x-align">
                    <span class="info">{{tel}}</span>
                    <i class="icon icon-detail"></i>
                </router-link>
            </div>
        </div>
        <!-- 个人信息 end -->

    </div>
    <!-- 主体内容 end -->

    <!-- 性别列表 start -->
    <div class="m-genderselect" id="gender-select"></div>
    <!-- 性别列表 end -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      nickname: 'shengsheng',
      gender_id: 2,
      tel: '13758497456'
    }
  }
}
</script>

<style scoped>
/* 主体内容 */
.content-container {
    width: 100%;
    height: 100%;
    background: #F8F8F8;
}

/* 个人信息 */
.headImg-block {
    width: 100%;
    height: 4.0rem;
    padding-left: 0.6rem;
    box-sizing: border-box;
    margin-top: 0.5rem;
    background: #FFFFFF;
}
.left-label {
    display: inline-block;
    font-size: 0.8rem;
    color: #333333;
    letter-spacing: -0.38px;
    line-height: 1.1rem;
}
.right-info {
    flex: 1;
    height: 100%;
    padding-right: 0.6rem;
    box-sizing: border-box;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
}
.right-info .icon-detail {
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    margin-left: 0.4rem;
}
.right-info .info {
    font-size: 0.8rem;
    color: #8E8E93;
    letter-spacing: -0.38px;
    line-height: 1.1rem;
}
.headImg-block .right-info .headImg {
    width: 3.5rem;
    height: 3.5rem;
}

.personal-info-block {
    width: 100%;
    padding-left: 0.6rem;
    box-sizing: border-box;
    background: #FFFFFF;
    margin-top: 0.5rem;
}
.personal-info-block .personal-info {
    width: 100%;
    height: 2.2rem;
    border-bottom: 1px solid #E1E1E1;
}

/* 选择器样式 */
.multi-picker-title {
    font-size: 0.85rem;
    color: #333333;
    letter-spacing: -0.41px;
    line-height: 1.2rem;
}
.multi-picker-btn {
    font-size: 0.75rem;
    color: #FF5E2A !important;
    letter-spacing: -0.24px;
    line-height: 1.05rem;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
}
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>
