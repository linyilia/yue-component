

<template>
  <div class="box">
    <div class="input_box">
      <input type="file" @change="onChange" />
    </div>
    <div class="button_box">
      <el-button
        :disabled="state.status === 1 || state.status === 2"
        class="but"
        type="primary"
        @click="upLoad"
        >上传</el-button
      >
      <el-button
        :disabled="state.status === 0 || state.status === 2"
        class="but"
        type="primary"
        @click="clickPause"
        >暂停</el-button
      >
      <el-button
        :disabled="state.status === 1 || state.status === 0"
        class="but"
        type="primary"
        @click="clickContinue"
        >继续</el-button
      >
    </div>
    <div class="progress-box">
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="state.progress"
      ></el-progress>
      <!-- <el-progress  /> -->
    </div>
    <Split>
      <template v-slot:left>
        <div style="background:red;height:100%"></div>
      </template>
      <template v-slot:right>
        <div style="background:blue;height:100%"></div>
      </template>
    </Split>
  </div>
</template>
<script>
import Split from "./split.vue";
import axios from "axios";
export default {
  name: "home",
  props: {},
  data() {
    return {
      currentFile: {},
      partList: [],
      progressArr: [],
      state: {
        filename: "",
        totalSize: 0,
        progress: 0,
        currentUploadSize: 0,
        source: {},
        status: 0, // 0 初始化 1 上传中 2 停止
      },
    };
  },
  components: { Split },
  methods: {
    // 分片
    createChunks(file) {
      const SIZE = 1024 * 1024 * 100; // 默认100M
      const { size, name, type } = file;
      let current = 0;
      let partLists = [];
      // 进行切片
      while (current < size) {
        let chunk = file.slice(current, current + SIZE);
        partLists.push({ chunk, size: chunk.size });
        current += SIZE;
      }
      return partLists;
    },
    // 计算哈希 其实可以后端计算主要为了使用一下worker
    calculateHash(partList) {
      return new Promise((resolve) => {
        let worker = new Worker("/hash.js");
        worker.postMessage({ partList });
        worker.onmessage = (event) => {
          let { hash } = event.data;
          if (hash) {
            resolve(hash);
          }
        };
      });
    },
    // 发送上传请求
    async handleUpLoad(partList) {
      let that = this;
      let data = await this.$http.verifyFile(this.state.filename); // 获取当前上传进度
      // if (!data.needUpLoad) {
      //   this.state.progress = 100;
      //   this.state.status = 0;
      //   // Notify({ type: "primary", message: "秒传成功！" });
      //   return;
      // }
      // 过滤掉已经上传完成的
      partList = partList.filter((part) => {
        let currentFile =
          data.uploadList &&
          data.uploadList.length &&
          data.uploadList.find((item) => item.filename === part.chunkname);
        // 如果当前的part不存在
        if (!currentFile) {
          part.loaded = 0;
          return true;
        }
        // 用于刷新以后 或者断点续传时保存当前已经上传的大小
        this.state.currentUploadSize += currentFile.size;
        if (currentFile.size < part.size) {
          part.loaded = currentFile.size;
          return true;
        }
        return false;
      });
      // 用来取消请求
      const CancelToken = axios.CancelToken;
      this.state.source = CancelToken.source();
      return Promise.all(
        partList.map((item, index) => {
          console.log(item);
          return this.$http.fileUpLoad(
            item.chunk.slice(item.loaded),
            item.filename,
            item.chunkname,
            item.loaded,
            (progressEvent) => {
              console.log();
              // 处理进度条
              that.state.progress = progressEvent.loaded;
            },
            this.state.source
          );
        })
      );
    },
    // 上传
    async upLoad() {
      if (!this.currentFile.value) {
        Notify({ type: "primary", message: "请选择文件" });
        return;
      }
      // 进度条归零
      // this.progressArr.value.clear();
      // this.state.currentUploadSize = 0;
      this.state.progress = 0;
      this.state.status = 1;
      // 分片
      this.partList = this.createChunks(this.currentFile.value);
      // 计算哈希（为秒传提供支持）通过webworker计算
      let fileHash = await this.calculateHash(this.partList);
      let { name } = this.currentFile.value;
      let DotIndex = name.lastIndexOf(".");
      let extName = name.slice(DotIndex);
      // 最后的文件名
      this.state.filename = `${fileHash}${extName}`;
      // 添加每个分块的名称
      this.partList.forEach((item, index) => {
        item.filename = this.state.filename;
        item.chunkname = `${this.state.filename}-${index}`;
      });
      console.log(this.partList);
      try {
        let data = await this.handleUpLoad(this.partList);
        console.log("data", data);
        if (data) {
          await this.$http.mergeFile(this.state.filename);
          // this.state.status = 0;
          // Notify({ type: "primary", message: "上传成功！" });
        }
      } catch (error) {
        console.log(error);
        // Notify("暂停上传！");
      }
    },
    // 点击暂停
    clickPause() {
      // 清空之前分片的进度
      // this.progressArr.value.clear();

      this.state.status = 2;
      this.state.source.cancel("取消上传");
    },
    // 点击继续
    async clickContinue() {
      try {
        this.state.status = 1;
        let data = await this.handleUpLoad(partList);
        if (data) {
          await this.$http.mergeFile(this.state.filename);
          this.state.status = 0;
          Notify({ type: "primary", message: "上传成功！" });
        }
      } catch (error) {
        console.log(error);
        Notify("暂停上传！");
      }
    },
    // 监听文件长传
    async onChange(e) {
      console.log(e)
      this.$http.fileUpLoad(e.target.files[0]).then(res=>{})
      // this.state.status = 0;
      // // 进度条归零
      // // this.progressArr.value.clear();
      // this.state.currentUploadSize = 0;
      // this.state.progress = 0;
      // this.currentFile.value = e.target.files[0];
      // // 存储总大小
      // this.state.totalSize = this.currentFile.value.size;
    },
  },
  // 处理进度条
  watch: {
    progressArr: {
      handler(newVal, oldValue) {
        let sum = 0;
        let arr = Array.from(newVal);
        sum = arr.reduce((pre, cur) => {
          return pre + cur[1];
        }, 0);
        // 暂停后清空this.progressArr sum为0 所以如果是暂停 不做处理保持原来的progress
        if (sum == 0) return;
        sum += this.state.currentUploadSize;
        this.state.progress =
          parseFloat((sum / this.state.totalSize).toFixed(2)) * 100;
        this.state.progress = Number(this.state.progress.toFixed(0)); // 处理*100 以后的精度问题
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
/* .box {
  width: 500px;
  height: 500px;
  margin-top: 100px;
  margin: auto;
  padding-top: 50px;
}
.input_box {
  padding: 20px;
}
.button_box {
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.progress-box {
  margin-top: 20px;
} */
</style>

