<template>
  <section>
    <!-- 主体内容 start -->
    <div class="content-container">
        <div class="input-box flex-x-align">
            <input type="tel" name="mobile" id="mobile" placeholder="请输入您的手机号">
        </div>

        <div class="input-box flex-x-align code-box pr">
            <input type="text" name="code" id="code" placeholder="请输入验证码">
            <div class="btn send-btn" v-if="!hasCode" @click="getCode()">获取验证码</div>
            <div class="btn already-send-btn" v-else>{{sec}}s</div>
        </div>

        <!-- 完成按钮 start -->
        <div class="position-bottom flex-center bg-orange">完成</div>
        <!-- 完成按钮 end -->
    </div>
    <!-- 主体内容 end -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      hasCode: false,
      sec: 60
    }
  },
  methods: {
    getCode () {
      this.hasCode = true
      setTimeout(this.loop, 1000)
    },
    loop () {
      this.sec--
      if (this.sec > 0) {
        setTimeout(this.loop, 1000)
      } else {
        this.hasCode = false
        this.sec = 60
      }
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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 222;
}
.input-box {
    width: 100%;
    height: 2.2rem;
    padding: 0 0.6rem;
    box-sizing: border-box;
    background: #FFFFFF;
    margin-top: 0.5rem;
}
.input-box input {
    flex: 1;
    font-size: 0.8rem;
    color: #333333;
    letter-spacing: 0.43px;
    line-height: 1.1rem;
}
.code-box .btn {
    position: absolute;
    right: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    font-size: 0.8rem;
    letter-spacing: 0.43px;
    line-height: 1.1rem;
}
.send-btn {
    color: #FF5E2A;
}
.already-send-btn {
    color: #999999;
}

/* 完成按钮 */
.position-bottom {
    width: calc(100% - 1.2rem);
    height: 2.2rem;
    margin: 2.0rem auto 0;
    border-radius: 24px;
    font-size: 0.8rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 1.2rem;
}
</style>
