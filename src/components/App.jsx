import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
 const [newContacts, setNewContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  }, [newContacts]);


  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setNewContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setNewContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };

  const filterContacts = newContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <SearchBox handleSearchChange={handleSearchChange} value={searchItem} />
      <ContactForm handleAddContact={handleAddContact} />
      <ContactList contacts={filterContacts} handleDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
