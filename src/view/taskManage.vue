
<template>
    <div class="container">
        <button @click="isActive = !isActive">展开/折叠</button>
        <collapse>
            <div class="container" v-show="isActive">
               <div style="width:200px;height:30px;background:purple;">11111</div>
               <div style="width:200px;height:30px;background:purple;">11111</div>
               <div style="width:200px;height:30px;background:purple;">11111</div>
               <div style="width:200px;height:30px;background:purple;">11111</div>
               <div style="width:200px;height:30px;background:purple;">11111</div>
               <div style="width:200px;height:30px;background:purple;">11111</div>
            </div>
        </collapse>
    </div>
</template>
<script>
import collapse from "../assets/js/collapse.js";
import axios from "axios"
export default {
  data() {
    return {
      isActive: false
    };
  },
  components: {
    collapse
  },
  created(){
   axios.defaults.withCredentials = true;
   axios.get("http://localhost:8083/code").then(res=>{
     console.log(res)
   })
  }
};
</script>