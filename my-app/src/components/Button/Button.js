import './Button.css';

const Button = props => {
    return (
        <button className={'button '+props.modifier} type={props.type} onClick={props.onClickEvt}>{props.text}</button>
    );
};

export default Button;