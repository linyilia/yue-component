<template>
  <div class='child-view'>
    <p>儿子组件</p>
    <grandson  v-bind="$attrs"></grandson>
  </div>
</template>

<script>
import grandson from './grandson.vue'
export default {
  // 继承所有父组件的内容
  inheritAttrs: false,
  components: { grandson },
  data() {
    return {
    }
  },
// props:["name"],
created(){
 
}
}
</script>

<style scoped>
  .child-view{
      margin: 20px;
      border:2px solid red ;
      padding: 20px;
  }
</style>
