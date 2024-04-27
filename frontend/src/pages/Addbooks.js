import React, { useState } from "react";
import { GlobalStyle, HeadTitle, PageContainer, ContentContainer, FormGroup, Input, Button } from "../components/Styles";
import AdminNavbar from "../components/AdminNavbar";
import FooterBottom from "../components/FooterBottom";

const Addbook = () => {
  const [newBook, setNewBook] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [releasedDate, setReleasedDate] = useState(new Date()); // Use Date for released date
  const [books, setBooks] = useState([]);

  const handleAddBook = () => {
    if (newBook && authorName) { // Check if book and author fields are not empty
      const newEntry = {
        book: newBook,
        author: authorName,
        releasedDate: releasedDate, // Include released date in the new entry
      };
      setBooks([...books, newEntry]);
      setNewBook("");
      setAuthorName("");
      setReleasedDate(new Date()); // Reset released date to the current date
    }
  };

  return (
    <PageContainer>
      <GlobalStyle />
      <AdminNavbar />
      <ContentContainer>
        <HeadTitle style={{ margin: "130px auto 30px", textAlign: "center" }}>
          Add Books
        </HeadTitle>
        <FormGroup style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Input
            type="text"
            value={newBook}
            onChange={(e) => setNewBook(e.target.value)}
            placeholder="Enter a new book"
            style={{ marginBottom: "10px" }}
          />
          <Input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Enter the author's name"
            style={{ marginBottom: "10px" }}
          />
          <Input
            type="date" // Use input type 'date' for released date
            value={releasedDate.toISOString().split('T')[0]} // Format the date for input
            onChange={(e) => setReleasedDate(new Date(e.target.value))}
            style={{ marginBottom: "10px" }}
          />
          <Button onClick={handleAddBook} style={{ marginTop: "10px" }}>
            Add Book
          </Button>
        </FormGroup>
        <ul style={{ textAlign: "center" }}>
          {books.map((entry, index) => (
            <li key={index}>
              <div>Book: {entry.book}, Author: {entry.author}, Released Date: {entry.releasedDate.toISOString().split('T')[0]}</div>
            </li>
          ))}
        </ul>
      </ContentContainer>
      <FooterBottom />
    </PageContainer>
  );
};

export default Addbook;
