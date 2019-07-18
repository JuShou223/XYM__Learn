<template>
    <dir>
        <h3>动态渲染vue文件的组件--display</h3>
        <i-display :code="code"></i-display>
    </dir>
</template>

<script>
import iDisplay from '@/components/com/display'
import defaultCode from './default-code'
export default {
    components: {
        iDisplay
    },
    data(){
        return{
            code: defaultCode
        }
    }
}
</script>

<style>

</style>
