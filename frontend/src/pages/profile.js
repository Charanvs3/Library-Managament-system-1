import React from "react";
import { HeadTitle } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import {  Button } from "../components/Styles";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Create a Card component
const Card = ({ profile }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    width: "400px",
  };

  return (
    <div style={cardStyle}>
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Phone Number:</strong> {profile.phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
    </div>
  );
};

const Profile = () => {
  const profile = {
    name: "Shiva",
    phoneNumber: "1234567890",
    email: "shiva@gmail.com",
  };

  const navigate = useNavigate(); // Get the navigate function

  return (
    <div>
      <NavbarHead />
      <HeadTitle style={{ marginTop: "130px" }}>
        Profile page
      </HeadTitle>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <Card profile={profile} />
        <Button
          style={{ marginTop: "20px" }}
          type="button"
          onClick={() => navigate('/')}
        >
          Logout
        </Button>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Profile;
