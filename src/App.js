import React from "react";
import "./App.css";
import List from "./components/Contacts/List";
import Form from "./components/Contacts/Form";

function App() {
  return (
    <div className="App">
      <div className="List">
        <List />
      </div>
      <div className="Form">
        <Form />
      </div>
    </div>
  );
}

export default App;
