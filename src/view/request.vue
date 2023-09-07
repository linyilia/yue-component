<template>
    <div>
      ajax,axios
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:null
            }
        },
        methods:{
           ajaxRequest(){
            let data=null
            var xhr = new XMLHttpRequest();
            xhr.open('GET', require("../assets/logo.png"), false);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // 请求成功，处理响应
                        let fileName="logo.png"
                        this.data =fileName
                        
                    } else {
                        console.log(xhr.responseText)
                    }
                }
            };        

            xhr.send();
           }
        },
        mounted(){
         this.ajaxRequest()
         console.log(this.data)
        }
    }
</script>

<style lang="scss" scoped>

</style>