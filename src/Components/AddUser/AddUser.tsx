import React from "react";
import { UserContext } from "../../Context/UserContextProvider";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
const AddUser = () => {
  const context = React.useContext(UserContext);
  const { handleOnChange, InsertData, user, openModal, getUserById } = context;
  console.log(user);

  const handleOnSubmit = (user: any) => {
    if (user.id === 0 || user.id === undefined) {
      InsertData(user);
    }
  };
  const { id } = useParams();

  React.useEffect(() => {
    getUserById(id);
  }, [id]);

  console.log("id:", id);

  const modalstyle = {
    background: "rgba(255, 255, 255, 0.25)",
    boxShadow: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(11px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

  return (
    <div>
      <Dialog style={modalstyle} open={openModal}>
        <DialogTitle>İşçi Qeydiyyatı</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bütün xanaları doldurun.Daxil etdiyiniz məlumatlar ana Ekranda əks
            olunacaqdır.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            id="name"
            label="Adınız"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.name ? user.name : ""}
          />
          <TextField
            autoFocus
            margin="dense"
            name="surname"
            id="surname"
            label="Soyadınız"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.surname ? user.surname : ""}
          />
          <TextField
            autoFocus
            margin="dense"
            name="patronymic"
            id="patronymic"
            label="Ata adı"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.patronymic ? user.patronymic : ""}
          />
          <TextField
            autoFocus
            margin="dense"
            name="username"
            id="username"
            label="İstifadəçi adı"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.username ? user.username : ""}
          />
          <TextField
            autoFocus
            margin="dense"
            name="idnumber"
            id="idnumber"
            label="Şəxsiyyət vəs. seriya nöm."
            type="number"
            fullWidth
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.idnumber ? user.idnumber : ""}
          />
          <TextField
            autoFocus
            margin="dense"
            name="pincode"
            id="pincode"
            label="Fin Kod"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.pincode ? user.pincode : ""}
          />
          <TextField
            autoFocus
            margin="dense"
            name="citizenship"
            id="citizenship"
            label="Vətəndaşlığınız"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.citizenship ? user.citizenship : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              context.closeAddUserModal();
            }}
          >
            Çıxış
          </Button>
          <Button
            onClick={() => {
              handleOnSubmit(user);
            }}
          >
            Təsdİqlə
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </div>
  );
};

export default AddUser;
