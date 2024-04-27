import React from "react";
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
} from "../components/Styles";
import FooterBottom from "../components/FooterBottom";
import Books from "../components/Books";
import AdminNavbar from "../components/AdminNavbar";

const AdminViewBooks = () => {
  return (
    <div>
      <AdminNavbar />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>Books Library</HeadTitle>
          <Books />
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default AdminViewBooks;