import React from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import { Routes, Route } from "react-router-dom";
import TableList from "./Components/TableList/TableList";
import AddUser from "./Components/AddUser/AddUser";
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<TableList />} />
<<<<<<< HEAD
          <Route path="/adduser" element={<AddUser />} />
=======
>>>>>>> delete_method-branch
          <Route path="/edit-user/:id" element={<AddUser />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
