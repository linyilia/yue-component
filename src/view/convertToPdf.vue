<template>
    <div>
      <span style="color:red">地学制备</span>
      <input type="button" value="打印此页面" @click="printpage()" /> 
      <div id="printContent">打印内容</div> 
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
           printpage() { 
            let newstr = document.getElementById("printContent").innerHTML; 
            let oldstr = document.body.innerHTML;
            document.body.innerHTML = newstr;
            window.print(); 
            document.body.innerHTML = oldstr; 
            return false; 
          } 
        },
        mounted(){
        window.onbeforeprint = function(event) { 
                //隐藏无关元素
        }; 
        window.onafterprint = function(event) { 
                //展示无关元素 
        };
        }
    }
</script>

<style lang="scss" scoped>
p { 
font-size: 12px; 
} 
@media print { 
    p { 
        font-size: 14px; 
    } 
}
// 隐藏部分内容
@media print { 
    span { 
        display:none
    } 
}

</style>