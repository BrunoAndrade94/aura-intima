import { Button } from "@mui/material";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { LOCALIZACAO, SUA_LOCALIZACAO } from "../../../assets/var-const";
import { flagDialogCEP } from "../../../redux/features/dialog/dialogSlice";
import DialogCEP from "../DialogCEP";

const SearchCEP = () => {
  const [isOpenDialog, setIsOpenDialog] = useState();
  const dispatch = useDispatch();

  const handleFlagDialog = () => {
    if (setIsOpenDialog) false;
  };

  const isOpen = useSelector((state) => state.dialog.isOpen);

  const openDialog = () => {
    dispatch(flagDialogCEP());
  };

  return (
    <>
      <div className="ml-0 mr-3">
        <Button className="searchCEP" onClick={openDialog}>
          <div className="info d-flex flex-column">
            <span className="label">{SUA_LOCALIZACAO}</span>
            <span className="local">{LOCALIZACAO}</span>
          </div>
          <span className="ml-auto">
            <CiLocationOn />
          </span>
        </Button>

        <DialogCEP />
      </div>
    </>
  );
};

export default SearchCEP;
