import { useState } from "react";

import React from "react";
import "./App.css";
import Social from "./components/Social";
import Alert from "./components/Alert";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });
  return (
    <div id="container">
      <Social />
      <Alert alert={alert} />
      <div className="App">
        <Contacts setAlert={setAlert} alert={alert} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
