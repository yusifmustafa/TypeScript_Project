import * as React from "react";
import { UserType } from "../types";
import axios from "axios";
 import "./TableList.css";
  

export default function TableList() {
  const [data, setData] = React.useState<UserType[]>([]);

  React.useEffect(() => {
    getAllDatasFromApi();
  }, []);
  const getAllDatasFromApi = async () => {
    await axios.get<UserType[]>("http://localhost:3000").then((rsp) => {
      setData(rsp.data);
    });
  };

  return (
    <div>
      salam
    </div>
   );
}
