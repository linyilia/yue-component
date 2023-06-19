<template>
    <div class="tabs">
        <el-tabs type="border-card" style="width:200px;">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
    我的行程
  </el-tab-pane>
  <el-tab-pane label="消息中心">消息中心</el-tab-pane>
  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane> <el-tab-pane label="消息中心">消息中心</el-tab-pane>
  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
</el-tabs>
     <!-- <div class="tab-header">
        <div class="prev-btn"></div>
        <div class="center">
            <div class="tab-item" v-for="item in types" :key="item">
            {{item.name}}
            </div>
        </div>       
        <div class="next-btn"></div>
     </div> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                types:[{
                    name:"水平居中",
                    value:"shuiping"
                },{
                    name:"垂直居中",
                    value:"chuizhi"
                },{
                    name:"水平垂直居中",
                    value:"shuipingchuizhi"
                },{
                    name:"两列布局",
                    value:"towcolumn"
                },{
                    name:"三列布局",
                    value:"threecolumn"
                },{
                    name:"等分布局",
                    value:"equal"
                },{
                    name:"sticky Footer布局",
                    value:"stickyfooter"
                },{
                    name:"全屏布局",
                    value:"fullspreen"
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
.tab-item{
    color: aqua;
}
</style>