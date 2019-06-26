// [
//   {
//     id: '',
//     text: '',
//     completed: ''
//   }
// ]
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        {
          text: action.text , 
          completed: action.completed || false,
          id: action.id
        },
        ...state
      ]
    case 'TOGGLE_TODO':
      return state.map((todo)=>{
        if(action.id === todo.id){
          return{...todo,completed: !todo.completed}
        }
        return todo
      })
    default:
      return state
  }
}