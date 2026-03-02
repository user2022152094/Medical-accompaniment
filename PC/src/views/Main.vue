<template>
  <div class="common-layout">
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside> -->
       <Aside/>
      <el-container>
        <!-- <el-header>Header</el-header> -->
        <el-header><Header/></el-header>
        <el-main>
          <Router-View/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  import Aside from '../components/aside.vue'
  import Header from '../components/navHeader.vue'
</script>

<style lang="less">
  .common-layout {
    height: 100%;
    .el-container {
      height: 100%;
    }
  }
</style>