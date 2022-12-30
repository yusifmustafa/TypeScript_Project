import React, { FunctionComponent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
        getUserInfoById: getUserInfoById,
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

  function getUserInfoById(id: number) {
    axios.get(`http://127.0.0.1:3000/${id}`).then((rsp) => {
      const data = rsp?.data;
      console.log("data", data);
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

  function openAddUserModal() {
    setState({ ...state, openModal: true, user: {} });
  }
  function closeAddUserModal() {
    setState({ ...state, openModal: false });
  }

  function handleOnChange(event: any) {
    const { name, value } = event;
    setState(
      Object.assign({}, state, {
        user: Object.assign({}, state.user, { [name]: value }),
      })
    );
  }

  function updatePerson(id: number, user: any) {
    axios.put(`http://127.0.0.1:3000/${id}`, user).then((rsp) => {
      const rspData = rsp.data;
      setState({ ...state, user: rspData });
    });
  }
};

export default UserProvider;
