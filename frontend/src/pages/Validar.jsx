import React from "react";
import "../components/estilos.css";
import {
  CardContent,
  Grid,
  Button,
  TextField,
  Card,
} from "@mui/material";
import CustomAppBar from "../components/CustomAppBar";

function Validar() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
    <CustomAppBar/>
      <Card
        style={{
          height: "70vh",
          width: "450px",
          margin: "20px auto",
          border: "1px solid #DDDDDD",
          borderRadius: "7px",

        }}
        variant="outlined"
      >
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField
                className="textField"
                label="Nombre"
                color="warning"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="textField"
                label="Codigo Estudiante"
                color="warning"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="textField"
                label="Fecha Ingreso"
                color="warning"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="textField"
                label="Direccion"
                color="warning"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="textField"
                label="Telefono"
                color="warning"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="textField"
                label="Celular"
                color="warning"
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                className="textField"
                label="Correo Electronico"
                color="warning"
                variant="standard"
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Button
                style={{
                  float: "right"
                }}
                size="small"
                variant="contained"
                color="secondary"
              >
                Validar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Validar;
