<template>
  <section>
    <!-- 主体内容 start -->
    <div class="content-container">

        <div class="home-header flex-y-align">
            <i class="icon icon-symbol"></i>
            <span class="app-name">好享按</span>
            <span class="company-name">杭州好享按智慧科技有限公司</span>
        </div>

        <!-- 请选择套餐区 start -->
        <div class="package-block">
            <div class="package-top flex-x-align">
                <img src="../../images/package_label.png" alt="">
            </div>

            <div class="package-box-wrap">
                <div class="package-box flex-x-align" v-bind:class="{active : (packageIds.indexOf(item.package_id)>=0)}" v-for="item in packages" v-bind:key="item.package_id" @click="choosePackage(item.package_id)">
                    <div class="box-left flex-center pr">{{item.package_name}}<div v-if="item.is_commend" class="left-top flex-center"></div></div>
                    <div class="box-right flex-x-align">
                        <span class="price">{{item.package_price}}</span>
                        <div class="time flex-x-align">
                            <i class="icon icon-clock"></i>
                            <span>{{item.package_time}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 请选择套餐区 end -->

        <!-- 支付信息区 start -->
        <div class="pay-info-block">
            <div class="pay-info-item pay-way-block flex-x-align">
                <!-- <div class="pay-way flex-x-align pr" data-pay_way_id="1">
                    <div class="pay-way-left flex-x-align">
                        <i class="icon icon-zhifubao"></i>
                        <span>支付宝</span>
                    </div>
                    <i class="icon icon-radio"></i>
                </div> -->
                <div class="pay-way flex-x-align pr" v-bind:class="{active: (payWayIds.indexOf(item.pay_way_id) >= 0)}" v-for="item in payWays" v-bind:key="item.pay_way_id" @click="choosePayWay(item.pay_way_id)">
                    <div class="pay-way-left flex-x-align">
                        <i class="icon" v-bind:class="item.pay_way_icon"></i>
                        <span>{{item.pay_way_name}}</span>
                    </div>
                    <i class="icon icon-radio"></i>
                </div>
            </div>

            <div class="pay-info-item coupon-block flex-x-align pr">
                <span class="label">优惠券</span>
                <div class="block-right flex-x-align fr">
                    <span class="tip">恭喜您本次可使用5元优惠券</span>
                    <input class="mui-switch mui-switch-animbg fr is_coupon_checked" v-bind:checked="is_coupon_checked" type="checkbox" value="1" @click="is_coupon_checked = !is_coupon_checked">
                </div>
            </div>

            <div class="pay-info-item integral-block flex-x-align pr">
                <span class="label">积分抵扣</span>
                <div class="block-right flex-x-align fr">
                    <span class="tip">用100积分抵¥10</span>
                    <input class="mui-switch mui-switch-animbg fr is_integral_checked" v-bind:checked="is_integral_checked" type="checkbox" value="0" @click="is_integral_checked = !is_integral_checked">
                </div>
            </div>
        </div>
        <!-- 支付信息区 end -->

        <!-- 确认下单按钮和阅读协议区 start -->
        <div class="content-bottom flex-y-align">
            <div class="flex-center bg-orange buy-order-btn">确认下单</div>
            <div class="protocol-block flex-x-align" :class="{read: is_read}">
                <i class="icon icon-radio" @click="is_read = !is_read"></i>
                <span class="protocol-label">我已阅读并同意<span class="color-orange protocol-entrance" @click="is_show_protocol = true">《好享按服务协议》</span></span>
            </div>
        </div>
        <!-- 确认下单按钮和阅读协议区 end -->

    </div>
    <!-- 主体内容 end -->

    <!-- 协议弹窗 start -->
    <div class="modal modal-protocol" v-show="is_show_protocol">
        <div class="modal-content pr">
            <div class="content-wrap">
                <div class="protocol-header">
                    <p>请使用之前仔细阅读“用户协议”并正确使用按摩椅，避免发生意外。</p>
                </div>
                <div class="protocol-main">
                    <span class="protocol-tip">不适宜人群</span>
                    <p class="protocol-content">1.残疾障碍人士、感官或者神经有缺陷的人士，未成年的人士使用时需要在监护人的指导下使用。</p>
                    <p class="protocol-content">2.具有心脏问题以及佩戴起搏器医用电子仪器的人士不适宜使用。</p>
                    <p class="protocol-content">3.患有恶性肿瘤、急性疾病、心脏病、高血压等遗传疾病的人员不适宜使用。</p>
                    <span class="protocol-tip">禁止事项</span>
                    <p class="protocol-content">1.残疾障碍人士、感官或者神经有缺陷的人士，未成年的人士使用时需要在监护人的指导下使用。</p>
                    <p class="protocol-content">2.具有心脏问题以及佩戴起搏器医用电子仪器的人士不适宜使用。</p>
                    <p class="protocol-content">3.患有恶性肿瘤、急性疾病、心脏病、高血压等遗传疾病的人员不适宜使用。</p>
                </div>
            </div>
            <div class="protocol-footer flex-center">
                <div class="position_bottom flex-center bg-orange" @click="[is_read = true,is_show_protocol = false]">阅读并同意</div>
            </div>
        </div>
    </div>
    <!-- 协议弹窗 end -->

    <!-- 错误弹框 start -->
    <div class="modal modal-wrong" v-show="is_broken">
        <div class="modal-content flex-center">
            <p class="wrong-tip">不好意思，这台按摩椅还没准备好哦，要不你换一台试试</p>
        </div>
    </div>
    <!-- 错误弹框 end -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      is_broken: false,
      packages: [
        {
          package_id: 1,
          is_commend: false,
          package_name: '满血复活',
          package_price: '￥10',
          package_time: '10分钟',
          is_active: false
        },
        {
          package_id: 2,
          is_commend: true,
          package_name: '全身按摩',
          package_price: '￥15',
          package_time: '20分钟',
          is_active: true
        },
        {
          package_id: 3,
          is_commend: true,
          package_name: '高级按摩',
          package_price: '￥30',
          package_time: '30分钟',
          is_active: false
        }
      ],
      packageIds: [2],
      payWays: [
        {
          pay_way_id: 2,
          pay_way_icon: 'icon-weixin',
          pay_way_name: '微信',
          is_active: true
        },
        {
          pay_way_id: 3,
          pay_way_icon: 'icon-quanma',
          pay_way_name: '券码支付',
          is_active: false
        }
      ],
      payWayIds: [1],
      is_coupon_checked: true,
      is_integral_checked: false,
      is_show_protocol: false,
      is_read: false
    }
  },
  methods: {
    choosePackage (packageId) {
      let idIndex = this.packageIds.indexOf(packageId)
      if (idIndex >= 0) {
        this.packageIds.splice(idIndex, 1)
      } else {
        this.packageIds = []
        this.packageIds.push(packageId)
      }
    },
    choosePayWay (payWayId) {
      let index = this.payWayIds.indexOf(payWayId)
      if (index >= 0) {
        this.payWayIds.splice(index, 1)
      } else {
        this.payWayIds = []
        this.payWayIds.push(payWayId)
      }
    }
  }
}
</script>

<style scoped>
@import '../../style/switch.css';
body{
    margin: 0;
}
/* 主体内容 */
.content-container {
    width: 100%;
    height: 100%;
    background: #F8F8F8;
    padding-bottom: 2.45rem;
    box-sizing: border-box;
}

/* 首页头部 */
.home-header {
    width: 100%;
    height: 7.5rem;
    background: #FF6600;
    padding-top: 0.7rem;
    box-sizing: border-box;
}
.home-header .icon-symbol {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 auto 0.6rem;
}
.home-header .app-name {
    display: inline-block;
    font-family: ToppanBunkyuMidashiGothicStdN-ExtraBold;
    font-size: 1.2rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 1.8rem;
    margin: 0 auto 0.4rem;
}
.home-header .company-name {
    display: inline-block;
    font-size: 0.6rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 0.6rem;
}

/* 请选择套餐区 */
.package-block {
    width: 100%;
    padding-top: 0.7rem;
    padding-bottom: 0.6rem;
    background: #FFFFFF;
}
.package-block .package-top {
    width: 100%;
    padding: 0 1.5rem;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    text-align: center;
}
.package-block .package-top span {
    display: inline-block;
    font-size: 0.7rem;
    letter-spacing: 0;
    line-height: 0.7rem;
    margin: 0 0.4rem;
}
.package-block .package-top .icon {
    display: inline-block;
}
.package-block .package-top img {
    width: 100%;
}
.package-block .package-box-wrap {
    width: 100%;
    padding: 0 2.35rem;
    box-sizing: border-box;
}
.package-block .package-box-wrap .package-box {
    width: 100%;
    height: 2.5rem;
    border: 1px solid rgba(102,102,102,0.70);
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 0.8rem;
}
.package-block .package-box-wrap .package-box:last-child {
    margin-bottom: 0;
}
.package-block .package-box-wrap .package-box .box-left {
    width: 50%;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: 1px solid rgba(102,102,102,0.70);
    font-size: 0.9rem;
    color: rgba(102,102,102,0.85);
    letter-spacing: 0;
    line-height: 1.25rem;
    box-sizing: border-box;
    overflow: hidden;
}
.package-block .package-box-wrap .package-box .box-left .left-top {
    width: 2.3rem;
    height: 2.2rem;
    background: url(../../images/tuijian_white@3x.png) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
.package-block .package-box-wrap .package-box .box-right {
    width: 50%;
    height: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    /* border-left: 0.5px solid rgba(102,102,102,0.70); */
    padding-left: 0.6rem;
    box-sizing: border-box;
}
.package-block .package-box-wrap .package-box .box-right .price {
    display: inline-block;
    font-size: 0.8rem;
    color: rgba(102,102,102,0.70);
    letter-spacing: 0;
    line-height: 0.6rem;
    margin-right: 0.6rem;
}
.package-block .package-box-wrap .package-box .box-right .time .icon {
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0.2rem;
}
.package-block .package-box-wrap .package-box .box-right .time span {
    font-size: 0.7rem;
    color: rgba(102,102,102,0.70);
    letter-spacing: 0;
    line-height: 0.6rem;
}
/* 套餐选中后的状态 */
.package-block .package-box-wrap .package-box.active {
    border: none;
}
.package-block .package-box-wrap .package-box.active .box-left {
    background: #FF6600;
    color: #FFFFFF;
}
.package-block .package-box-wrap .package-box.active .box-left .left-top {
    background-image: url(../../images/tuijian_orange@3x.png);
}
.package-block .package-box-wrap .package-box.active .box-right {
    border: 1px solid #FF6600;
    color: #FF6600 !important;
}
.package-block .package-box-wrap .package-box.active .box-right .price {
    color: #FF6600;
}
.package-block .package-box-wrap .package-box.active .box-right .time span {
    color: #FF6600;
}
.package-block .package-box-wrap .package-box.active .box-right .time .icon {
    background-image: url(../../images/clock_orange@3x.png);
}

/* 支付信息区 */
.pay-info-block {
    width: 100%;
    background: #FFFFFF;
    padding: 0.35rem 0.6rem 0;
    box-sizing: border-box;
}
.pay-info-block .pay-info-item {
    width: 100%;
    height: 2.2rem;
    border-bottom: 1px solid #E1E1E1;
}
.pay-info-block .pay-info-item:last-child {
    border-bottom: 0;
}
.pay-info-block .pay-way-block .pay-way {
    width: 50%;
    box-sizing: border-box;
}

.pay-info-block .pay-way-block .pay-way .pay-way-left .icon-zhifubao,
.pay-info-block .pay-way-block .pay-way .pay-way-left .icon-weixin {
    display: inline-block;
    width: 1.0rem;
    height: 1.0rem;
    margin-right: 0.4rem;
}
.pay-info-block .pay-way-block .pay-way .pay-way-left .icon-quanma {
    display: inline-block;
    width: 1.2rem;
    height: 0.85rem;
    margin-right: 0.4rem;
}
.pay-info-block .pay-way-block .pay-way .pay-way-left span {
    display: inline-block;
    font-size: 0.7rem;
    color: rgba(102,102,102,0.85);
    line-height: 1.0rem;
}
.pay-info-block .pay-way-block .pay-way .icon-radio {
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    position: absolute;
    right: 0.6rem;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
}
.pay-info-block .pay-way-block .pay-way:first-child {
    border-right: 1px solid #B5B5B5;
    padding-right: 0.6rem;
}
.pay-info-block .pay-way-block .pay-way:last-child {
    /* border-left: 0.5px solid #B5B5B5; */
    padding-left: 0.6rem;
}
/* 选中某种支付方式的状态 */
.pay-info-block .pay-way-block .pay-way.active .icon-radio {
    background-image: url(../../images/ic_yixuanze_yes@3x.png);
}

.pay-info-block .pay-info-item .label {
    font-size: 0.7rem;
    color: rgba(102,102,102,0.85);
    line-height: 1.0rem;
}
.pay-info-block .pay-info-item .block-right {
    position: absolute;
    right: 0.15rem;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
}
.pay-info-block .pay-info-item .block-right .tip {
    font-size: 0.7rem;
    color: rgba(102,102,102,0.85);
    line-height: 1.0rem;
    margin-right: 0.65rem;
}
.pay-info-block .pay-info-item .block-right .mui-switch {
    width: 2.0rem;
    height: 1.1rem;
}
.pay-info-block .pay-info-item .block-right .mui-switch:before {
    width: 1.0rem;
    height: 1.0rem;
}

/* 确认下单按钮和阅读协议区 */
.content-bottom {
    width: 100%;
    padding: 1.05rem 0 1.2rem;
}
.content-bottom .buy-order-btn {
    width: 74.9%;
    height: 2.2rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: #FFFFFF;
    line-height: 1.1rem;
    margin-bottom: 1.2rem;
}
.content-bottom .protocol-block .icon-radio {
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0.3rem;
}
.content-bottom .protocol-block .protocol-label {
    display: inline-block;
    font-size: 0.6rem;
    color: rgba(102,102,102,0.70);
    line-height: 0.85rem;
}
/* 已阅读的状态 */
.content-bottom .protocol-block.read .icon-radio {
    background-image: url(../../images/ic_yixuanze_xieyi@3x.png);
}

/* 协议弹窗 */
.modal-protocol .modal-content {
    width: calc(100% - 2.7rem);
    padding-bottom: 3.2rem;
}
.modal-protocol .modal-content .content-wrap {
    width: 100%;
    height: 16.5rem;
    padding: 0.6rem;
    box-sizing: border-box;
    overflow-y: scroll;
}
.modal-protocol .modal-content .content-wrap .protocol-header {
    font-size: 0.8rem;
    color: #333333;
    line-height: 1.1rem;
    margin-bottom: 1.25rem;
}
.modal-protocol .modal-content .content-wrap .protocol-main {
    width: 100%;
}
.modal-protocol .modal-content .content-wrap .protocol-main .protocol-tip {
    display: inline-block;
    font-size: 0.7rem;
    color: #333333;
    line-height: 1.0rem;
    padding-left: 0.75rem;
    position: relative;
}
.modal-protocol .modal-content .content-wrap .protocol-main .protocol-tip:before {
    content: '';
    width: 3px;
    height: 0.9rem;
    background: #FF6600;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
}
.modal-protocol .modal-content .content-wrap .protocol-main .protocol-content {
    font-size: 0.7rem;
    color: #333333;
    line-height: 1.0rem;
}
.modal-protocol .modal-content .protocol-footer {
    width: 100%;
    height: 3.2rem;
    padding: 0.5rem 0;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 0 0 4px 4px;
    position: absolute;
    left: 0;
    bottom: 0;
}
.modal-protocol .modal-content .protocol-footer .position_bottom {
    width: 7.5rem;
    height: 2.2rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: #FFFFFF;
    line-height: 1.1rem;
}

/* 错误弹框的提示 */
.modal-wrong .modal-content {
    width: calc(100% - 5.4rem);
    padding: 0.75rem 1.3rem;
    background: #393939;
    border-radius: 8px;
}
.modal-wrong .modal-content .wrong-tip {
    font-size: 0.7rem;
    color: #FFFFFF;
    line-height: 1.5rem;
}
</style>
