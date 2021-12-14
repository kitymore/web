<template>
  <div class="mainContainer">
    <div class="header">
      <Header></Header>
    </div>
    <div class="center">
      <div class="leftMenu">
        <Nav></Nav>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Nav from '@/components/nav.vue'
import Header from '@/components/header.vue'
</script>

<style scoped lang="scss">
.mainContainer {
  width: 100%;
  height: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    overflow: hidden;
  }
  .center {
    height: calc(100% - 60px);
    display: flex;
    width: 100%;

    .leftMenu {
      //   width: 180px;
      //   background: #fff;
      // margin-right: 10px;
      background-color: rgb(50, 65, 87);
    }
    .content {
      max-width: calc(100% - 64px);
      background: #fff;
      width: 100%;
    }
  }
  .footer {
    height: 60px;
    line-height: 60px;
    background: #fff;
  }
}
</style>
