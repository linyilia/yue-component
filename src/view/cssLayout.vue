<template>
    <div>
         <div class="demo1">
            <span>解构煎饼式布局：flex</span>
            <div class="parent">
               <div class="child" v-for="i in [1,2,3]" :key="i"></div>
            </div>
         </div>
    </div>
</template>

<script>
    export default {
        data(){

        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
.demo1{
    .parent{
        display:flex;
        .child{
         flex: 0 1 150px;
         background: greenyellow;
        }
    }
   
}
</style>