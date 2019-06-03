<template>
  <div class="look">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.id}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      msg: '看一看'
    }
  }
}
</script>
