<template>
  <div class="menu-box" >
    <div v-show="isShow" class="left-icon el-icon-d-arrow-left" @click="prev"></div>
    <el-menu
      :style="navStyle"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      ref="menuRef"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" >消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>
     <div v-show="isShow" class="right-icon el-icon-d-arrow-right" @click="next"></div>
     
  </div>
</template>

<script>
// import { transform } from 'html2canvas/dist/types/css/property-descriptors/transform';
export default {
  computed:{
    navStyle:function (){
       console.log(this.navOffset)
      return {
       
          transform:"translateX"+"(-"+this.navOffset+"px)"
      } 
    }
  },
  watch:{
    "navOffset"(val){
      console.log(val)
    }
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isShow:false,
      navOffset:0
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    debounce(fn, delay) {
      let timer;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
        }, delay);
      };
    },
    setChangeBtnIsShow(){
        if(this.$refs.menuRef){
           let _length=this.$refs.menuRef.$children.length
           let _children=this.$refs.menuRef.$children
           let _overallLengtWidth=0
           if(_children&&_children.length){
              _children.forEach(ele => {
                _overallLengtWidth+=ele.$el.offsetWidth
              });
           }
           let _parentWidth=this.$refs.menuRef.$el.offsetWidth
           console.log(_parentWidth,_overallLengtWidth)
           if(_parentWidth<_overallLengtWidth){
            this.isShow=true;
           }else{
            this.isShow=false;
           }
        }
    },
    prev(){
        var e = this.$refs.menuRef.$el.offsetWidth //父节点的宽度
                  , t = this.navOffset; //
                if (t) {
                    var n = e < t ? t - e : 0;
                    this.navOffset = n
                }
    },
    next(){          
        var t = this.$refs.menuRef.$el.offsetWidth
                  , n = this.navOffset;
                  let _children=this.$refs.menuRef.$children
           let e=0
           if(_children&&_children.length){
              _children.forEach(ele => {
                e+=ele.$el.offsetWidth
              });
           }
                if (!(e - n <= t)) {
                    var i = 2 * t < e - n ? n + t : e - t;
                    this.navOffset = i
                }
    },
  },
  mounted(){
    this.debounceFn = this.debounce(this.setChangeBtnIsShow, 500);
    window.addEventListener("resize", this.debounceFn);
  }
};
</script>.

<style lang="scss" scoped>
.menu-box{
    display: flex;
    align-items: center;
    .left-icon,.right-icon{

    }
    .el-menu-demo{
        flex: 1;
        overflow: hidden;
        display: flex;
    }
}

</style>
