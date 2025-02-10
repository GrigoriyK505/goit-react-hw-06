import React from 'react'
import s from './Contact.module.css'
const Contact = ({ contact, handleDeleteContact}) => {
    return (
        <li className={s.item}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={() => handleDeleteContact(contact.id)} className={s.button}>Delete</button>
        </li>
    );
};

export default Contact;
