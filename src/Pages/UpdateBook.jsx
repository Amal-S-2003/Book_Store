import React, { useState } from "react";
import { updateBook } from "../Redux/Slice/bookSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function UpdateBook() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const { books } = useSelector((state) => state.bookReducer);
  const currentBook = books.find((book) => book.id == id.slice(0, 13));
  if (currentBook) {
    setBook(currentBook)
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
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit"> Book</button>
      </form>
    </div>
  );
}

export default UpdateBook;
