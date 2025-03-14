export function Tabs(props){
  
  const {todos} = props;
  const tabs = ['All','Open','Completed'];
  return (
    <nav className="tab-container">
      {
        tabs.map( (tab,indexTab) =>{
          const numTasks = tab === 'All' ? 
            todos.length : 
            tab === 'Open' ? 
              todos.filter(todo => todo.completed === false).length :
              todos.filter(todo => todo.completed === true).length;

          return (
            <button key={indexTab} className="tab-button">
              <h4>{tab}<span>({numTasks})</span></h4>
            </button>
          )
        })
      }

    </nav>
  )
}