import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    increment: (state, action) => {
      state.items.push(action.payload);
    },
    decrement: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const { increment, decrement, filterChange } = contactSlice.actions;

export const useContacts = () => {
  const contactsArray = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const filtrChange = value => dispatch(filterChange(value));
  const addCont = value => dispatch(increment(value));
  const delCont = id => dispatch(decrement(id));

  return {
    filtrChange,
    contactsArray,
    addCont,
    filter,
    delCont,
  };
};

export const contactsReducer = contactSlice.reducer;
