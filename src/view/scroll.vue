<template>
<div>
    <div @click="scroll">手动滚动</div>
    <div ref="scrollListRef" class="scroll-box">
        
      <div :style="{height:itemHeight+'px'}" class="item" v-for="item in list" :key="item.name">{{item.name}}</div>
    </div>
</div>
    
    
</template>

<script>
    export default {
        data(){
          return{
              itemHeight:40,
              list:[{
                  name:"jackson Yee"
              },{
                  name:"jackson"
              },{
                  name:"Yee"
              },{
                  name:"小北"
              },{
                  name:"送你一朵小红花"
              },{
                  name:"航航"
              },{
                  name:"少年的你"
              },{
                  name:"世间有她"
              },{
                  name:"长津湖"
              },{
                  name:"向未来"
              },{
                  name:"易烊千玺"
              }]
          }
        },
        mounted(){

        },
        methods:{
            scroll(){
                setInterval(()=>{
                    // console.log(this.$refs.scrollListRef.scrollTop)
                let boxHeight=this.$refs.scrollListRef.clientHeight
                if(this.$refs.scrollListRef.scrollTop>=boxHeight+this.itemHeight){                   
                    this.$refs.scrollListRef.scrollTop=0
                }
                this.$refs.scrollListRef.scrollTop+=10
                if(this.$refs.scrollListRef.scrollTop%this.itemHeight==0){
                   this.list.push(this.list.shift())
                }
                // console.log(this.$refs.scrollListRef.scrollTop)
                },500)
                
            //    console.log(this.$refs.scrollListRef.scrollTop)
            }
        }
    }
</script>

<style lang="scss" scoped>
.scroll-box{
    height: 200px;
    overflow: hidden;
    .item{
        width: 400px;
        height: 40px;
        line-height: 40px;
        background: #f56c6c;
        color: #fff;
    }
}
</style>