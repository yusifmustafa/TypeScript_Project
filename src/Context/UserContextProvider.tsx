import React, { FunctionComponent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
interface Iuser {
  children: React.ReactNode;
}

export const UserContext = React.createContext<any>(null);
const INITIAL_STATE = {
  getAllUser: [],
  openModal: false,
  user: {},
};
console.log("openModal", INITIAL_STATE.openModal);
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
};

export default UserProvider;
