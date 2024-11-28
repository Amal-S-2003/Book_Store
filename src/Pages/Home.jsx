import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";


function Home() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.bookReducer);

  
  return (
    <>
      <Container className="mt-5">
        <Row >
          
        { 
        books?.length>0?books.map((book)=>
        <Col sm={12} lg={3} gap={2}>
            <Card style={{ width: "18rem" ,padding:"30px"}}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg" />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  {book.description}
                </Card.Text>
                <Button variant="primary">Read Book</Button>
              </Card.Body>
            </Card>
          </Col>
          ):"Nothing to display"}
        </Row>
      </Container>
    </>
  );
}

export default Home;
