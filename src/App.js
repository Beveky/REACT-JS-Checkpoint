import React from "react";
import Header from "./Component/header.js";
import Cards from "./Component/Cards.js";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <h1>Cards</h1>
        <Cards />
      </div>
    </>
  );
};

export default App;
