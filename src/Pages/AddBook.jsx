import React, { useState } from "react";
import { addBook, updateBook } from "../Redux/Slice/bookSlice";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

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
    alert("Book Successfully added");
    setBook({ title: "", description: "", id: Date.now() });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center ">
      <form
        onSubmit={handleSubmit}
        className="mt-5 shadow p-5 d-flex flex-column gap-3"
      >
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
          placeholder="Book Description"
          required
        />
        <button type="submit" className="btn btn-success">
          {" "}
          Add Book
        </button>
      </form>
    </Container>
  );
};

export default AddBook;
