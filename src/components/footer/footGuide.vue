<template>
  <section id="nav">
      <router-link :to="{name: 'home'}" class="nav-item" exact>
          <i class="icon icon-guide icon-home"></i>
          <span>首页</span>
      </router-link>
      <router-link :to="{name: 'business_operation'}" class="nav-item">
          <i class="icon icon-guide icon-swhz"></i>
          <span>商务合作</span>
      </router-link>
      <router-link :to="{name: 'profile'}" class="nav-item">
          <i class="icon icon-guide icon-wode"></i>
          <span>我的</span>
      </router-link>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
    @import '../../style/icon_common.css';
    #nav {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        display: flex;
        width: 100%;
        height: 2.45rem;
        background: #FFF;
        box-shadow: inset 0 0 0 0 #E1E1E1;
    }

    .nav-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        text-decoration: none;
    }

    .nav-item .icon-guide {
        display: block;
        width: 2.4rem;
        height: 1.75rem;
    }

    .nav-item span {
        display: inline-block;
        font-size: .5rem;
        color: #A4AAB3;
        letter-spacing: 0.12px;
        line-height: .7rem;
    }

    /* 底部导航激活状态 */
    .router-link-active .icon-home {
        background-image: url(../../images/ft_ic_home_light@3x.png);
    }

    .router-link-active .icon-swhz {
        background-image: url(../../images/ft_ic_dingdan_light@3x.png);
    }

    .router-link-active .icon-wode {
        background-image: url(../../images/ft_ic_wo_light@3x.png);
    }

    .router-link-active span {
        color: #FF6600;
    }
</style>
