<template>
  <div>
    <el-upload
      class="upload-demo"
      action="http://127.0.0.1:8082/file_upload"
      :on-change="handleChange"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <div class="progress">
      <span>上传进度：{{ total | totalText }}%</span>
      <el-link
        type="primary"
        v-if="total > 0 && total < 100"
        @click="handleBtn"
        >{{ btn | btnText }}</el-link
      >
    </div>
    <el-button @click="download()" type="primary">下载</el-button>
    <!-- <div>{{percent}}</div> -->
    <el-progress
      :text-inside="true"
      :stroke-width="26"
      :percentage="percent"
    ></el-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      percent: 0,
      total: 0,
      totalText: "",
      btn:false,
      btnText:false
    };
  },
  methods: {
    async changeFile(file) {
      if (!file) return;
      console.log("file", file);
      file = file.raw;
      // 解析成buffer数据
      // 切片处理，把文件切成多个部分（固定数量/固定大小)
      // 每一个切片都有自己的部分数据和自己的名字
      let buffer = await fileParse(file, "buffer"),
        spark = new SparkMD5.ArrayBuffer(),
        suffix;
      spark.append(buffer);
      let hash = spark.end();
      suffix = /\.([0-9a-zA-Z]+)$/i.exec(file.name)[1];
      console.log("suffix", suffix);
      // 创建100个切片
      let partList = [],
        partsize = file.size / 100,
        cur = 0;
      for (let i = 0; i < 100; i++) {
        let item = {
          chunk: file.slice(cur, cur + partsize),
          filename: `${hash}_${i}.${suffix}`,
        };
        cur += partsize;
        partList.push(item);
      }
      this.partList = partList;
      this.hash = hash;
      this.sendRequest();
    },
    async sendRequest() {
      // 根据100个切片创建100个请求（集合）
      let requestList = [];
      this.partList.forEach((item, index) => {
        // 每一个函数都是发送一个切片的请求
        let fn = () => {
          let formData = new FormData();
          formData.append("chunk", item.chunk);
          formData.append("filename", item.filename);
          return axios
            .post("/single3", formData, {
              headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => {
              res = res.data;
              if (res.code == 0) {
                this.total += 1;
                this.partList.splice(index, 1);
              }
            });
        };
        requestList.push(fn);
      });
      let complete = async () => {
        let result = await axios.get("/merge", {
          params: {
            hash: this.hash,
          },
        });
        result = result.data;
        if (result.code == 0) {
          this.video = result.path;
        }
      };
      let i = 0;
      let send = async () => {
        // 都发完了
        if (this.abort) return;
        if (i >= requestList.length) {
          complete();
          return;
        }
        await requestList[i]();
        i++;
        send();
      };
      send();
    },
    handleBtn() {
      if (this.btn) {
        // 断点续传
        this.btn = false;
        this.abort = false;
        this.sendRequest();
        return;
      }
      // 暂停上传
      this.btn = true;
      this.abort = true;
    },

    handleChange() {},
    //返回文件流下载
    download() {
      let that = this;
      this.$http
        .download({ name: "AxureRP-Pro9.0-Chinese.zip" }, function (event) {
          // 下载进度监听
          console.log(event);
          that.percent = parseInt(100 * (event.loaded / event.total));
          console.log(that.percent);
          //  if(event.loaded===event.total){
          //    // 下载完成 loading = true
          //  }
        })
        .then((res) => {
          const blob = new Blob([res.data]);
          const downloadElement = document.createElement("a");
          const href = window.URL.createObjectURL(blob);
          //后台再header中传文件名
          downloadElement.href = href;
          downloadElement.download = "AxureRP-Pro9.0-Chinese.zip";
          document.body.appendChild(downloadElement);
          downloadElement.click();
          document.body.removeChild(downloadElement); // 下载完成移除元素
          window.URL.revokeObjectURL(href); // 释放掉blob对象
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>