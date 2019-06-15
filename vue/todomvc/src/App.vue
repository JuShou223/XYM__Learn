<template>
  <div>
    <counter :count="count"/>
  </div>
</template>

<script>
// 两个兄弟组件 共享count数据
// count 不属于 Count 组件私有 data(){} props
import Counter from './components/Counter'
export default {
  data() {
    return {
      count: 0
    }
  },
  components: {
    'counter': Counter
  },
  methods: {
  }
}
</script>

<style>

</style>
