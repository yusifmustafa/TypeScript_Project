import React, { FunctionComponent } from "react";
import axios from "axios";
interface Iuser {
  children: React.ReactNode;
 }

export const UserContext = React.createContext<any>(null);
const INITIAL_STATE = {
  getAllUser: [],
  openModal: false,
};
const UserProvider: FunctionComponent<Iuser> = (props) => {
  const [state, setState] = React.useState(INITIAL_STATE);
  return (
    <UserContext.Provider
      value={{
        ...state,
        getAllDataFromApi: getAllDataFromApi,
        openAddUserModal: openAddUserModal,
        closeAddUserModal: closeAddUserModal,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );

  function getAllDataFromApi() {
    axios.get("http://127.0.0.1:3000").then((rsp) => {
      const data = rsp.data;
      setState({ ...state, getAllUser: data });
    });
  }

  function openAddUserModal() {
    setState({ ...state, openModal: true });
  }
  function closeAddUserModal() {
    setState({ ...state, openModal: false });
  }
};

export default UserProvider;
