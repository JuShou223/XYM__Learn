<template>
  <div class="main-content">
    <Header></Header>
    <slide></slide>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Slide from '@/components/common/slide'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'hello word'
    }
  },
  components: {
    Header,
    Slide
  }
}
</script>
