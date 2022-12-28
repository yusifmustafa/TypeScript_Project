import * as React from "react";
import { UserType } from "../types";
import axios from "axios";

export default function TableList() {
  const [data, setData] = React.useState<UserType[]>([]);
  console.log("data", data);

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
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>ID</TableCell>
            <TableCell>Adı</TableCell>
            <TableCell>Soyadı</TableCell>
            <TableCell>Ata adı</TableCell>
            <TableCell>İstifadəçi adı</TableCell>
            <TableCell>Cinsi</TableCell>
            <TableCell>ŞV verən orqanın adı</TableCell>
            <TableCell>Vəzifəsi</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {userList?.map((user, key) => (
            <TRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.surname}</TableCell>
              <TableCell>{user.patronymic}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.idprovider}</TableCell>
              <TableCell>Boşdur</TableCell>
              <TableCell>
                <Link to={`/edit-user/${user.id}`} style={{ marginRight: 10 }}>
                  <EditIcon />
                </Link>
                <Button
                  onClick={() => {
                    handleDeleteUser(user.id);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
}
