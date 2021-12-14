<template>
  <div>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round @click="changeName">修改name值{{ child }}</el-button>
    <div>{{ type }}</div>
    <div class="fromVlaueFrom">{{ fatherProps.name }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
// 测试vue3语法糖父子组件传参
// import { defineProps } from 'vue'
// defineProps在<script setup>中自动可用，无需导入
// 需在.eslintrc.js文件中【globals】下配置【defineProps: true】

const fatherProps = defineProps({
  name: {
    type: String,
    default: 'father'
  }
})
const child = ref(0)
// 获取父组件数据
const type = getCurrentInstance()?.parent?.props.type
console.log(567, type)
// 声明事件
const emit = defineEmits(['updateName'])
const changeName = () => {
  // 执行
  emit('updateName', 'Tom')
}
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
.p {
  code {
    background-color: red;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
}
</style>
