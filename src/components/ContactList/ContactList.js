import { useSelector, useDispatch } from 'react-redux';
import { decrement } from 'components/Redux/Redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
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
