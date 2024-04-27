import React, { useState } from "react";
import axios from "axios";
import ViewSearchResults from "./ViewSearchResults";
import { useNavigate } from "react-router-dom";

import {
  GlobalStyle,
  Navbar,
  NavLinks,
  NavLink,
  NavItem,
  SearchBox,
  RightContainer,
  BrandLogo,
} from "./Styles";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      console.log(searchValue);
      // Make a request to the Google Books API
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: searchValue,
          },
        }
      );

      // Handle the response data here
      console.log(response.data);
      setSearchResults(response.data);

      // Navigate to the SearchResults page with the search results
      navigate("/searchpage", { state: { searchResults: response.data } });

      // Reset the search term
      setSearchValue("");
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Navbar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <BrandLogo src="Logo.png" alt="Library Management System Logo" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <form onSubmit={handleSearch}>
              <SearchBox
                type="text"
                placeholder="Search for Books"
                id="searchInput" // Add a unique id attribute
                name="search" // Add a unique name attribute
                value={searchValue}
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>
        <RightContainer>
          <NavLinks>
            <NavItem>
              <NavLink href="/AdminHome">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Addbooks">Add Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AdminViewBooks">View Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Adminprofile">Profile</NavLink>
            </NavItem>
          </NavLinks>
        </RightContainer>
      </Navbar>
      {searchResults && <ViewSearchResults searchResults={searchResults} />}
    </div>
  );
};

export default AdminNavbar;
