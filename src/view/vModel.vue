<template>
    <div>
    <h2>
        {{child1}}
    </h2>
     <Child v-model="child1"></Child >
    </div>
</template>

<script>
    import Vue from 'vue' 
    const child=Vue.extend({
        name:"child",
        model:{
            prop:"childContent",
            event:"change"
        },
        props:{
            child:String
        },
        template:`
            <section>
                <h3>自定义student</h3>
                <h4>属性：{{child}}</h4>
                <button @click="handle">改变</button>
                </section>
        `,
        methods:{
            handle(){
                console.log('handle====');
                this.$emit('change',"hahhhahahha")
            }
        }
    })
    export default {
        components:{
            child
        },
        data(){
            return{
              child1:"xixiixixixi"
            }
            
        },
    }
</script>

<style lang="scss" scoped>

</style>