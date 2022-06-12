import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';
export const increment = createAction('contacts/increment');
export const decrement = createAction('contacts/decrement');
export const filterChange = createAction('contacts/filterChange');

const contactsReducer = createReducer(
  { items: [], filter: '' },
  {
    [increment]: (state, action) => {
      return {
        items: [...state.items, action.payload],
        filter: state.filter,
      };
    },
    [decrement]: (state, action) => {
      return {
        items: [
          ...state.items.filter(contact => contact.id !== action.payload),
        ],
        filter: state.filter,
      };
    },
    [filterChange]: (state, action) => {
      return {
        items: [...state.items],
        filter: action.payload,
      };
    },
  }
);

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
