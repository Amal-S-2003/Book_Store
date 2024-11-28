import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../Redux/Slice/bookSlice';

const AddBook = ({ currentBook, setEditing }) => {
  const [book, setBook] = useState(currentBook || { title: '', description: '', id: Date.now() });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      dispatch(updateBook(book));
      setEditing(false);
    } else {
      dispatch(addBook(book));
    }
    setBook({ title: '', description: '', id: Date.now() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        placeholder="Book Title"
        required
      />
      <input
        type="text"
        value={book.description}
        onChange={(e) => setBook({ ...book, description: e.target.value })}
        placeholder="BOOK Description"
        required
      />
      <button type="submit">{currentBook ? 'Update' : 'Add'} Book</button>
    </form>
  );
};

export default AddBook;
