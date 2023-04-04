import React from 'react';

function ContactList({ contacts, activeContactId, onContactSelect }) {
    return (
    <div>
    <h2>Contact List</h2>
    <ul>
    {contacts.map((contact) => (
    <li key={contact.id} className={contact.id === activeContactId ? 'active' : ''}>
    <button onClick={() => onContactSelect(contact.id)}>{contact.username}</button>
    </li>
    ))}
    </ul>
    </div>
    );
    }
    
    export default ContactList;