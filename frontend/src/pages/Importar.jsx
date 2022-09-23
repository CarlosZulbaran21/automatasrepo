import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CustomAppBar from "../components/CustomAppBar";
import Papa from "papaparse";
import XMLParser from "react-xml-parser";

function Importar() {
  const [rows, setRows] = React.useState([]);
  const commonConfig = { delimiter: "," };

  return (
    <React.Fragment>
      <nav>
        <CustomAppBar />
      </nav>
      <main style={{ marginTop: 30 }}>
        <TableContainer
          component={Paper}
          style={{ width: "98%", margin: "0 auto" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombres</TableCell>
                <TableCell align="right">Codigo Estudiante</TableCell>
                <TableCell align="right">Fecha Ingreso</TableCell>
                <TableCell align="right">Direccion</TableCell>
                <TableCell align="right">Telefono</TableCell>
                <TableCell align="right">Celular</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={Math.random() * 9999}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nombres}
                  </TableCell>
                  <TableCell align="right">{row.codigoEstudiante}</TableCell>
                  <TableCell align="right">{row.fechaIngreso}</TableCell>
                  <TableCell align="right">{row.direccion}</TableCell>
                  <TableCell align="right">{row.telefono}</TableCell>
                  <TableCell align="right">{row.celular}</TableCell>
                  <TableCell align="right">{row.correoElectronico}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div
          style={{
            marginTop: 100,
            display: "flex",
            justifyContent: "center",
            paddingLeft: 78,
            paddingRight: 78,
          }}
        >
          <input
            type="file"
            name="uploadfile"
            id="img"
            style={{ display: "none" }}
            onChange={(e) => {
              const extension = e.target.value.split(".").pop();
              const reader = new FileReader();
              const file = e.target.files[0];
              if (extension === "json" || extension === "txt") {
                ReadJSONandXML(reader, file);
              } else if (extension === "csv") {
                ReadEXCEL(file);
              } else if (extension === "xml") {
                ReadXML(reader, file);
              }
            }}
          />
          <Button
            variant="contained"
            style={{ background: "#7C7AE5", width: 400 }}
            fullWidth
          >
            <label htmlFor="img" style={{ cursor: "pointer" }}>
              Importar
            </label>
          </Button>
        </div>
      </main>
    </React.Fragment>
  );
  function ReadJSONandXML(reader, file) {
    reader.onload = async (e) => {
      let text = e.target.result;
      if (text) {
        text = text.replace(/'/g, '"'); //replacing all ' with "
        text = JSON.parse(text);
        setRows(text);
      }
    };
    reader.readAsText(file);
  }
  function ReadEXCEL(file) {
    Papa.parse(file, {
      ...commonConfig,
      header: true,
      download: true,
      complete: (result) => {
        setRows(result.data);
      },
    });
  }
  function ReadXML(reader, file) {
    reader.onload = async (e) => {
      let xml = e.target.result;
      xml = new XMLParser().parseFromString(xml);

      let children_padre = xml.children[0]?.children;
      if (Array.isArray(children_padre)) {
        children_padre.forEach((padre) => {
          if (Array.isArray(padre.children)) {
            // se itera la cantidad de informacion en el array de objetos
            let array = [];
            let object = {};
            padre.children.forEach((child) => {
              object[child.name] = child.value;
            });
            array.push(object);
            setRows(array);
          }
        });
      }
    };
    reader.readAsText(file);
  }
}

export default Importar;
