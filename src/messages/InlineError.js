import React from "react";
import Proptypes from "prop-types";

const IinlineError = ({ text }) => (
  <span style={{color:"#ae5856"}}>
    {text}
  </span>
);

IinlineError.propTypes = {
  text: Proptypes.string.isRequired
};

export default IinlineError;