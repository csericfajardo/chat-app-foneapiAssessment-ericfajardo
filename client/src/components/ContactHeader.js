import React from 'react';

function ContactHeader({ contact }) {
  return (
    <div>
      <h2>Contact Header</h2>
      <p>Username: {contact.username}</p>
      <p>Avatar: {contact.avatar}</p>
    </div>
  );
}

export default ContactHeader;