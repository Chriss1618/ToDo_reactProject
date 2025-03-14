
import {Header} from './components/Header'
import {Tabs} from './components/Tabs'
import {TodoCard} from './components/TodoCard'
import {TodoInput} from './components/TodoInput'
import {TodoList} from './components/TodoList'

function App() {

  //variables
  const todos = [
    {input: 'Wash yout hands',completed: false},
    {input: 'Clean the dishes',completed: true},
    {input: 'Do groceries', completed: false},
  ]
  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>

      <TodoList todos={todos}/>
      
    </>
  )
}

export default App
