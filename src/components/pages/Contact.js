import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    console.log("hic");
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    console.log({ inputType, inputValue });
    // console.log({ nameBoolean: !Boolean(name.length) });

    if (inputType === "email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("email is invalid.");
      } else {
        setErrorMessage("");
      }
      setEmail(inputValue);
    } else if (inputType === "name") {
      if (inputValue.length > 0) {
        setErrorMessage("name is required.");
      } else {
        setErrorMessage("");
      }
      setName(inputValue);
    } else if (inputType === "message") {
      if (inputValue.length > 0) {
        setErrorMessage("message is required.");
      } else {
        setErrorMessage("");
      }
      setMessage(inputValue);
    } else {
      // In case add more fields in the future
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Contact</h1>
      <form className="form">
        <p>Name:</p>
        <input name="name" type="text" onBlur={handleInputChange} />
        <p>Email Address:</p>
        <input name="email" onBlur={handleInputChange} type="email" />
        <p>Message:</p>
        <textarea name="message" onBlur={handleInputChange} type="text" />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text" style={{ color: "red" }}>
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}

// blur or change will work for when clicking off field

export default Form;
