import React from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import { Routes, Route } from "react-router-dom";
import  TableList  from "./Components/TableList/TableList";
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<TableList />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
