import './TodoList.css';

import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button';

const TodoList = props => {

    const deleteItemHandler = event => {
        event.preventDefault();
        debugger
        
        let checkedItems = []
        props.items.map((item) => {
            if(document.querySelector('.'+item.id+'Check').checked){
                checkedItems.push(item.id);
            }
        });

        props.onDeleteItem(checkedItems);
    };

    return (
        <ul className='todo-list'>
        {
            props.items.map((item) => {
                return (
                    <li className='list-item' key={item.id}>{item.text}<input type='checkbox' className={`${item.id}Check`}></input></li>
                );
            })
        }
        <button onClick={deleteItemHandler}>Delete Items</button>
        </ul>
    )
};

export default TodoList;