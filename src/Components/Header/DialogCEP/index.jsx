import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle } from "@mui/material";
import { getCEP } from "../../../services/apis/apiCEP";
import MyButton from "../../MyButton";
import SearchBox from "../SearchBox";
import DialogNotification from "../../DialogNotification";
import { CEP, CONSULTAR_FRETE, VALOR_E_PRAZO } from "../../../assets/var-const";
import {
  closeDialogCEP,
  flagDialogCEP,
} from "../../../redux/features/dialog/dialogSlice";
import {
  closeNotification,
  flagNotification,
} from "../../../redux/features/notification/notificationSlice";

const DialogCEP = ({ open }) => {
  const dispatch = useDispatch();
  const [isOpenNotification, setOpenNotification] = useState(false);

  const obCEP = {};

  const cep = useSelector((state) => state.input.value);
  const isOpenDialogSelector = useSelector((state) => state.dialog.isOpen);
  const isOpenNotificationSelector = useSelector(
    (state) => state.notification.isOpen
  );

  const handleSetOpenNotification = () => setOpenNotification(true);
  const handleSetCloseNotification = () => setOpenNotification(false);

  const closeDialog = () => {
    dispatch(closeDialogCEP());
    dispatch(closeNotification());
  };

  const openCloseNotification = () => {
    dispatch(flagNotification());
  };

  // const closeNotification = () => {
  //   dispatch(flagNotification());
  // };
  useEffect(() => {
    if (cep) {
      const fetchCepData = async () => {
        try {
          obCEP = await getCEP(cep);
        } catch (error) {
          return error.message;
        }
      };
      fetchCepData();
    }
  }, [cep]);

  return (
    <div>
      <Dialog className="locationModal" open={isOpenDialogSelector}>
        <DialogTitle>{CONSULTAR_FRETE}</DialogTitle>
        <span className="valor-e-prazo">{VALOR_E_PRAZO}</span>

        <SearchBox className="w-100" placeHolder={CEP} />

        {/* <MyButton className="mt-3" onClick={handleSetOpenNotification} /> */}

        <MyButton
          color="error"
          label="FECHAR"
          className="mt-3"
          onClick={closeDialog}
        />
      </Dialog>

      <DialogNotification
        open={isOpenNotificationSelector}
        onClose={openCloseNotification}
        title="Aviso"
        message={"e"}
        dialogColor="#fff"
        buttonProps={{
          label: "Entendido",
          color: "secondary",
          onClick: openCloseNotification,
        }}
      />
    </div>
  );
};

DialogCEP.propTypes = {
  open: PropTypes.boolean,
};

export default DialogCEP;
