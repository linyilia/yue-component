<template>
  <div id="cesiumContainer" style="width: 100%; height: 100%"></div>
</template>
<script>
export default {
  name: "cesium",
  mounted() {
    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTRhNjMwYi01OTMwLTRmMTQtOWJmMS02NjNjNTUxYzVkNWEiLCJpZCI6MTA0ODgzLCJpYXQiOjE2ODk3NTY3Nzh9.SdJgxnfQjIJxAqjKceBo7lEQSxwQ6oN6te-TkdP5M8U";
    const viewer = new Cesium.Viewer("cesiumContainer");
   const entity = viewer.entities.add({
    name: 'plane',
    position: Cesium.Cartesian3.fromDegrees(102.3187, 24.4923, 0),
    model: {
        uri: "http://assets.agi.com/models/launchvehicle.glb",
        scale: 2,
        minimumPixelSize: 128, // 最小的模型像素
        maximumScale: 20000, // 最大的模型像素
        runAnimations: true, // 是否显示动画
        clampAnimations: true, // 是否保持最后一针的动画
        // color: Cesium.Color.RED, // 模型加颜色
        show: true
    }
   })
 
   viewer.trackedEntity = entity;
  },
};
</script>
