import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',  
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      
    },
    deleteBook: (state, action) => {
      console.log(action.payload.id,"id");
      
      state.books = state.books.filter(book => book.id !== action.payload);
      console.log(state.books,"books");
      
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index >= 0) {
        state.books[index] = action.payload;
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
