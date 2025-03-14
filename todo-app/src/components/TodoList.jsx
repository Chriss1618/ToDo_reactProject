import { TodoCard } from "./TodoCard";

export function TodoList(props){

  const {todos} = props;

  const tab = "Open";

  const filterTodosList = tab === "All" ? 
    todos : 
    tab == "Open" ? 
      todos.filter( todo => !todo.completed ) : 
      todos.filter( todo => todo.completed );

  return (
    <>
      {
        filterTodosList.map( (todo, todoIndex)=> {
          return (
            <TodoCard 
              key={todoIndex}
              todo={todo}/>
          )
        })
      }
    </>
  )
}