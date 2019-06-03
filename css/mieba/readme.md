- 小程序 诞生于react大红之后
  MVVM 组件 vant
  数据驱动界面
  Vue 语法简洁
- Vue 与小程序共异
1. 思想
  网页，new Vue({
    el:'#app'
  })
2. 组件
  Vue.component('',{
    template:'',
    data(){
      return {

      }
    }
  })

- MVVM 不需要dom 因为dom 很低效 
  但是要找元素整么办？ ref 属性相当于id 

- Math.random()<0.5
组件的思想
 vue.component('Heroes',{
   props:{
     参数：参数的约束
   }
   ,
   templete:`

   `
 })
 组件化思维 
 <Heroes :heroes=heroes/>
 小程序 src="{{item.src}}"
 vue :src="item.src"
 props语法 ref="allAudio" this.$refs.allAudio
 wx:for  v-for