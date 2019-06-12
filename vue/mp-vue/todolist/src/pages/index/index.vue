<template>
  <div>
    <swiper :autoplay="false" duration="1000">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
        <img :src="item" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <p class="title">{{title}}</p>
    <input type="text" placeholder="input todo" v-model="todoContent">
    <button @click="addTodo">添加一条</button>
    <button @click="clearTodo">清除</button>
    <ul class="todos">
      <li v-for="(item, index) in todos" :key="index" @click="toggle(index)" :class="{'done' : item.done}">{{item.text}}</li>
      <li>
        {{todoCount}}/{{todos.length}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      todoContent: '',
      title: 'Hello mpVue',
      todos: [
        {
          text: '次饭',
          done: false
        },
        {
          text: '碎觉',
          done: false
        },
        {
          text: '学习',
          done: false
        }
      ]
    }
  },
  computed: {
    todoCount () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  watch: {
    todos: function (todos) {
      wx.setStorageSync('todos', todos)
    }
  },
  methods: {
    toggle: function (i) {
      const todos = this.todos.slice(0)
      todos[i].done = !todos.done
      this.todos = todos
    },
    addTodo: function () {
      this.todos.push({
        text: this.todoContent,
        done: false
      })
      this.todoContent = ''
    },
    clearTodo: function () {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  created () {
    const todos = wx.getStorageSync('todos')
    if (todos) {
      this.todos = todos
    }
  }
}
</script>

<style scope>
.done{
  text-decoration: line-through;
}
</style>
