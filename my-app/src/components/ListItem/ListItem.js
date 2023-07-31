import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './ListItem.css';

import Button from '../Button/Button';

const ListItem = props => {
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
    const trashCan = <FontAwesomeIcon icon={faTrashCan} />

    const completeClickHandler = (event, key) => {
        event.preventDefault();

        props.onCompleteClick(key);
    };

    const showDetalsHandler = (event, key) => {
        setShowDetails(prevValue => !prevValue);
    }

    const updateClickHandler = (event, key) => {
        event.preventDefault();

        props.onCompleteClick(key);
    };

    const deleteClickHandler = (event, key) => {
        event.preventDefault();
        
        props.onDeleteClick(key);
    };

    return (
        <li className={statusClass} key={props.liKey}>
            <div className='list-item-container'>
                {props.title}
                <Button text={circleCheck} onClickEvt={(e) => completeClickHandler(e, props.liKey)} modifier={completedButtonClass} />
                
                {props.completion ? null : (
                <>
                    <Button text={chevronDown} onClickEvt={(e) => showDetalsHandler(e, props.liKey)} modifier={showDetails ? rotateButtonClass : null} />
                    <Button text={pen} onClickEvt={(e) => updateClickHandler(e, props.liKey)} />
                </>
                )}

                <Button text={trashCan} onClickEvt={(e) => deleteClickHandler(e, props.liKey)} modifier='button--red' />
            </div>
            <div className='list-item-description'>
                {showDetails ? props.description : null}
            </div>
        </li>
    );
};

export default ListItem;