import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const MyButton = ({
  label = "Confirmar",
  color = "primary",
  onClick,
  variant = "contained",
  className = "",
}) => {
  return (
    <Button
      className={className}
      color={color}
      variant={variant}
      onClick={onClick}
      style={{ borderRadius: "50px" }}
    >
      <span className="my-button-label">{label}</span>
    </Button>
  );
};

// Definindo os tipos das props usando PropTypes
MyButton.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  className: PropTypes.string,
};

// MyButton.defaultProps = {
//   label: "Confirmar",
//   color: "primary",
//   variant: "contained",
// };

export default MyButton;
