import React, { FunctionComponent } from "react";
import axios from "axios";
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

  function InsertData(user: object) {
    axios.post("http://127.0.0.1:3000", user).then(() => {});
  }

  function openAddUserModal() {
    setState({ ...state, openModal: true });
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
