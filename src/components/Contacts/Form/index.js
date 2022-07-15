import { useState } from "react";

function Form() {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log(form);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="input"
        name="fullName"
        placeholder="Enter a Full Name"
        onChange={onChangeInput}
      />
      <input
        className="input"
        name="phone_number"
        placeholder="Enter a Phone Number"
        onChange={onChangeInput}
      />
      <button className="button">Add New Contact</button>
    </form>
  );
}

export default Form;
