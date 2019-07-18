<template>
    <button @click="handle" :class="'i-button-size'+ size" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
function oneOf(value,validList){
    for(let i=0;i<validList.length;i++){
        if(value == validList[i]){
            return true
        }
    }
    return false;
}
import bus from '@/common/bus'
export default {
    data(){
        return {
            msg: 'button'
        }
    },
    props:{
        size: {
            validator(value){
                return oneOf(value,['small','large','default'])
            },
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        handle(){
            bus.$emit('todo',this.msg)
        }
    }
}
</script>

<style>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.i-button-sizelarge{
  padding: 12px;
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}
</style>

