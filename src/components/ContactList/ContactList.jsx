import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="list-disc pl-5">
    {contacts.map(contact => (
      <ContactListItem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;
