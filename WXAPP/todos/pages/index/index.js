Page ({
  data:{
    hasUserInfo:false,
    userInfo:{},
    todos:[],
    isExists:false,
    addText:'',
    focus:false,
    status:1
  },
  showStatus:function(e){
    var status=e.currentTarget.dataset.status;
    if(status===this.data.status){return;}
    this.setData({
      status
    })
  },
  setInput:function(e){
    this.setData({
      addText:e.detail.value
    })
  },
  addTodo:function(){
    // 1.检测有没有输入
    if(!this.data.addText.trim()){
      wx.showToast({
        title: '请输入todo',
        duration:1000,
        icon:"none"
      })
      return ;
    }
    // 2.todos push
    let todos=this.data.todos;
    todos.push({
      title:this.data.addText,
      id:new Date().getTime(),
      status:0
    })
    this.setData({
      todos,
      isExists:false,
      addText:'',
      focus:false
    })
    // 3.关闭表单
  },
  addTodoShow:function(){
    this.setData({
      isExists:true,
      focus:true
    })
  },
  addTodoHide:function(){
    this.setData({
      isExists: false,
      focus: true
    })
  },
  getUserInfo:function(e){
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
    })
  }
})