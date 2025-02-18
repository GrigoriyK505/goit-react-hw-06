import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filters = useSelector(state => state.filters.name);
    const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filters.toLowerCase()));
    return (
        <ul className={s.list}>
            {filteredData.map(item => (
                <Contact
                    key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default ContactList;