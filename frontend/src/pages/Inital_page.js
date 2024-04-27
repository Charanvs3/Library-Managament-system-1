import React from "react";
import { useNavigate } from "react-router-dom";
import { HeadTitle, PageContainer, ContentContainer, Button } from "../components/Styles";
import BACKGROUND from "../images/bg.png";

const InitialPage = () => {
  const navigate = useNavigate(); 

  const handleAdminLogin = () => {
    navigate('/Adminlogin'); 
  };

  const handleUserLogin = () => {
    navigate('/userlogin'); 
  };

  const pageStyle = {
    background: `url(${BACKGROUND}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh", 
  };

  return (
    <div>
      <PageContainer style={pageStyle}>
        <ContentContainer style={{ marginTop: "170px" }}>
          <HeadTitle style={{ color: "GREEN", fontSize: "36px" }}>
            LIBRARY MANAGEMENT SYSTEM
          </HeadTitle>
          <form style={{ marginTop: "50px", marginLeft: "550px" }}>
            <Button
              style={{ marginLeft: "115px", marginTop: "50px" }}
              type="button"
              onClick={handleAdminLogin}
            >
              Admin Login
            </Button>
            <Button
              style={{ marginLeft: "120px", marginTop: "50px" }}
              type="button"
              onClick={handleUserLogin}
            >
              User Login
            </Button>
          </form>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default InitialPage;
