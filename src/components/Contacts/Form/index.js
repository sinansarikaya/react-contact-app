import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts, filtered }) {
  const [form, setForm] = useState(initialFormValues);
  const [modal, setModal] = useState("");

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <div className="footer">
      <div className={`modal ${modal}`}>
        <i className="fa-solid fa-xmark" onClick={() => setModal("")}></i>
        <form className="form-input" onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="control-label">
              Full name
            </label>
            <input
              type="text"
              id="name"
              className="input-text"
              name="fullname"
              placeholder="Enter a full name"
              value={form.fullname}
              onChange={onChangeInput}
            />
          </div>
          <div className="input-group">
            <label htmlFor="tel" className="control-label">
              Phone Number
            </label>
            <input
              type="text"
              id="tel"
              className="input-text"
              name="phone_number"
              placeholder="Enter a phone number"
              value={form.phone_number}
              onChange={onChangeInput}
            />
          </div>
          <button className="submit">Add New Contact</button>
        </form>
      </div>

      <span className="total">Total contacts: {filtered.length}</span>
      <i className="fa-solid fa-plus" onClick={() => setModal("active")}></i>
    </div>
  );
}

export default Form;
