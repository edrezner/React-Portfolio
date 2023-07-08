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
      if (!inputValue.length) {
        setErrorMessage("name is required.");
      } else {
        setErrorMessage("");
      }
      setName(inputValue);
    } else if (inputType === "message") {
      if (!inputValue.length) {
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
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName("message")[0].value = "";
  };

  return (
    <div className="page-div">
      <h1 className="page-h1">Contact</h1>
      <form className="form">
        <p>Name:</p>
        <input name="name" type="text" onBlur={handleInputChange} />
        <p>Email Address:</p>
        <input name="email" onBlur={handleInputChange} type="email" />
        <p>Message:</p>
        <textarea
          name="message"
          style={{ height: "5vw", width: "20vw" }}
          onBlur={handleInputChange}
          type="text"
        />
        <button
          type="button"
          style={{ display: "block" }}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text" style={{ color: "#82ddf0" }}>
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}

// blur or change will work for when clicking off field

export default Form;
