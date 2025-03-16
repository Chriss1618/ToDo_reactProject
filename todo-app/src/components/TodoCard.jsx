export function TodoCard(props){

  const { todo, indexTodo, handleDeleteTodo , handleCompleteTodo} = props;
  
  return (
    <div className="card todo-item">
        <p> {todo.input}</p>
        <div className="todo-buttons">
          <button onClick={ () =>{
            handleCompleteTodo(indexTodo)
          }} disabled={todo.completed}> <h6>Done</h6></button>

          <button onClick={ () =>{
            handleDeleteTodo(indexTodo)
          }}><h6>Delete</h6></button>

        </div>
    </div>
  )
}