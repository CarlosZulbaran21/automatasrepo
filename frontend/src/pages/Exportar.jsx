import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
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
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="textField"
                  label="Codigo Estudiante"
                  color="warning"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="textField"
                  label="Fecha Ingreso"
                  color="warning"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="textField"
                  label="Direccion"
                  color="warning"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="textField"
                  label="Telefono"
                  color="warning"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="textField"
                  label="Celular"
                  color="warning"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  className="textField"
                  label="Correo Electronico"
                  color="warning"
                  variant="outlined"
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
                    float: "right",
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
          <Divider style={{ marginTop: 10 }} />
          <div
            style={{
              marginTop: 100,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button variant="contained" style={{ background: "#E57A80" }}>
              Texto
            </Button>
            <Button variant="contained" style={{ background: "#49E162" }}>
              Excel
            </Button>
            <Button variant="contained" style={{ background: "#E5E07A" }}>
              XML
            </Button>
            <Button variant="contained" style={{ background: "#E39043" }}>
              JSON
            </Button>
          </div>
        </Card>
      </main>
    </React.Fragment>
  );
}

export default Exportar;
