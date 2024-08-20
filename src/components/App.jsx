import React, { useState, useEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Toaster, toast } from 'react-hot-toast';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const idCounter = useRef(0);


  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    if (savedContacts.length > 0) {
      setContacts(savedContacts);
      idCounter.current = savedContacts.length;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      toast.error('Contact already exists');
      return;
    }
    const newContact = { id: idCounter.current++, name, number };
    setContacts([...contacts, newContact]);
    toast.success('Contact added successfully');
  };

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    toast.success('Contact deleted successfully');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 className="text-xl font-semibold mt-6 mb-4">Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;