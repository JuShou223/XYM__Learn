<template>
  <div id="app">
    clicked {{$store.state.count}} times, count is {{evenOrOdd}}
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <button @click="incrementIfOdd"> increment if odd </button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
// 借
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  // 如果多处要用到奇偶判断怎么办
  computed: mapGetters([
      'evenOrOdd'
    ])
}
</script>

<style>
</style>
