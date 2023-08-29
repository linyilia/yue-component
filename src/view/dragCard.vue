<template>
    <div class="wrapper">
        <div  class="item" v-for="item, index in list" :key="index" draggable="true"  @dragstart="dragStart(item,index)" @dragover.prevent="dragOver(index)" @drop="dragEnd()"
             >
            <!-- {{ item.name }} -->
            <img  style="width:100%;height:100%;" :src="item.imgUrl" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    name: "1",
                    imgUrl:require(`@/assets/images/1.jpeg`)
                }, {
                    name: "2",
                    imgUrl: require(`@/assets/images/2.jpeg`)
                }, {
                    name: "3",
                    imgUrl: require(`@/assets/images/3.jpeg`)
                }, {
                    name: "4",
                    imgUrl: require(`@/assets/images/5.jpeg`)
                }, {
                    name: "5",
                    imgUrl: require(`@/assets/images/6.jpeg`)
                }, {
                    name: "6", 
                    imgUrl: require(`@/assets/images/7.jpeg`)
                }, {
                    name: "7",
                    imgUrl: require(`@/assets/images/8.jpg`)
                }, {
                    name: "8", 
                    imgUrl: require(`@/assets/images/9.jpg`)
                }
            ],
            list2: [
                {
                    name: "1",
                    imgUrl:"../../static/images/1.jpeg" 
                }, {
                    name: "2",
                    imgUrl: "../../static/images/1.jpeg"
                }, {
                    name: "3",
                    imgUrl: "../../static/images/1.jpeg"
                }, {
                    name: "4",
                    imgUrl: "../../static/images/1.jpeg"
                }, {
                    name: "5",
                    imgUrl: "../../static/images/1.jpeg"
                }, {
                    name: "6",
                    imgUrl: "../../static/images/1.jpeg"
                }, {
                    name: "7",
                    imgUrl: "../../static/images/1.jpeg"
                }, {
                    name: "8",
                    imgUrl: "../../static/images/1.jpeg"
                }
            ],
            dragStartIndex: '',
            dragStartData: '',
            dragOverIndex: ''
        }

    },
    methods: {
       dragStart(item, index) {
            this.dragStartIndex = index
            this.dragStartData = item
        },
        // 只要拖拽元素进入到放置区域就触发，这里实际是鼠标指针进入放置区域才触发
        dragOver(index) {
            this.dragOverIndex = index
        },
        dragEnd() {
            console.log(this.dragOverIndex)
            const copyTodolist = [...this.list]
            // 删除老的节点
            copyTodolist.splice(this.dragStartIndex, 1)
            // 在列表中目标位置增加新的节点
            copyTodolist.splice(this.dragOverIndex, 0, this.dragStartData)
            this.list = [...copyTodolist]
            this.dragOverIndex = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100%;

    .item {
        // background: url("../../public/static/images/1.jpeg") no-repeat;
        background-size: cover;
        height: 250px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        /* width: 25%; */
        /* float: left; */
        /* padding: 24px 16px 0; */
        /* margin-bottom: 6px; */
        /* height: 250px; */
        width: 25%;
        float: left;
        padding: 24px 16px 0;
        margin-bottom: 6px;
        box-sizing: border-box;
    }
}

@media (max-width: 999px) {
    .wrapper .item {
        width: 33.33%;
    }
}

@media (max-width: 767px) {
    .wrapper .item {
        width: 50%;
    }
}

@media (max-width: 500px) {
    .wrapper .item {
        width: 100%;
    }
}
</style>