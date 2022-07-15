import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

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

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <div className="List">
        <List contacts={contacts} />
      </div>
      <div className="Form">
        <Form addContact={setContacts} contacts={contacts} />
      </div>
    </div>
  );
}

export default Contacts;
