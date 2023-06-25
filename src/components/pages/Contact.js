import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("email is invalid.");
      return;
    }
    setEmail("");

    if (!message) {
      setErrorMessage("message is required.");
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form className="form">
        <p>Name:</p>
        <input value={name} name="name" type="text" />
        <p>Email Address:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
        />
        <p>Message:</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

// blur or change will work for when clicking off field

export default Form;
