import React from "react";
import { Button } from "@mui/material";

const MyButton = ({
  label = "OK",
  color = "info",
  onClick,
  variant = "outlined",
  className,
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

export default MyButton;
