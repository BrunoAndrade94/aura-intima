import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import MyButton from "../MyButton";

const DialogNotification = ({
  open,
  onClose,
  title = "Notificação",
  message = "Oi, eu sou um DialogNotification (:",
  dialogColor = "#fff",
  myButtonProps = {},
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
        <MyButton {...myButtonProps} />
      </DialogActions>
    </Dialog>
  );
};

export default DialogNotification;
