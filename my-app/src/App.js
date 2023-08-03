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

  const updateItemHandler = (itemToUpdate, newValues) => {
    let updatedTask = listItems.map(item => {
      if (item.id === itemToUpdate){
        return ({ ...item,  title: newValues.newTitle, description: newValues.newDescription})
      }
      return item;
    });

    setListItems(prevListItems => {
      prevListItems = updatedTask;
      return prevListItems;
    });
  };

  const reorderItemHandler = ({source, destination}) => {
    const reorderedList = [...listItems];

    const [removedItem] = reorderedList.splice(source.index, 1);
    reorderedList.splice(destination.index, 0, removedItem);

    return setListItems(reorderedList);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Lista de Tarefas
        </h1>
      </header>
      <h2>Adicionar tarefa</h2>
      <NewItem onAddItem={addNewItemHandler} nextObjId={parseInt(listItems[listItems.length-1].id)} />
      <h2>Sua lista:</h2>
      <TodoList items={listItems} onDeleteItem={removeItemHandler} onCompleteItem={completeItemHandler} onUpdateItem={updateItemHandler} onReorderItem={reorderItemHandler} />
    </div>
  );
}

export default App;
