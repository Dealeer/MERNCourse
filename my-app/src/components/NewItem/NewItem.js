import { useState } from "react";

import "./NewItem.css";
import Button from "../Button/Button";

const NewItem = props => {
    let [enteredText, setEnteredText] = useState('');
    let [warningText, setWarningText] = useState('');
    
    const addItemHandler = event => {
        event.preventDefault();

        if(enteredText !== ''){
            console.log(props.listLength);
            const newItem = {
                id: "li"+(props.listLength+1),
                text: enteredText
            }

            setEnteredText('');
            setWarningText('');

            props.onAddItem(newItem);
        } else {
            setWarningText("Can't add a empty task.");
        }
    };

    const buttonProps = {type: 'submit', text: 'Add Item'};

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="new-item" onSubmit={addItemHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <Button btnProps={buttonProps} />
            <span className="warning-text">{warningText}</span>
        </form>
    );
};

export default NewItem;