import http from './request';

const server = {
  //带参数的 get 方法
  demo() {
    return http({
      url: '/first',
      method: 'get'
    })
  },
  download(p, downfun) {
    return http({
      url: '/download',
      method: 'get',
      params: p,
      responseType: 'blob',
      onDownloadProgress: downfun
    })
  },


  mergeFile(filename) {
    return http({
      url: `/merge/${filename}`,
      method: 'get',
    })
  },

  
  
  verifyFile(filename) {
    return http({
      url: `/verify/${filename}`,
      method: 'get',
    })
  },
  fileUpLoad(file) {
    return http({
      url: `/upload`,
      method: "post",
      params: file,
      responseType: "blob",
    });
  }
}
export default server
