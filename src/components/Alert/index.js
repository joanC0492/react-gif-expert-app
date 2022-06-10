import React from "react";
import Proptypes from "prop-types";

function Alert({ type, message }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
}

Alert.propTypes = {
  type: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
};

export { Alert };
