<template>
    <div>
     <a href="http://localhost:8082/manage/dataCleaning/qx_qx/cleaningHomePage">清洗系统</a>
     <a href="https://yiyan.baidu.com/">文心一言</a>
     <img src="https://img.alicdn.com/imgextra/i4/O1CN01xkRWGx1C6F33mmV6B_!!6000000000031-2-tps-198-200.png" alt="">
     <iframe src="https://blog.csdn.net/zxczero/article/details/125613915" frameborder="0"></iframe>
     <iframe src="http://36.41.73.198:10082/manage/dataCleaning/qx_qx/cleaningHomePage" frameborder="0"></iframe>
     <div @click="openQINGXI">跳转到清洗</div>
    </div>
</template>

<script>
    export default {
        methods:{
            varArea(){
               var a=1;
            },
            openQINGXI(){
                window.open("http://36.41.73.198:10082/manage/dataCleaning/qx_qx/cleaningHomePage")
            }
        },
        mounted(){
            this.varArea();
            function b1(){
               var b=1;
              if(b=1){
                let  c=2
                console.log(c)
              }else{
                let c=3
                console.log(c)
              }
            //   console.log("1111",c)
            }
           
            b1()
            var d=1;
            var d=2;
            console.log("dddd",d)
            // let e11=1;
            // let e11=2;
            // console.log(e11)
        }
    }
</script>

<style lang="scss" scoped>

</style>