<template>
  <div class="wrapper">
    <i @click="download" class="el-icon-download"></i>
    <div class="horizontal">
      <div class="left-arrow" @click="leftSwiper">
        <i class="el-icon-caret-left"></i>
        <div class="hr"></div>
      </div>
      <div class="main">
        <template v-for="(item, index) in list">
          <div :key="index" v-if="index % 2 == 0" class="top card">
            <div class="box">
              <div class="content">{{ item.content }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
            <div class="arrow"></div>
            <div class="node">
              <i></i>
              <div class="line"></div>
            </div>
          </div>
          <div :key="index" v-else class="bottom card">
            <div class="node">
              <i></i>
              <div class="line"></div>
            </div>
            <div class="arrow"></div>
            <div class="box">
              <div class="content">{{ item.content }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
          </div>
        </template>
      </div>
      <div class="right-arrow" @click="rightSwiper">
        <i class="el-icon-caret-right"></i>
        <div class="hr"></div>
      </div>
    </div>
    <div class="downloadfile" style="display: none"></div>
    <div class="vertical">
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      list: [
        {
          content: "每一个星球都有一个驱动核心",
          time: "2022-10-11",
        },
        {
          content: "每一种思想都有影响力的种子。",
          time: "2022-10-11",
        },
        {
          content: "感受世界的温度,年轻的你也能成为改变世界的动力",
          time: "2022-10-11",
        },
        {
          content: "你的潜力，是改变世界的动力！",
          time: "2022-10-11",
        },
      ],
    };
  },
  methods: {
    rightSwiper() {},
    leftSwiper() {},
    download() {
        //  let dom=document.querySelector(".main")
        //  dom.style.opacity=0
        //  dom.style.width="auto"
      //    var scrollWidth=document.querySelector(".vertical").scrollWidth
      //    var width = document.querySelector(".vertical").clientWidth;
      //    var height=document.querySelector(".vertical").clientHeight;
      //    var pageX=document.querySelector(".vertical").pageXOffset;
      //    console.log(scrollWidth)
      //    html2canvas(document.querySelector(".vertical"), {
      //                   useCORS: true,
      //                   // windowWidth:scrollWidth,//获取y方向页面包含滚动条的高度，24和100为padding,margin
      //                   width: scrollWidth,//48为padding值
      //                   windowWidth:scrollWidth,
      //                   // height: height + 400,//可见高度+padding+margin
      //                   // y: window.pageYOffset + 100,//滚动条高度修复
      //                   x:100,
      //                   // scrollX:-300
      //               }).then(canvas => {
                   
      //         const a = document.createElement('a');
      //  a.href = canvas.toDataURL('image/png');
      //  a.download = "流程图";
      //  a.click()

      // })

      let dom = document.querySelector(".main").cloneNode(true);
      console.log(dom);
      // dom.style.display = "none";
      dom.style.width = "auto";
      document.querySelector(".horizontal").append(dom);
      html2canvas(dom, {
        allowTaint: true,
        taintTest: true,
        onrendered: function (canvas) {
          //生成base64图片数据
          var dataUrl = canvas.toDataURL();
          //移除临时添加的标签
          dom.remove();
        },
      }).then((canvas) => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "流程图";
        a.click();
        dom.remove();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.horizontal {
  display: flex;
  .main {
    width: 600px;
    height: 154px;
    display: flex;
    overflow: auto;
  }
  .main::-webkit-scrollbar {
    height: 3px;
  }
  //滚动的滑块
  .main:hover::-webkit-scrollbar-thumb {
    background: #ffc107;
  }
  //外层滑轨
  .main::-webkit-scrollbar-track {
  }
  .left-arrow,
  .right-arrow {
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
    }
  }
  .left-arrow {
    .hr {
      border-bottom: 1px solid #e6e6e6;
      width: 20px;
      margin-left: -7px;
    }
  }
  .right-arrow {
    i {
      margin-left: -7px;
    }
  }
  .top,
  .bottom {
    width: 216px;
    display: flex;
    flex-direction: column;

    .box {
      height: 62px;
      background: #eee;
    }
    .arrow {
      width: 0px;
      border: none;
      border-top: 7px solid#eee;
      border-left: 7px solid transparent;
      border-bottom: 0px solid transparent;
      border-right: 7px solid transparent;
    }
    .box:after {
      content: "";
      width: 10px;
      height: 10px;
      background: #eee;
    }
    .content {
      font-size: 14px;
      text-align: left;
      margin-left: 16px;
    }
    .time {
      font-size: 12px;
      color: #999;
      text-align: left;
      margin: 5px 16px;
    }
    .node {
      display: flex;
      align-items: center;
      i {
        width: 16px;
        height: 16px;
        background: #ff9406;
        border-radius: 50%;
      }
      .line {
        width: 200px;
        border-bottom: 1px solid #e6e6e6;
      }
    }
  }
  .bottom {
    margin-top: 69px;
    .arrow {
      width: 0px;
      border: none;
      border-top: 0px solid transparent;
      border-left: 7px solid transparent;
      border-bottom: 7px solid #eee;
      border-right: 7px solid transparent;
    }
  }
}
</style>