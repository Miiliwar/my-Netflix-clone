import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header"; 
import Banner from "./components/Banner/Banner";
import DisplyRow from "./components/DisplyRow/DisplyRow";
import Footer from "./components/Footer/Footer";

// 1. Import the movies array
// import { movies } from "./Data/Data.js";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DisplyRow />
      <Footer />
    </>
  );
}

export default App;
