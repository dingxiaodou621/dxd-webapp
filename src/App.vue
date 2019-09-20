<template>
    <div id="add">
      <!-- vant 组件实例 -->
      <!-- <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group> -->
      <router-view />
    </div>
</template>

<script>
// import request from '@/utils/request'

// 封装了 axios，测试是否好使，通过测试，
// request({
//   method: 'GET',
//   url: '/app/v1_0/channels'
// }).then(res => {
//   console.log(res)
// })

// 配置处理后端返回的数据中包含超出 JavaScript 安全整数范围问题-测试数据，通过测试。
// request({
//   method: 'GET',
//   url: '/app/v1_1/articles',
//   params: {
//     channel_id: 0,
//     timestamp: Date.now(),
//     with_top: 1
//   }
// }).then(res => {
//   console.log(res.data)
// })

export default {
  name: 'App'
}
</script>

<style>

</style>
