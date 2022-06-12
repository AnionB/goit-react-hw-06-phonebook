import { useSelector, useDispatch } from 'react-redux';
import { decrement, getContacts, getFilter } from 'components/Redux/Redux';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContactList = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul>
      {filteredContactList().map(({ id, name, number }) => (
        <li key={id}>
          {name} : {number}
          <button type="button" onClick={() => dispatch(decrement(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
