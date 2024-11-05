import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setInputValue } from "../../../redux/features/input/inputSlice";
import { Button } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { flagNotification } from "../../../redux/features/notification/notificationSlice";

const SearchBox = (props) => {
  const [inputLocal, setInputLocal] = useState("");
  const dispatch = useDispatch();

  const enviarInputLocal = () => {
    dispatch(setInputValue(inputLocal));
  };

  const openNotification = () => {
    dispatch(flagNotification());
  };

  return (
    <div className={"headerSearch " + `${props.className}`}>
      <input
        type="text"
        value={inputLocal}
        placeholder={props.placeHolder}
        onChange={(evento) => setInputLocal(evento.target.value)}
      />
      <Button onClick={openNotification}>
        <IoSearchOutline />
      </Button>
    </div>
  );
};

SearchBox.propTypes = {
  className: PropTypes.string,
  placeHolder: PropTypes.string,
};

export default SearchBox;
