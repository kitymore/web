<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="(subItem, ti) in item.subs">
              <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index"> {{ threeItem.title }}</el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="ti">{{ subItem.title }} </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon><icon-menu /></el-icon>
            <template #title>
              {{ item.title }}
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
// import { useRouter } from 'vue-router';
import { Menu as IconMenu } from '@element-plus/icons'
import { useRoute } from 'vue-router'
import { useStore } from '../store'

interface itemType {
  index: string
  title: string
  icon?: string
  subs?: itemType[]
}
const items: itemType[] = [
  {
    icon: 'el-icon-lx-home',
    index: '/vuex',
    title: '首页'
  },
  {
    icon: 'el-icon-lx-warn',
    index: '1',
    title: '管理中心',
    subs: [
      {
        index: '/role',
        title: '角色权限管理'
      },
      {
        index: '/user',
        title: '用户信息管理'
      },
      {
        index: '/client',
        title: '客户信息管理'
      },
      {
        index: '/axios',
        title: '供应商信息管理'
      },
      {
        index: '/bom',
        title: 'BOM维护'
      },
      {
        index: '/matter',
        title: '物料信息'
      }
    ]
  }
]
const route = useRoute()

const onRoutes = computed(() => route.path)
const store = useStore()
const collapse = computed(() => store.state.collapse)
</script>

<style scoped lang="scss">
.navMenu {
  // background: #fff;
  // margin-right: 10px;
  // padding: 10px;
}
</style>
