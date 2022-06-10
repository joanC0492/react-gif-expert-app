import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Alert } from "../Alert";

function AddCategory({ setCategorie }) {
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChangeInput = ({ target: { value } }) => setInputValue(value);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (RegExp("[a-zA-Z0-9]{1,}").test(inputValue)) {
      setCategorie((c) => [inputValue, ...c]);
      setInputValue("");
      setShowAlert(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  }, [showAlert]);

  return (
    <>
      {showAlert && (
        <Alert type="success" message="Item agregado correctamente" />
      )}
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleChangeInput}
        />
      </form>
    </>
  );
}

AddCategory.propTypes = {
  setCategorie: PropTypes.func.isRequired,
};

export { AddCategory };
