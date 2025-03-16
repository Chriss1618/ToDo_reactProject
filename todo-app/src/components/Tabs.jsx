export function Tabs(props){
  
  const {todos, selectedTab, setSelectedTab} = props;
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
            <button onClick={ () => {
              setSelectedTab(tab);
            }} 
            key={indexTab} 
            className={"tab-button" + ( tab === selectedTab ? 'tab-selected' : '')}>
              <h4>{tab}<span>({numTasks})</span></h4>
            </button>
          )
        })
      }

    </nav>
  )
}