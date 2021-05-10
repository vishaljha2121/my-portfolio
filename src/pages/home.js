import React from "react";
import "../../src/App.css";
import Cards from "../componets/cards";
import Herosection from "../componets/herosection";
import Footer from "../componets/footer";

function Home() {
  return (
    <>
      <Herosection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
