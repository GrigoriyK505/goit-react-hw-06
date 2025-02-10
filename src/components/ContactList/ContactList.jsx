import React from 'react';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({contacts, handleDeleteContact}) => {
    return (
        <ul className={s.list}>
            {contacts.map(contact=> (
                <Contact
                    key={contact.id}
                    contact={contact}
                    handleDeleteContact={handleDeleteContact} />
            ))}
        </ul>
    );
}

export default ContactList;