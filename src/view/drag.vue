<template>
    <div>
        <div v-drag class="drag">
            <div style="width:200px;height:200px;background:yellow;"></div>
            <!-- <img src="../assets/images/rose.png" alt=""> -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        directives:{
            drag(el,bindings){
                el.onmousedown = function(e){
                    console.log(el)
                    e.preventDefault()
                    var disx = e.pageX - el.offsetLeft;
                    var disy = e.pageY - el.offsetTop;
                    document.onmousemove = function (e){
                        let eLeft=e.pageX - disx
                        let eTop=e.pageY - disy
                        if(eLeft>=el.parentNode.offsetLeft&&eLeft<=(el.parentNode.offsetLeft+el.parentNode.width)){
                          el.style.left = e.pageX - disx+'px'; 
                        }
                        if(eTop>=el.parentNode.offsetTop&&eTop<=(el.parentNode.offsetTop+el.parentNode.height)){
                           el.style.top = e.pageY - disy+'px';
                        }
                    }
                    document.onmouseup = function(){
                        document.onmousemove = document.onmouseup = null;
                    }
                }
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
.drag{
    position: absolute;
    
}
</style>