<template>
  <div>
    <el-table :data="list">
     <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="study" label="学习科目"></el-table-column> 
      <el-table-column label="操作">
        <template slot-scope="scope">          
          <el-button @click="transmitClick(scope.row)">传递</el-button>
        </template>
      </el-table-column>
    </el-table>   
    <!-- 儿子组件 -->
    <ChildView :is-show="isOpen" :row="row" :name="name"></ChildView>
  </div>
</template>

<script>
import ChildView from "./ChildView.vue";
export default {
  components: { ChildView },
  data() {
    return {
      isOpen: false,
      name:"1111",
      row: {},
      list: [
        { name: "王丽", study: "Java" },
        { name: "李克", study: "Python" },
      ],
    };
  },
  methods: {
    // 传递事件
    transmitClick(row) {
      this.isOpen = true;
      this.row = row;
    },
  },
  mounted(){
      const arr=[
          {
              name:"内容1",
              pid:-1,
              id:1
          },
          {
              name:"内容1",
              pid:1,
              id:2
          },{
              name:"内容1",
              pid:1,
              id:3
          }
      ]
      function toTree(nodes,parentId=null,id,pid,name){
        const tree=[];
        nodes.filter(item=>item[pid]===parentId).forEach(ele => {
            console.log(ele)
            tree.push({
                id:ele[id],
                name:ele[name],
                children:toTree(nodes,ele[id],id,pid,name)
            })
        });
        return tree
      }
      const treeData=toTree(arr,-1,'id','pid','name')
      console.log(treeData)
  }
};
</script>

<style lang="scss" scoped></style>
