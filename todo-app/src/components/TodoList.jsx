import { TodoCard } from "./TodoCard";

export function TodoList(props){

  const {todos, selectedTab, handleCompleteTodo} = props;


  const filterTodosList = selectedTab === "All" ? 
    todos : 
    selectedTab == "Open" ? 
      todos.filter( todo => !todo.completed ) : 
      todos.filter( todo => todo.completed );

  return (
    <>
      {
        filterTodosList.map( (todo, todoIndex)=> {
          return (
            <TodoCard 
              key={todoIndex}
              indexTodo={todos.findIndex( currTodo => currTodo.input === todo.input)}
              {...props}
              todo={todo}/>
          )
        })
      }
    </>
  )
}