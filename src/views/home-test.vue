<template>
  <div>
    home页面测试
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle @click="doubleCount"></el-button>
    </el-row>

    <el-rate v-model="value" allow-half />
  </div>
  <div class="block">
    <span class="demonstration">Switch when indicator is hovered (default)</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <child :name="'jerrt'" @updateName="updateName"></child>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, computed, watch } from 'vue'
import child from '@/components/child.vue'

const value = ref(null)
const state = reactive({
  name: 'Jerry',
  sex: '男'
})
// 修改
state.name = 'Tom'

// 使用toRefs解构
const { name, sex } = toRefs(state)
console.log(name, sex)
// 通过computed获得doubleCount
const count = ref(1)
const doubleCount = computed(() => count.value * 2)
const state1 = reactive({
  count: 1
})
watch(
  () => state1.count,
  (newVal, oldVal) => {
    console.log(state1.count)
    console.log(`watch监听变化前的数据：${oldVal}`)
    console.log(`watch监听变化后的数据：${newVal}`)
  },
  {
    immediate: true, // 立即执行
    deep: true // 深度监听
  }
)
const updateName = (fromChildName: string) => {
  console.log(fromChildName)
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
</style>
