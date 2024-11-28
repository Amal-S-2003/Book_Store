import React, { useEffect, useState } from "react";
import { updateBook } from "../Redux/Slice/bookSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

function UpdateBook() {
    const dispatch = useDispatch();

  const [book, setBook] = useState({});
  const { id } = useParams();
  const { books } = useSelector((state) => state.bookReducer);
  const currentBook = books.find((book) => book.id == id.slice(0, 13));
  useEffect(() => {
    
  
      setBook(currentBook)
  }, [1]);
  if (currentBook) {
    
    // setBook(currentBook)
    console.log(currentBook);
    
    // setBook({
    //   title: currentBook.title,
    //   description: currentBook.description,
    //   id: currentBook.id,
    // });
  } else {
    console.log("no book");
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateBook(book));
    alert("Book Updated");
  };
  return (
    <Container className="d-flex align-items-center justify-content-center ">
      <form onSubmit={handleSubmit} className="mt-5 shadow p-5 d-flex flex-column gap-3">
        <input
          type="text"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />
        <input
          type="text"
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-info"> Update</button>
      </form>
    </Container>
  );
}

export default UpdateBook;
