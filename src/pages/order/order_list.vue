<template>
  <section>
  <!-- 滚动区域内容 start -->
  <div class="mescroll" id="mescroll" v-if="total > 0">

      <!-- 顶部切换菜单 start -->
      <div class="order-tab-wrap flex-x-align">
          <div class="order-tab flex-center" :class="{active: (tabIds.indexOf(tab.tab_id) >= 0)}" v-for="tab in tabs" :key="tab.tab_id" @click="changeTab(tab.tab_id)">{{tab.tab_value}}</div>
      </div>
      <!-- 顶部切换菜单 end -->

      <!-- 记录列表 start -->
      <div class="record-list main">

          <!-- 订单盒子 start -->
          <div class="order-box" v-for="data in dataList" :key="data.order_num" v-if="type === 1">
              <div class="order-top">
                  <span class="order-num">订单编号：{{data.order_num}}</span>
              </div>
              <div class="order-main clearfix">
                  <span class="order-name">{{data.order_name}}</span>
                  <span class="order-time fr">{{data.order_time}}</span>
              </div>
              <div class="order-bottom clearfix">
                  <p class="fare-info">费用：<span class="fare">{{data.order_fare}}</span></p>
                  <span class="pay-way fr" v-if="data.pay_way == 1">支付宝支付</span>
                  <span class="pay-way fr" v-else-if="data.pay_way == 2">微信支付</span>
                  <span class="pay-way fr" v-else>券码支付</span>
              </div>
          </div>
          <!-- 订单盒子 end -->

          <!-- 退款记录盒子 start -->
          <div class="refund-box" v-for="data in dataList" :key="data.refund_id" v-else>
              <div class="refund-top clearfix">
                  <span class="refund-name">{{data.refund_name}}</span>
                  <span class="refund-time fr">退款时间：{{data.refund_time}}</span>
              </div>
              <div class="refund-bottom clearfix">
                  <p class="fare-info">费用：<span class="fare">{{data.refund_fare}}</span></p>
                  <span class="refund-obj fr" v-if="data.refund_obj == 1">钱款去向：支付宝</span>
                  <span class="refund-obj fr" v-else-if="data.refund_obj == 2">钱款去向：微信</span>
                  <span class="refund-obj fr" v-else>钱款去向：其他</span>
              </div>
          </div>
          <!-- 退款记录盒子 end -->

      </div>
      <!-- 记录列表 end -->

      <!-- 没数据的提示 start -->
      <div class="no-data pullUpBox flex-center">
          <span class="pullUpLabel">暂无记录</span>
      </div>
      <!-- 没数据的提示 end -->

  </div>
  <!-- 滚动区域内容 end -->

  <!-- 无订单 start -->
  <div class="default-page no-order flex-y-align" v-else>
      <img src="/Public/Images/front/chair_img/bgimg_defaultpage_order@3x.png" alt="" class="no-order-img">
      <span class="tip">什么都没有耶，赶紧去逛逛吧</span>
  </div>
  <!-- 无订单 end -->

  <!-- 无网络 start -->
  <div class="default-page no-net flex-y-align" v-show="!hasNet">
      <img src="/Public/Images/front/chair_img/img_network_none@3x.png" alt="" class="no-net-img">
      <span class="tip"></span>
  </div>
  <!-- 无网络 end -->

  <!--加载中,弹层-->
  <div class="loading-outer flex-center hide">
    <div class="loading-inner flex-center">
      <i class="loading-icon loading-icon-rorate"></i>
      <span>加载中...</span>
    </div>
  </div>
  </section>
</template>

<script>
import MeScroll from '../../plugins/mescroll.m'
import dataList1 from '../../script/dataList1'

export default {
  data () {
    return {
      tabs: [
        {
          tab_id: 1,
          tab_value: '订单列表'
        },
        {
          tab_id: 2,
          tab_value: '退款记录'
        }
      ],
      tabIds: [1],
      total: 0,
      hasNet: true,
      mescroll: null,
      dataList: [],
      type: 1
    }
  },
  mounted: function () {
    var self = this
    self.mescroll = new MeScroll('mescroll', {
      up: {
        callback: self.upCallback,
        isBounce: false
      }
    })
  },
  methods: {
    changeTab (tabId) {
      let index = this.tabIds.indexOf(tabId)
      if (index >= 0) {
        this.tabIds.splice(index, 1)
      } else {
        this.tabIds = []
        this.tabIds.push(tabId)
      }
      if (tabId === 1) {
        this.type = 1
      } else {
        this.type = 2
      }
    },
    upCallback: function (page) {
      var self = this
      getListDataFromNet(page.num, page.size, function (curPageData) {
        if (page.num === 1) {
          self.dataList = []
        }
        self.dataList = self.dataList.concat(curPageData)
        console.log('page.num=' + page.num + ', page.size=' + page.size + ', curPageData.length=' + curPageData.length + ', self.pdlist.length==' + self.dataList.length)
        self.mescroll.endBySize(curPageData.length, self.total)
      }, function () {
        self.mescroll.endErr()
      })
    }
  }
}

function getListDataFromNet (pageNum, pageSize, successCallback, errorCallback) {
  setTimeout(() => {
    var data = dataList1
    var listData = []
    for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
      if (i === data.length) {
        break
      }
      listData.push(data[i])
    }
    successCallback && successCallback(listData)
  }, 500)
}
</script>

<style scoped>
@import '../../style/mescroll.min.css'
/* 滚动区域内容 */
.mescroll {
    position: fixed;
    top: 0;
    bottom: 0;
    height: auto;
}

/* 顶部切换菜单 */
.order-tab-wrap {
    width: 100%;
    height: 2.2rem;
    background: #FFFFFF;
    border-bottom: 1px solid #E1E1E1;
}
.order-tab-wrap .order-tab {
    width: 50%;
    height: 100%;
    font-size: 0.8rem;
    color: #999999;
    letter-spacing: 0.34px;
    line-height: 1.1rem;
}
/* 选项选中的状态 */
.order-tab-wrap .order-tab.active {
    color: #FF6600;
    background: #F3F3F3;
}

/* 记录列表 */
.record-list {
    width: 100%;
}
/* 订单盒子 */
.order-box,.refund-box {
    width: 100%;
    padding: 0.5rem 0.6rem;
    box-sizing: border-box;
    background: #FFFFFF;
    margin-bottom: 0.6rem;
}
.record-list .order-box:last-child，
.record-list .refund-box:last-child {
    margin-bottom: 0;
}
.order-box .order-top,
.refund-box .refund-top {
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #E1E1E1;
}
.order-box .order-top .order-num {
    font-size: 0.7rem;
    color: #999999;
    line-height: 1.0rem;
}
.order-box .order-main {
    width: 100%;
    padding: 0.5rem 0 0.4rem;
}
.order-box .order-main .order-name {
    font-size: 0.7rem;
    color: #333333;
    line-height: 1.0rem;
}
.order-box .order-main .order-time {
    font-size: 0.7rem;
    color: #999999;
    line-height: 1.0rem;
}
.order-box .order-bottom,
.refund-box .refund-bottom {
    width: 100%;
}
.order-box .order-bottom .fare-info,
.refund-box .refund-bottom .fare-info {
    display: inline-block;
    font-size: 0.7rem;
    color: #666666;
    line-height: 1.0rem;
}
.order-box .order-bottom .fare-info .fare,
.refund-box .refund-bottom .fare-info .fare {
    font-size: 0.7rem;
    color: #C71B00;
    line-height: 1.0rem;
}
.order-box .order-bottom .pay-way,
.refund-box .refund-bottom .refund-obj {
    font-size: 0.7rem;
    color: #999999;
    line-height: 1.0rem;
}

/* 退款记录 */
.refund-box .refund-top .refund-name {
    font-size: 0.8rem;
    color: #333333;
    line-height: 1.1rem;
}
.refund-box .refund-top .refund-time {
    font-size: 0.7rem;
    color: #999999;
    line-height: 1.0rem;
}
.refund-box .refund-bottom {
    padding-top: 0.5rem;
}

/* 无订单 */
.default-page {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background: #FFFFFF;
}
.default-page img {
    margin: 0 auto 1.5rem;
}
.default-page .tip {
    display: inline-block;
    font-size: 0.7rem;
    color: #BBBBBB;
    line-height: 1.0rem;
}
.no-order .no-order-img {
    width: 6.3rem;
    height: 7.65rem;
    margin: 4.25rem auto 1.5rem;
}
.no-net .no-net-img {
    width: 7.8rem;
    height: 6.55rem;
    margin: 5.35rem auto 1.5rem;
}
</style>
