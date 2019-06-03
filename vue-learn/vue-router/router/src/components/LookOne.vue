<template>
  <div class="look-one">
    <h1>{{ msg }}</h1>
    <div class="go-two" @click="goTwo">去look2</div>
  </div>
</template>

<style>
.go-two{
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'LookOne',
  data () {
    return {
      msg: '你瞅啥'
    }
  },
  methods: {
    goTwo () {
      this.$router.push({name: 'LookTwo', params: {id: 123}})
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('ENTER', to, from, next)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('LEAVE', to, from, next)
    next()
  }
}
</script>
