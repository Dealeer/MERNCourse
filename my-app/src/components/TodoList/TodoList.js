import './TodoList.css';

import ListItem from '../ListItem/ListItem';

const TodoList = props => {

    const deleteItemHandler = (id, newValues) => {
        props.onDeleteItem(id, newValues);
    };

    const completeItemHandler = (id) => {
        props.onCompleteItem(id);
    }

    const updateItemHandler = (id, newValues) => {
        props.onUpdateItem(id, newValues);
    }

    return (
        <ul className='todo-list'>
        {
            props.items.map((item) => {
                if(item.completed === false){
                return (
                    <ListItem title={item.title} description={item.description} liKey={item.id} completion={item.completed} onCompleteClick={completeItemHandler} onDeleteClick={deleteItemHandler} onUpdateClick={updateItemHandler} />
                );
                }
            })
        }
        {
            props.items.map((item) => {
                if(item.completed === true){
                return (
                    <ListItem title={item.title} description={item.description} liKey={item.id} completion={item.completed} onCompleteClick={completeItemHandler} onDeleteClick={deleteItemHandler} onUpdateClick={updateItemHandler} />
                );
                }
            })
        }
        </ul>
    )
};

export default TodoList;