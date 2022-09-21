import {
  Card,
  CardContent,
  Divider,
  Grid,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import CustomAppBar from "../components/CustomAppBar";

function Exportar() {
  return (
    <React.Fragment>
      <nav>
        <CustomAppBar />
      </nav>

      <main
        style={{
          width: 700,
          margin: "60px auto",
        }}
      >
        <Card style={{ padding: 60 }}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid
                xs={6}
                item
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label>Nombres</label>
                <OutlinedInput />
              </Grid>
              <Grid
                xs={6}
                item
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label>Codigo estudiante</label>
                <OutlinedInput />
              </Grid>
              <Grid
                xs={6}
                item
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label>Fecha ingreso</label>
                <OutlinedInput type="date" />
              </Grid>
              <Grid
                xs={6}
                item
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label>Dirección</label>
                <OutlinedInput />
              </Grid>
              <Grid
                xs={6}
                item
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label>Telefono</label>
                <OutlinedInput />
              </Grid>
              <Grid
                xs={6}
                item
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label>Celular</label>
                <OutlinedInput />
              </Grid>
              <Grid
                xs={12}
                item
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <label>Correo Electronico</label>
                <OutlinedInput />
              </Grid>
              
            </Grid>
          </CardContent>
          <Divider sx={{ width: "100%" }} />
        </Card>
      </main>
    </React.Fragment>
  );
}

export default Exportar;
