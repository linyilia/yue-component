<template>
<div style="display:flex;height:100%">
   <el-menu
      router
      default-active="2"
      :default-openeds="['']"
      class="el-menu-vertical-demo"
      >
      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>其他地源数据</span>
        </template>       
          <el-menu-item index="/task">任务</el-menu-item>  
          <el-menu-item index="/test">测试</el-menu-item> 
          <el-menu-item index="/split">拖拽分割</el-menu-item>
          <el-menu-item index="/scroll">自动滚屏</el-menu-item>
          <el-menu-item index="/vModel">v-model自定义组件</el-menu-item>  
          <el-menu-item index="/mapSwitching">百度底图切换效果</el-menu-item> 
          <el-menu-item index="/venogram">脉络图</el-menu-item> 
          <el-menu-item index="/drag">拖拽</el-menu-item>   
          <el-menu-item index="/acknowledge">sync</el-menu-item>   
          <el-menu-item index="/layout">常见布局</el-menu-item>  
          <el-menu-item index="/responsive">响应式</el-menu-item>   
          <el-menu-item index="/convertToPdf">html转换为pdf</el-menu-item>
          <el-menu-item index="/passValue">传值</el-menu-item>
          <el-menu-item index="/collpase">导航切换</el-menu-item>         
      </el-submenu>     
    </el-menu>
    <div style="flex: 1 1 auto;">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$router)
  }
}
</script>

<style>
.el-menu{
    width: 200px;
}
</style>