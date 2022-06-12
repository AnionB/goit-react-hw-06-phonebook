import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { increment, getContacts } from 'components/Redux/Redux';

export default function ContactForm() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const contactsArray = useSelector(getContacts);
  const dispatch = useDispatch();

  function addContact(contact) {
    if (
      contactsArray.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(contact.name + ' is already in contact');
      return;
    }
    dispatch(
      increment({
        id: nanoid(),
        name,
        number,
      })
    );
  }

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log(e.target.name);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({
      id: nanoid(),
      name,
      number,
    });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p>Number</p>
      <input
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
}
