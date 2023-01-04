import React from "react";
<<<<<<< HEAD
 
const AddUser = () => {
=======
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
  const {
    handleOnChange,
    InsertData,
    user,
    openModal,
    getUserById,
    updatePerson,
  } = context;
  console.log("user", user);
  const { id } = useParams();

  React.useEffect(() => {
    getUserById(id);
  }, [id]);
  const handleOnSubmit = (user: any) => {
    if (user.id === 0 || user.id === undefined) {
      InsertData(user);
    } else if (user.id > 0) {
      updatePerson(id, user);
    }
  };

  console.log("id:", id);

  const modalstyle = {
    background: "rgba(255, 255, 255, 0.25)",
    boxShadow: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(11px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  };

>>>>>>> delete_method-branch
  return (
    <div>
      <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            href="#ex1-tabs-1"
            role="tab"
            aria-controls="ex1-tabs-1"
            aria-selected="true"
          >
            Personal
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex1-tab-2"
            data-mdb-toggle="tab"
            href="#ex1-tabs-2"
            role="tab"
            aria-controls="ex1-tabs-2"
            aria-selected="false"
          >
            Tab 2
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex1-tab-3"
            data-mdb-toggle="tab"
            href="#ex1-tabs-3"
            role="tab"
            aria-controls="ex1-tabs-3"
            aria-selected="false"
          >
            Tab 3
          </a>
        </li>
      </ul>

      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
         </div>
        <div
          className="tab-pane fade"
          id="ex1-tabs-2"
          role="tabpanel"
          aria-labelledby="ex1-tab-2"
        >
          Tab 2 content
        </div>
        <div
          className="tab-pane fade"
          id="ex1-tabs-3"
          role="tabpanel"
          aria-labelledby="ex1-tab-3"
        >
          Tab 3 content
        </div>
      </div>
    </div>
  );
};

export default AddUser;
