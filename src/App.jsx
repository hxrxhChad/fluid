import React from "react";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Technology from "./components/Technology/Technology";
import Footer from "./components/Footer/Footer";
import Works from "./components/Works/Works";

const App = () => {
  return (
    <div>
      <Header />
      <Experience />
      <Technology />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
