<template>
  <div class="slidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#eeeeee"
      text-color="#000"
      active-text-color="#ffd04b"
      router
    >
    <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/user-list">用户列表</el-menu-item>
          <el-menu-item index="2-2">用户信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sliderbar',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .slidebar{
    display: block;
    position: absolute;
    top: 70px;
    width: 200px;
    left: 0;
    bottom: 0;
    background-color: #2e263f;
  }
  .slidebar > ul {
    height: 100%;
  }
</style>
