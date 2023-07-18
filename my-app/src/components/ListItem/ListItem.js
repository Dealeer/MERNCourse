import './ListItem.css';

const ListItem = props => {
    return <li className='list-item' key={props.item.id}>{props.item.text}</li>
};

export default ListItem;