import React from "react";
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
} from "../components/Styles";
import FooterBottom from "../components/FooterBottom";
import BookCards from "../components/bookcards";
import AdminNavbar from "../components/AdminNavbar";

const AdminHome = () => {
  return (
    <div>
      <AdminNavbar />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>
            Library Management System
          </HeadTitle>
          <BookCards />
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default AdminHome;