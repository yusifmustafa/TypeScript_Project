import React, { ChangeEvent } from "react";
import "./AddUser.css";
import { UserContext } from "../../Context/UserContextProvider";

const AddUser = () => {
  const context = React.useContext(UserContext);
  const { handleOnChange, InsertData, user } = context;
  console.log(user);

  return (
    <div
      className="modal fade"
      id="form"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title" id="exampleModalLabel">
              İşçi Qeydiyyatı
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => context.closeAddUserModal()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name">Adınız</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Adınızı daxil edin"
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.name ? user.name : ""}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Xanaları tam şəkildə doldurun.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="surname">Soyad</label>
                <input
                  name="surname"
                  type="text"
                  className="form-control"
                  id="surname"
                  placeholder="Soyad"
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.surname ? user.surname : ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="patronymic">Ata Adı</label>
                <input
                  name="patronymic"
                  type="text"
                  className="form-control"
                  id="patronymic"
                  placeholder="Ata adı"
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.patronymic ? user.patronymic : ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">İstifadəçi Adı</label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="İstifadəçi adı"
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.username ? user.username : ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="idnumber">İstifadəçi Adı</label>
                <input
                  name="idnumber"
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Şəxsiyyət vəsiqənizin nörməsi"
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.idnumber ? user.idnumber : ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pincode">İstifadəçi Adı</label>
                <input
                  name="pincode"
                  type="text"
                  className="form-control"
                  id="pincode"
                  placeholder="Şəxsiyyət vəsiqənizin Finkod nörməsi"
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.pincode ? user.pincode : ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="citizenship">İstifadəçi Adı</label>
                <input
                  name="citizenship"
                  type="text"
                  className="form-control"
                  id="citizenship"
                  placeholder="Vətəndaşlığınız"
                  onChange={(event) => {
                    handleOnChange({
                      name: event.target.name,
                      value: event.target.value,
                    });
                  }}
                  value={user.citizenship ? user.citizenship : ""}
                />
              </div>
            </div>
            <div className="modal-footer border-top-0 d-flex justify-content-center">
              <button
                onClick={() => {
                  InsertData(user);
                }}
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
