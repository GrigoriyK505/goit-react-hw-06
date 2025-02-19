import s from './Contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';



const Contact = ({item}) => {
    const dispatch = useDispatch();
    return (
        <li className={s.item}>
            <p>{item.name}: {item.number}</p>
            <button onClick={() => dispatch(deleteContact(item.id))} className={s.button}>Delete</button>
        </li>
    );
};

export default Contact;
