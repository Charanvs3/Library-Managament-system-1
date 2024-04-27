import React from "react";
import { GlobalStyle, HeadTitle } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import {
  Card,
  CardBody,
  CardImage,
  CardName,
  CardDescription,
} from "../components/Styles";
import book17 from "../images/the-collected-regrets-of-clover-book.png";
import book5 from "../images/essex-dogs-book.png";
import book4 from "../images/maame-book.png";
import book7 from"../images/a-death-at-the-party-book.png";


const Borrow = () => {
  return (
    <div>
      <GlobalStyle />
      <NavbarHead />
      <HeadTitle style={{ marginTop: "130px" }}>Your Borrowed Books</HeadTitle>
      <Card>
            <CardImage src={book4} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>MAAME</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book7} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName> A Death at the Party</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
            </CardBody>
          </Card>
      <Card>
        <CardImage src={book17} alt="The Collected Regrets of Clover by Mikki Brammer" />
        <CardBody>
          <CardName>The Collected Regrets of Clover</CardName>
          <CardDescription>The Collected Regrets of Clover by Mikki Brammer.</CardDescription>
        </CardBody>
      </Card>
      <Card>
            <CardImage src={book5} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>Essex Dogs</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
            </CardBody>
          </Card>
         
      <FooterBottom />
    </div>
  );
};

export default Borrow;
