
import {Header} from './components/Header'
import {Tabs} from './components/Tabs'
import {TodoCard} from './components/TodoCard'
import {TodoInput} from './components/TodoInput'
import {TodoList} from './components/TodoList'
import {useState, useEffect} from 'react'

function App() {
  //variables 

  /* 
  [
    {input: 'Wash yout hands',completed: false},
    {input: 'Clean the dishes',completed: true},
    {input: 'Do groceries', completed: false},
  ]
  */
  const [todos,setTodos] = useState( [])

  const [selectedTab, setSelectedTab] = useState( 'All')
  
  function handleAddTodo( newTodo ){
    const newTodosList = [...todos, {input: newTodo, completed: false}]
    setTodos(newTodosList)
    handleSaveData(newTodosList)
  }
  
  function handleCompleteTodo(index){
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo.completed = true
    newTodoList[index] = completedTodo
    
    setTodos(newTodoList)

    handleSaveData(newTodosList)
  }

  function handleDeleteTodo(index){
    let newTodosList = todos.filter( (todo,todoIndex) => {
      return todoIndex !== index
    })

    setTodos(newTodosList)

    handleSaveData(newTodosList)
  }


  function handleSaveData(currTodos){
    localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
  }

  useEffect( () => {
    if(!localStorage || !localStorage.getItem('todo-app')) return ;
    let db = []

    db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)

  }, [])


  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}  todos={todos}/>

      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
