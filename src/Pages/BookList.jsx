import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../Redux/Slice/bookSlice";
import { Link, Navigate } from "react-router-dom";

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.bookReducer);
  return (
    <>
      <Container>
        {books?.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((book, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.description}</td>
                  <td>
                    <Link className="btn" to={`/update/${book.id}}`}>
                      <i class="fa-solid fa-pen-to-square text-info"></i>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => dispatch(deleteBook(book?.id))}
                    >
                      <i class="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h1>No Books Are Here</h1>
        )}
      </Container>
    </>
  );
}

export default BookList;
