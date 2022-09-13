import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";
import Search from "./Search";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Sinan Sarikaya",
      phone_number: "123123",
    },
    {
      fullname: "Mehmet Ates",
      phone_number: "233445",
    },
  ]);
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="content">
      <div id="Search">
        <h1 className="appTitle">Contact App</h1>
        <Search
          contacts={contacts}
          filterText={filterText}
          setFilterText={setFilterText}
        />
      </div>
      <div id="List">
        <List contacts={contacts} filtered={filtered} />
      </div>
      <div id="Form">
        <Form
          addContact={setContacts}
          contacts={contacts}
          filtered={filtered}
        />
      </div>
    </div>
  );
}

export default Contacts;
