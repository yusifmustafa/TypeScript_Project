import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import { UserContext } from "../../Context/UserContextProvider";
import { UserType } from "../types";
import "./TableList.css";
import AddUser from "../AddUser/AddUser";
 
const TableList = () => {
  const context = useContext(UserContext);
  const { getAllUser, getAllDataFromApi, openAddUserModal, openModal } =
    context;

  React.useEffect(() => {
    getAllDataFromApi();
  }, []);

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div className="tablelist">
      <div className="header">
        <h2 style={{ fontFamily: "Helvetica", fontWeight: "600" }}>
          İşçilərin Siyahısı
        </h2>{" "}
        <br />
        <Button
          variant="outlined"
          onClick={openAddUserModal}
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
            <th scope="col">Vəzifəsi</th>
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
                  <Link to="/" className="edit-button">
                    <FaPen />
                  </Link>
                </div>
                <div className="delete-button">
                  <button
                    style={{ outline: "none", boxShadow: "none" }}
                    className="btn btn-danger"
                    onClick={() => {
                      context.openDeleteModal();
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
