import './Button.css';

const Button = props => {
    const liId = props.btnProps.liId;
    return (
        <button className='button' type={`${props.btnProps.type}`}>{props.btnProps.text}</button>
    );
};

export default Button;