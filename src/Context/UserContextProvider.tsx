import React, { FunctionComponent } from "react";
import axios from "axios";
interface Iuser {
  children: React.ReactNode;
}

export const UserContext = React.createContext<any>(null);
const INITIAL_STATE = {
  getAllUser: [],
};
const UserProvider: FunctionComponent<Iuser> = (props) => {
  const [state, setState] = React.useState(INITIAL_STATE);
  return (
    <UserContext.Provider
      value={{ ...state, getAllDataFromApi: getAllDataFromApi }}
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
};

export default UserProvider;
