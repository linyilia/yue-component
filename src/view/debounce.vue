<template>
  <div>
    <input class="search" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var search = document.querySelector(".search");
    function debounce(fn, delay) {
        console.log("")
      var timer = null;
      var handleFn = function () {
        if (timer) clearTimeout(timer);
        // 获取this和argument
        var _this = this;
        var _arguments = arguments;
        timer = setTimeout(function () {
          // 在执行时，通过apply来使用_this和_arguments
          fn.apply(_this, _arguments);
        }, delay);
      };

      // 取消处理
      handleFn.cancel = function () {
        if (timer) clearTimeout(timer);
      };

      return handleFn;
    }
    // 2.监听输入内容,发送ajax请求
    // 2.1.定义一个监听函数
    var counter = 0;
    function searchChange(e) {
      counter++;
      console.log("发送" + counter + "网络请求");
      console.log(this);
      console.log(e.target.value);
    }

    // 对searchChange处理
    var _searchChange = debounce(searchChange, 3000);

    // 绑定oninput
    search.oninput = _searchChange;

    // 3.取消事件
    var cancelBtn = document.querySelector(".cancel-btn");
    cancelBtn.onclick = function (event) {
      _searchChange.cancel();
    };
  },
};
</script>

<style lang="scss" scoped></style>
