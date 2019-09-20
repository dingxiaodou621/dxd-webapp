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
import request from '@/utils/request'

// 测试是否好使，经测试-数据有效
request({
  method: 'GET',
  url: '/app/v1_0/channels'
}).then(res => {
  console.log(res)
})

export default {
  name: 'App'
}
</script>

<style>

</style>
