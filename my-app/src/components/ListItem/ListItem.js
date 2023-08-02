import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleCheck, faPen, faX, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './ListItem.css';

import Button from '../Button/Button';

const ListItem = props => {
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    let statusClass = 'list-item ';
    let completedButtonClass = 'button--green';
    let rotateButtonClass = 'button--rotate';

    if(props.completion === true){
        statusClass += 'list-item--completed';
        completedButtonClass = 'button--orange button--rotate';
    }

    const chevronDown = <FontAwesomeIcon icon={faChevronDown} />
    const circleCheck = <FontAwesomeIcon icon={faCircleCheck} />
    const pen = <FontAwesomeIcon icon={faPen} />
    const xMark = <FontAwesomeIcon icon={faX} />
    const trashCan = <FontAwesomeIcon icon={faTrashCan} />

    const completeClickHandler = (event, key) => {
        event.preventDefault();

        props.onCompleteClick(key);
    };

    const showDetailsHandler = () => {
        setShowDetails(prevValue => !prevValue);
    };

    const updateClickHandler = () => {
        setShowDetails(true);
        setUpdatedTitle(props.title);
        setUpdatedDescription(props.description);
    };

    const cancelUpdate = () => {
        setUpdatedTitle('');
        setUpdatedDescription('');
        setShowDetails(false);
    }

    const updateValuesHandler = (event, key) => {
        event.preventDefault();
        debugger
        let newValues = {
            newTitle: updatedTitle,
            newDescription: updatedDescription
        };

        setUpdatedTitle('');
        setUpdatedDescription('');
        setShowDetails(false);

        props.onUpdateClick(key, newValues);
    };

    const newTitleChangeHandler = event => {
        setUpdatedTitle(event.target.value);
    }
    const newDescriptionChangeHandler = event => {
        setUpdatedDescription(event.target.value);
    }

    const deleteClickHandler = (event, key) => {
        event.preventDefault();
        
        props.onDeleteClick(key);
    };

    return (
        <li className={statusClass} key={props.liKey}>
            <div className='list-item-container'>
                {props.title}

                {updatedTitle ? null : (
                    <Button text={circleCheck} onClickEvt={(e) => completeClickHandler(e, props.liKey)} modifier={completedButtonClass} />
                )}
                {props.completion ? null : (
                <>
                    <Button text={pen} onClickEvt={
                        updatedTitle ? (
                            (e) => updateValuesHandler(e, props.liKey)
                        ) : (
                            () => updateClickHandler()
                        )
                    } modifier={updatedTitle ? completedButtonClass : null} />
                    {updatedTitle ? (
                    <Button text={xMark} onClickEvt={() => cancelUpdate()} modifier='button--red' />
                    ) : (
                    <Button text={chevronDown} onClickEvt={() => showDetailsHandler()} modifier={showDetails ? rotateButtonClass : null} />
                    )}
                </>
                )}

                <Button text={trashCan} onClickEvt={(e) => deleteClickHandler(e, props.liKey)} modifier='button--red' />
            </div>
            <div className='list-item-description'>
                {showDetails ? (
                    updatedTitle ? (
                        <form onSubmit={(e) => updateValuesHandler(e, props.liKey)}>
                            <label htmlFor='updateTitle'>Edite a tarefa:</label>
                            <br />
                            <input type='text' id='updateTitle' value={updatedTitle} onChange={newTitleChangeHandler} />
                            <br />
                            <textarea cols='70' rows='3' value={updatedDescription} onChange={newDescriptionChangeHandler} />
                        </form>
                    ) : (
                        props.description
                    )
                ) : null}
            </div>
        </li>
    );
};

export default ListItem;