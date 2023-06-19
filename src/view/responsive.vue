<template>
  <div>
      <span @click="deleteName">删除了name</span><span style="color:red">{{name}}</span>
      <span @click="addItem">添加了this.student的属性</span><span style="color:red">{{student.age}}</span>
      <span @click="updateArr">更新了this.student的hobby</span><span style="color:red">{{student.hobby[0]}}</span>
      <span @click="updateName">更新了student.name</span><span style="color:red">{{student.name}}</span>
      <span @click="updateAllArr">给student的数组重新赋值</span><span style="color:red">{{JSON.stringify(student.hobby)}}</span>
      <span @click="arrPush">this.student的hobby添加新元素</span><span style="color:red">{{JSON.stringify(student.hobby)}}</span>
  </div>
</template>

<script>
export default {
  // data(){
  //     return{

  //     }
  // },
  // methods:{
  //     defineReactive(data,key,val){
  //        Object.defineProperty(data,key,{
  //            enumerable:true,
  //            configurable:true,
  //            get:function(){
  //                console.log(`对象属性:${key}访问defineRective的get`)
  //                return val;
  //            },
  //            set:function(newVal){
  //                if(val===newVal){
  //                    return
  //                }
  //                val=newVal;
  //                console.log(`对象属性:${key}访问defineReactive的set`)
  //            }
  //        })
  //     }
  // },
  mounted () {
      let obj={};
      this.defineReactive(obj,"name","sapper");
      obj.name="工兵";
      console.log('obj',obj.name);
      obj.age=12;
      console.log('obj',obj)
      console.log("obj.age",obj.age)
      obj.hobby=["游戏","元神"];
      obj.hobby[0]='王者';
      console.log("obj.hobby",obj.hobby)
      obj.student={school:"大学"};
      obj.student.school='学院';
      console.log("obj.student.school",obj.student.school)

  //     //proxy实现
  //     let targetProxy={name:'sapper'};
  //     let objProxy =new Proxy(targetProxy,{
  //         get(target,key){
  //             console.log(`对象属性:${key}访问Proxy的get!`)
  //             return target[key]
  //         },
  //         set(target,key,newVal){
  //             if(target[key]===newVal){
  //                 return
  //             }
  //             console.log(`对象属性:${key}访问Proxy的set!`)
  //             target[key]=newVal;
  //             return target[key]
  //         }
  //     })

  //     objProxy.name="工兵";
  //     console.log("objProxy.name",objProxy.name);

  //     objProxy.age=12;
  //     console.log("objProxy.age",objProxy.age);

  //     objProxy.hobby=["游戏","元神"];
  //     // objProxy.hobby[0]="王者";
  //     console.log("objProxy.hobby",objProxy.hobby);

  //     objProxy.student={school:'大学'};
  //     objProxy.student.school="学院";
  //     console.log("objProxy.student.school",objProxy.student.school)

  },

  data() {
    return {
      name: "sapper",
      student: {
        name: "sapper",
        hobby: ["原神", "天涯明月刀"],
      },
    };
  },
  methods: {
     defineReactive(data,key,val){
         Object.defineProperty(data,key,{
             enumerable:true,
             configurable:true,
             get:function(){
                 console.log(`对象属性:${key}访问defineRective的get`)
                 return val;
             },
             set:function(newVal){
                 if(val===newVal){
                     return
                 }
                 val=newVal;
                 console.log(`对象属性:${key}访问defineReactive的set`)
             }
         })
    },
    deleteName() {
      delete this.student.name;
      console.log("删除了name", this.student);
    },
    addItem() {
      this.student.age = 21;
      console.log("添加了this.student的属性", this.student);
    },
    updateArr() {
      this.student.hobby[0] = "王者";
      console.log("更新了this.student的hobby", this.student);
    },
    updateName(){
      this.student.name="千玺";
      console.log("更新了student.name",this.student)
    },
    updateAllArr() {
      this.student.hobby= ["qiqnxi","qianqian"];
      console.log("给this.student的hobby重新赋值", this.student);
    },
    arrPush(){
      this.student.hobby.push("xiaobei") 
       console.log("this.student的hobby添加新元素", this.student);
    }
  },
};
</script>

<style lang="scss" scoped></style>
