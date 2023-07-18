import { useState } from "react";
import './App.css';

import TodoList from './components/TodoList/TodoList';
import NewItem from './components/NewItem/NewItem';

function App() {
  const [listItems, setListItems] = useState([
    {id: 'li1', text: 'Finish the Course'},
    {id: 'li2', text: 'Learn all about the Course Main Topics'},
    {id: 'li3', text: 'Help other students in the Course Q&A'}
  ]);

  const addNewItemHandler = (newItem) => {
    // setListItems(listItems.concat(newItem));
    
    // setListItems((prevListItems) => {
    //   return prevListItems.concat(newItem);
    // });
    
    setListItems(prevListItems => prevListItems.concat(newItem));
    console.log(listItems);
  }

  const removeItemHandler = (itemsToDelete) => {
    debugger
    itemsToDelete.forEach(itemToDelete => {
      let arrayIndex = parseInt(itemToDelete.substr(2, 3));
      setListItems(prevListItems => prevListItems.splice(arrayIndex, arrayIndex));
    });

    if(listItems == null){
      setListItems({id: 'li0', text: 'Your list is empty!'});
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          App brabo
        </h1>
      </header>
      <h2>To-do List</h2>
      <NewItem onAddItem={addNewItemHandler} listLength={listItems.length} />
      <TodoList items={listItems} onDeleteItem={removeItemHandler} />
    </div>
  );
}

export default App;
