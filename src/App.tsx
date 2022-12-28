import React from "react";
import "./App.css";
import TableList from "./Components/TableList/TableList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TableList />} />
      </Routes>
    </>
  );
}

export default App;
