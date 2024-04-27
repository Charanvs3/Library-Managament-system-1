import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Login from "./pages/user_login";
import Signup from "./pages/user_signup";
import ViewBooks from "./pages/ViewBooks";
import Borrow from "./pages/borrow_books";
import SearchPage from "./pages/search_page";
import Profile from "./pages/profile";
import InitialPage from "./pages/Inital_page";
import AdminLogin from "./pages/admin_user";
import AdminHome from "./pages/AdminHome";
import Addbooks from "./pages/Addbooks";
import AdminViewBooks from "./pages/AdminviewBook";
import { BorrowListButton } from "./components/Styles";
import Addbook from "./pages/Addbooks";
import Adminprofile from "./pages/adminprofile";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/userlogin" element={<Login />} />
          <Route path="/AdminViewBooks" element={<AdminViewBooks />} />
          <Route path="/Addbooks" element={<Addbook />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/Adminlogin" element={<AdminLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/Adminprofile" element={<Adminprofile/>} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/viewBooks" element={<ViewBooks />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/borrowbooks" element={<Borrow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;