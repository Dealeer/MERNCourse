import { useState } from "react";

import "./NewItem.css";
import Button from "../Button/Button";

const NewItem = props => {
    let [enteredTitle, setEnteredTitle] = useState('');
    let [enteredDescription, setEnteredDescription] = useState('');
    let [warningText, setWarningText] = useState('');
    
    const addItemHandler = event => {
        event.preventDefault();

        if(enteredTitle !== ''){
            const newItem = {
                id: props.nextObjId+1,
                title: enteredTitle,
                description: enteredDescription,
                completed: false
            }

            setEnteredTitle('');
            setEnteredDescription('');
            setWarningText('');

            props.onAddItem(newItem);
        } else {
            setWarningText("Preencha o campo 'título'.");
        }
    };

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    }
    const descriptionChangeHandler = event => {
        setEnteredDescription(event.target.value);
    }

    return (
        <form className="new-item" onSubmit={addItemHandler}>
            <div>
                <label htmlFor="title">Título: </label>
                <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div>
                <label htmlFor="description">Descrição: </label>
                <textarea id="description" value={enteredDescription} onChange={descriptionChangeHandler} />
            </div>
            <div>
                <Button type='submit' text='Add Item' />
                <span className="warning-text">{warningText}</span>
            </div>
        </form>
    );
};

export default NewItem;