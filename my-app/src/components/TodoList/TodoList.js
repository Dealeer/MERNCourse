import './TodoList.css';

import ListItem from '../ListItem/ListItem';

const TodoList = props => {

    const deleteItemHandler = (id) => {
        props.onDeleteItem(id);
    };

    const completeItemHandler = (id) => {
        props.onCompleteItem(id);
    }

    return (
        <ul className='todo-list'>
        {
            props.items.map((item) => {
                if(item.completed === false){
                return (
                    <ListItem title={item.title} description={item.description} liKey={item.id} completion={item.completed} onCompleteClick={completeItemHandler} onDeleteClick={deleteItemHandler} />
                );
                }
            })
        }
        {
            props.items.map((item) => {
                if(item.completed === true){
                return (
                    <ListItem title={item.title} description={item.description} liKey={item.id} completion={item.completed} onCompleteClick={completeItemHandler} onDeleteClick={deleteItemHandler} />
                );
                }
            })
        }
        </ul>
    )
};

export default TodoList;