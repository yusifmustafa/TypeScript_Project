import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { UserContext } from "../../Context/UserContextProvider";

const DeleteUser = () => {
  const context = React.useContext(UserContext);
  const { openModal } = context;
  return (
    <div>
      <Dialog
        open={openModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Disagree</Button>
          <Button autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteUser;
