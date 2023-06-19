<template>
  <div
    class="mapWrapper"
    :class="isexpand ? 'expand' : ''"
    @mouseover.self="mouseOver"
    @mouseleave.self="mouseLeave"
  >
    <div class="mapCard one" :data-name="'one'"></div>
    <div class="mapCard two" :data-name="'two'"></div>
    <div class="mapCard three" :data-name="'three'"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isexpand: false,
    };
  },
  methods: {
    mouseOver(e) {
      this.isexpand = true;
    },
    mouseLeave(e) {
      this.isexpand = false;
    },
  },
  mounted(){
    
  }
};
</script>

<style lang="scss" scoped>
.mapCard {
  height: 60px;
  width: 86px;
  top: 50%;
  transform: translateY(-50%);
}
.mapWrapper {
  position: absolute;
  right: 0px;
  height: 80px;
  width: 105px;
  overflow: hidden;
  background: #0000000f;
}
.expand {
  width: 300px;
  .one {
    right: 202px;
    background-image: url(http://localhost:8081/img/1.257eb403.jpeg);
    background-size: cover;
  }
  .two {
    right: 106px;
    background-image: url(http://localhost:8081/img/2.393f8a9e.jpeg);
    background-size: cover;
  }
  .three {
    right: 10px;
    background-image: url(http://localhost:8081/img/3.bdc58dc6.jpeg);
    background-size: cover;
  }
}
.one {
  position: absolute;
  background: black;
  right: 15px;
}
.two {
  position: absolute;
  right: 10px;
  background: gray;
}
.three {
  position: absolute;
  right: 5px;
  background-image: url(http://localhost:8081/img/3.bdc58dc6.jpeg);
  background-size: cover;
}
.one,
.two,
.three {
  background-repeat: no-repeat;
  -webkit-transition: right 0.4s, background-image 2s; /* For Safari 3.1 to 6.0 */
  transition: right 0.4s, background-image 2s;
}
</style>