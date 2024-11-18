import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";

function ListAllCaractersScreen({ data, page, defaultPage, total, setPage }) {
  function createData({ id, thumbnail, name, description }) {
    return {
      id,
      photo: `${thumbnail.path}.${thumbnail.extension}`,
      name,
      description,
    };
  }

  const rows = data.map((element) => {
    return createData({ ...element });
  });

  const totalPages = total / page;
  const pages =
    Math.floor(totalPages) === totalPages
      ? totalPages
      : Math.floor(totalPages + 1);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Photo</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">
                  {" "}
                  <img src={row.photo} style={{ width: 50, height: 50 }}></img>
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        defaultPage={defaultPage}
        count={pages}
        onChange={(e, value) => setPage(value)}
      />
    </>
  );
}

export default ListAllCaractersScreen;
