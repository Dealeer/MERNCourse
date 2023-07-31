import { useState } from "react";
import './App.css';

import TodoList from './components/TodoList/TodoList';
import NewItem from './components/NewItem/NewItem';

function App() {
  const [listItems, setListItems] = useState([
    {id: 1, title: 'Finish the Course', description: 'Certificados são legais. Complete essa tarefa e pegue o seu!', completed: false},
    {id: 2, title: 'Learn all about the Course Main Topics', description: 'Se não aprender, você perdeu seu tempo...', completed: false},
    {id: 3, title: 'Help other students in the Course Q&A', description: 'Ajudar os coleguinhas é importante e pode nos trazer muito aprendizado. Entre no fórum e faça acontecer!!', completed: false}
  ]);
  
  const addNewItemHandler = (newItem) => {
    // setListItems(listItems.concat(newItem));
    
    // setListItems((prevListItems) => {
    //   return prevListItems.concat(newItem);
    // });
    
    setListItems(prevListItems => prevListItems.concat(newItem));
  };

  const completeItemHandler = (itemToComplete) => {
    let updatedTask = listItems.map(item => {
      if (item.id === itemToComplete){
        return ({ ...item, completed: !item.completed })
      }
      return item;
    });
    
    setListItems(prevListItems => {
      prevListItems = updatedTask;
      return prevListItems;
    });
  };

  const removeItemHandler = (itemToDelete) => {
    setListItems(prevListItems => prevListItems.filter((listItem) => listItem.id !== itemToDelete));
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          App brabo
        </h1>
      </header>
      <h2>To-do List</h2>
      <NewItem onAddItem={addNewItemHandler} nextObjId={parseInt(listItems[listItems.length-1].id)} />
      <TodoList items={listItems} onDeleteItem={removeItemHandler} onCompleteItem={completeItemHandler} />
    </div>
  );
}

export default App;
