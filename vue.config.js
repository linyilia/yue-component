module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  devServer: {
    // disableHostCheck: true,
    proxy: {
      // 配置跨域
      "/code": {
        target: "http://192.168.8.137:9999", //接口域名
        changOrigin: true, //是否跨域
        // pathRewrite: {
        //   //重置路径
        //   "^/code": "",
        // },
      },
    },
  },
};