import React, { useState } from "react";
import { addBook, updateBook } from "../Redux/Slice/bookSlice";
import { useDispatch } from "react-redux";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    id: Date.now(),
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBook(book));

    setBook({ title: "", description: "", id: Date.now() });
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
      <button type="submit"> Book</button>
    </form>
  );
};

export default AddBook;
