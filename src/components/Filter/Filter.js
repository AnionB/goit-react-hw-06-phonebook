import { useContacts } from 'redux/contactsSlice';

export default function Filter() {
  const { filtrChange } = useContacts();
  return (
    <>
      <p>Find contact by name</p>
      <input
        onChange={e => filtrChange(e.target.value)}
        type="text"
        name="filter"
      />
    </>
  );
}
