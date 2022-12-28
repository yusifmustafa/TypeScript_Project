import React from "react";
import "./AddUser.css";
import { UserContext } from "../../Context/UserContextProvider";
const AddUser = () => {
  const context = React.useContext(UserContext);
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{ outline: "none", boxShadow: "none" }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                style={{ outline: "none", boxShadow: "none" }}
                onClick={() => {
                  context.closeAddUserModal();
                }}
              >
                Close
              </button>
              <button
                style={{ outline: "none", boxShadow: "none" }}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
