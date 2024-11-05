import React from "react";
import MyButton from "../MyButton";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const DialogNotification = ({
  open,
  onClose,
  title = "Notificação",
  message = "Oi, eu sou um DialogNotification (:",
  dialogColor = "#fff",
  buttonProps = {},
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { backgroundColor: dialogColor } }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <MyButton {...buttonProps} />
      </DialogActions>
    </Dialog>
  );
};

DialogNotification.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  dialogColor: PropTypes.string,
  buttonProps: PropTypes.object,
};

export default DialogNotification;
