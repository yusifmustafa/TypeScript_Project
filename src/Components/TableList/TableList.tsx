import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import { UserContext } from "../../Context/UserContextProvider";
import { UserType } from "../types";
import "./TableList.css";
import AddUser from "../AddUser/AddUser";
import Swal from "sweetalert2";
const TableList = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { getAllUser, getAllDataFromApi, openModal, deleteData } = context;

  React.useEffect(() => {
    getAllDataFromApi();
  }, []);

  const handleNavigateToAddUser = () => {
    navigate("/adduser");
  };

  const handleDeleteItem = (id: number) => {
    Swal.fire({
      title: "Silmə Əməliyyatı",
      text: "Silinən istifadəçini geri qaytarmaq mümkün deyil!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonText: "GERİ QAYIT",
      cancelButtonColor: "#d33",
      confirmButtonText: "SİL",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
        Swal.fire("İstifadəçi silindi!", "", "success");
      }
    });
  };

  return (
    <div className="tablelist">
      <div className="header">
        <h2 style={{ fontFamily: "Helvetica", fontWeight: "600" }}>
          İşçilərin Siyahısı
        </h2>{" "}
        <br />
        <Button
          onClick={() => {
            handleNavigateToAddUser();
          }}
          variant="outlined"
          className="btn btn-primary adduser"
        >
          Əlavə et
        </Button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr className="user-about">
            <th scope="col">ID</th>
            <th scope="col">Adı</th>
            <th scope="col">Soyadı</th>
            <th scope="col">Ata adı</th>
            <th scope="col">İstifadəçi adı</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {getAllUser.map((item: UserType) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.patronymic}</td>
              <td>{item.username}</td>
              <td className="edit_delete">
                <div className="edit-button">
<<<<<<< HEAD
                  <Link to={`/${item.id}`} className="edit-button">
=======
                  <Link to={`/edit-user/${item.id}`} className="edit-button">
>>>>>>> delete_method-branch
                    <FaPen />
                  </Link>
                </div>
                <div className="delete-button">
                  <button
                    style={{ outline: "none", boxShadow: "none" }}
                    className="btn btn-danger"
                    onClick={() => {
                      handleDeleteItem(item.id);
                    }}
                  >
                    <span className="trash-icon">
                      <FaTrash />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        {openModal && <AddUser />}
      </table>
    </div>
  );
};

export default TableList;
