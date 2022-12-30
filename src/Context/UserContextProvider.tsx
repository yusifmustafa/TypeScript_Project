import React, { FunctionComponent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserTypes } from "../types";
interface Iuser {
  children: React.ReactNode;
}

export const UserContext = React.createContext<any>(null);
const INITIAL_STATE = {
  getAllUser: [],
  openModal: false,
  user: {},
};
const UserProvider: FunctionComponent<Iuser> = (props) => {
  const notify1 = () => toast.error("Xanaları tam doldurun");
  const [state, setState] = React.useState(INITIAL_STATE);
  const navigate = useNavigate();

  return (
    <UserContext.Provider
      value={{
        ...state,
        getAllDataFromApi: getAllDataFromApi,
        openAddUserModal: openAddUserModal,
        closeAddUserModal: closeAddUserModal,
        handleOnChange: handleOnChange,
        InsertData: InsertData,
        deleteData: deleteData,
        getUserById: getUserById,
        updatePerson: updatePerson,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );

  function getAllDataFromApi() {
    axios.get("http://127.0.0.1:3000").then((rsp) => {
      const data = rsp.data;
      setState({ ...state, getAllUser: data, openModal: false });
    });
  }

  function getUserById(id: number) {
    axios.get(`http://127.0.0.1:3000/${id}`).then((rsp) => {
      const data = rsp?.data;
      data.map((item: UserTypes) => {
        const obj = {
          id: item.id,
          name: item.name,
          surname: item.surname,
          patronymic: item.patronymic,
          username: item.username,
          idnumber: item.idnumber,
          pincode: item.pincode,
          citizenship: item.citizenship,
        };
        setState({ ...state, user: obj, openModal: true });
      });
    });
  }

  function InsertData(user: object) {
    axios.post("http://127.0.0.1:3000", user).then((rsp) => {
      const data = rsp?.data;
      if (data === false) {
        notify1();
        return;
      }
      getAllDataFromApi();
    });
  }

  function deleteData(id: number) {
    axios.delete(`http://127.0.0.1:3000/${id}`).then((rsp) => {
      getAllDataFromApi();
    });
  }

  function updatePerson(id: number, user: any) {
    axios.put(`http://127.0.0.1:3000/${id}`, user).then((rsp) => {
      const data = rsp?.data;
      console.log("updateData", data);
      setState({ ...state, user: data, openModal: false });
    });
    navigate("/");
  }

  function openAddUserModal() {
    setState({ ...state, openModal: true, user: {} });
  }
  function closeAddUserModal() {
    setState({ ...state, openModal: false });
    navigate("/");
  }

  function handleOnChange(event: any) {
    const { name, value } = event;
    setState(
      Object.assign({}, state, {
        user: Object.assign({}, state.user, { [name]: value }),
      })
    );
  }
};

export default UserProvider;
