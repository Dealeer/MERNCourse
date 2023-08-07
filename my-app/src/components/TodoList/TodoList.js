import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import './TodoList.css';

import ListItem from '../ListItem/ListItem';

const TodoList = props => {

    const deleteItemHandler = (id, newValues) => {
        props.onDeleteItem(id, newValues);
    };

    const completeItemHandler = (id) => {
        props.onCompleteItem(id);
    };

    const updateItemHandler = (id, newValues) => {
        props.onUpdateItem(id, newValues);
    };

    const dragDropHandler = (results) => {
        const {source, destination} = results;

        if(!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        props.onReorderItem({source, destination});
    };

    return (
        <DragDropContext onDragEnd={dragDropHandler}>
            <Droppable droppableId="undone-todo-list">
                {(provided) => (
                    <ul className='todo-list' {...provided.droppableProps} ref={provided.innerRef}>
                        {props.items.map((item, index) => {
                            if(item.completed === false){
                                return (
                                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <ListItem title={item.title} description={item.description} liKey={item.id} completion={item.completed} onCompleteClick={completeItemHandler} onDeleteClick={deleteItemHandler} onUpdateClick={updateItemHandler} />
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            }
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
            <p>Tarefas concluídas:</p>
            <Droppable droppableId="done-todo-list">
                {(provided) => (
                    <ul className='todo-list' {...provided.droppableProps} ref={provided.innerRef}>
                        {props.items.map((item, index) => {
                            if(item.completed === true){
                                return (
                                    // <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                    //     {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <ListItem title={item.title} description={item.description} liKey={item.id} completion={item.completed} onCompleteClick={completeItemHandler} onDeleteClick={deleteItemHandler} onUpdateClick={updateItemHandler} />
                                            </div>
                                    //     )}
                                    // </Draggable>
                                );
                            }
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
        )
};

export default TodoList;