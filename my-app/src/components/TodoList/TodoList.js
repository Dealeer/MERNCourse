import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

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
        <DragDropContext onDragEnd={() => {
            console.log("Drag Drop event trigger")
        }}>
                <ul className='todo-list'>
                <Droppable droppableId="ROOT" type="group">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                props.items.map((item, index) => {
                                    if(item.completed === false){
                                        return (
                                            <Draggable draggableId={item.id} key={item.id} index={index}>
                                                {(provided) => (
                                                    <ListItem title={item.title} description={item.description} liKey={item.id} completion={item.completed} onCompleteClick={completeItemHandler} onDeleteClick={deleteItemHandler} onUpdateClick={updateItemHandler} />
                                                )}
                                            </Draggable>
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
                        </div>
                    )}
                </Droppable>
                </ul>
        </DragDropContext>
    )
};

export default TodoList;