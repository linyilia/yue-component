<template>
  <div>
      {{num}}
    <school :num="num" :addnum.sync="num"></school>
  </div>
</template>

<script>
import Vue from "vue";
const school = Vue.extend({
  // 传入配置对象
  // 子组件配置对象不要写el,根据vm引入作用到对应区域
  //  data属性需要写成函数
  template: `<button @click="changeNum">改变父组件中的num</button>`,
  name: "school",
  data() {
    return {
      // 返回需要的data对象,因为data函数返回值是一个新的拷贝,而data对象是共同引用
    };
  },
  props: ["num"],
  methods: {
    changeNum() {
      // 子组件通过$emit方式触发传递给子组件的自定义事件来改变父组件中的数据
      this.$emit("update:addnum", this.num + 1);
    },
  },
});

export default {
  data() {
    return {
      num: 1,
    };
  },
  components: {
    school,
  },
};
</script>

<style lang="scss" scoped></style>
