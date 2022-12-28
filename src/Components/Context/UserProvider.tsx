import React, { FunctionComponent } from "react";
import { UserTypes } from "../../types";
interface Iuser {
  openModal: boolean;
  children: React.ReactNode;
}
export const UserContext = React.createContext<UserTypes | object>({});
const INITIAL_STATE = {
  openModal: true,
};
const UserProvider: FunctionComponent<Iuser> = (props) => {
  const [state, setState] = React.useState(INITIAL_STATE);
  return (
    <UserContext.Provider value={{ ...state }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
