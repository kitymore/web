<template>
  <div>
    <el-button type="primary" @click="double">double</el-button>
    vuex页面测试
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '../store'

const store = useStore()
console.log(123, store.state.text)
const double = () => {
  // store.commit('numFactoryModule/DOUBLE_COUNT')
  store.dispatch('numFactoryModule/SET_DOUBLE_COUNT', 4)
  console.log(123, store.state.numFactoryModule.count)
}
// 在 computed 函数中访问 state
const count = computed(() => store.state.count)
console.log(count.value)
// 使用 mutation
const increment = () => store.commit('increment')

// 使用 action
const asyncIncrement = () => store.dispatch('numFactoryModule/SET_DOUBLE_COUNT')
console.log(increment, asyncIncrement)
</script>

<style scoped lang="scss"></style>
