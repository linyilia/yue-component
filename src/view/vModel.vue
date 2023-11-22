<template>
  <div id="app">
      <p ref="dom" id="op">{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "cesium",
  data(){
    return{
       message: 'hello world',

    }
  },
  methods: {
    changeValue() {
      this.message = 'hello zhangShan'
      console.log(this.$refs.dom.innerText)
    },
    changeValue1() {
      this.message = 'hello zhangShan'
      this.message = 'hello liShi'
      this.message = 'hello wangWu'
      this.message = 'hello chenLiu'
      console.log(this.$refs.dom.innerText)
    },
    defineProperty(){
      let obj={}
      Object.defineProperty(obj,"name",{
        value:1
      })
      return obj
    },
    defineProperty1() {
      let obj = {}
      Object.defineProperties(obj,{
        name: {
          value:1,
          writable:true,
        
          delete:true
        },
        id:{
          value:"111"
        }
      })
      return obj
    },
    defineProperty2(){
      let _obj={}
      let a=1
      Object.defineProperties(_obj,{
        a:{
          get(){

          },
          set(val){
             a = val
            let op=document.getElementById("op")           
            op.innerHTML=a
          }
        },
        b:{

        }
        
      })
      return _obj
    }
  },
  mounted() {
    // console.log(obj)
    // var obj= this.defineProperty1()
    // obj.name=2
    // // delete obj.name
    // console.log("111",obj)

    // let _obj= this.defineProperty2()
    // _obj.a="1111"

    let _obj={}
    _obj.a="1111w"
    this.message= _obj.a
    
    // // 第一步
    // this.message = 'aaa'

    // // 第二步
    // setTimeout(() => {
    //   console.log('222')
    // })

    // // 第三步
    // Promise.resolve().then((res) => {
    //   console.log('333')
    // })

    // // 第四步
    // this.$nextTick(() => {
    //   console.log('444')
    //   console.log(this.$refs.dom)
    // })

    // // 第五步
    // Promise.resolve().then((res) => {
    //   console.log('555')
    // })
  },
};
</script>
