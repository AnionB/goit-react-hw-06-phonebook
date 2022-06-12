import { useContacts } from 'redux/contactsSlice';

export default function ContactList() {
  const { contactsArray, filter, delCont } = useContacts();

  const filteredContactList = () =>
    contactsArray.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul>
      {filteredContactList().map(({ id, name, number }) => (
        <li key={id}>
          {name} : {number}
          <button type="button" onClick={() => delCont(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
