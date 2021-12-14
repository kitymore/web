<template>
  <div class="searchBar">
    <el-input v-model="input" placeholder="Please input" class="inputMy" />&nbsp; <el-input v-model="input" placeholder="Please input" class="inputMy" />&nbsp; <el-input v-model="input" placeholder="Please input" class="inputMy" />&nbsp;
    <el-button type="primary">搜索</el-button>
    <el-button>重置</el-button>
    <el-button @click="handleChange">导入</el-button>
    <el-button @click="exportExcelFormServe">导出</el-button>
  </div>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="pageSize">
    <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleSizeChange"> </el-pagination>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// import { importExcel, exportExcel } from '@/utils/excel'

interface dataType {
  date: string
  name: string
  address: string
}
// interface filetype {
//   name: string
//   url: string
// }
// const fileList: filetype[] = []
const input = ref(null)
const total = ref(800)
const tableData: dataType[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const handleSizeChange = (page: number) => {
  console.log(page)
}
const handleEdit = (index: number, row: number) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: number) => {
  console.log(index, row)
}
/**
 * 导入
 */
const handleChange = () => {
  // importExcel((a: any, b: any) => {
  //   console.log(a, b)
  // })
}
/**
 * 导出
 */
const exportExcelFormServe = () => {
  // const data: any[] = [
  //   ['Id', 'Title', 'Author'],
  //   ['123', 'egegerg', 'why']
  // ]
  // exportExcel(data, 'sheet')
}
</script>

<style scoped lang="scss">
.searchBar {
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  .inputMy {
    width: 240px;
  }
}
.pageSize {
  text-align: end;
  margin-top: 20px;
}
</style>
