<template>
  <div>
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>{{ count }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
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
