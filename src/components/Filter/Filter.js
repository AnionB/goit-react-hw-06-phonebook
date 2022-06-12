import { useDispatch } from 'react-redux';
import { filterChange } from 'components/Redux/Redux';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contact by name</p>
      <input
        onChange={e => dispatch(filterChange(e.target.value))}
        type="text"
        name="filter"
      />
    </>
  );
}
