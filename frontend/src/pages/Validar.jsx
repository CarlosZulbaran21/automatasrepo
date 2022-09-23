import React from "react";
import "../components/estilos.css";
import { CardContent, Grid, Button, TextField, Card } from "@mui/material";
import CustomAppBar from "../components/CustomAppBar";
import ActionsToExport from "../components/ActionsToExport";

function Validar() {
  //valores que voy a obtener de los inputs
  const [values, setValues] = React.useState({
    nombres: "",
    codigoEstudiante: "",
    fechaIngreso: "",
    direccion: "",
    telefono: "",
    celular: "",
    correoElectronico: "",
  });
  //valores que se insertan si pasa las regex
  const [data, setData] = React.useState([]);
  // objeto para validar las expresiones regulares
  const REGEX = {
    /**
     * @nombres
     * Debe empezar por letra y terminar por letra Las palabras deben separarse como mucho por un espacio
     * Busca al inicio que empiece por una palabra (letras repetidas 1 o más veces) a continuación,
     * se repite el siguiente conjunto: ( un espacio + una palabra ) de cero a varias veces. Finalmente,
     * debe terminar con fin de línea/string.
     */
    nombres: new RegExp("^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$"),
    /**
     * @codigoEstudiante
     * debe contener solo numeros y estrictamente 8 caracteres
     *  */
    codigoEstudiante: new RegExp("^[1-9]{8}$"),
    /**
     * @fechaIngreso
     * explicacion: https://www.debuggex.com/r/bNB5k2szRN24GDAJ
     * formato: dd/mm/yyyy
     */
    fechaIngreso:
      /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
    /**
     * @direccion
     * admite letras o numeros y simbolos como # - para las direcciones
     *  */
    direccion: new RegExp("^[A-Z a-z0-9ÑñáéíóúÁÉÍÓÚ\\-\\#]+$"),
    /**
     * @telefono
     * admite solo numeros con una longitud de 7 caracteres
     *  */
    telefono: new RegExp("^[0-9]{7}$"),
    /**
     * @celular
     * admite solo numeros y tiene que empezar por 3 con una longitud de 10 caracteres
     *  */
    celular: new RegExp("^3[0-9]{9}$"),
    /**
     * En general, un correo electrónico debe tener los siguientes elementos
     * Empezar por el identificador o nombre del usuario ^\w+([.-_+]?\w+)*
     * Seguido por el símbolo de la arroba @
     * Por último, el nombre del dominio del correo \w+([.-]?\w+)*(\.\w{2,10})+$
     */
    correoElectronico: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
  };

  //onChange dinamico para usarlo en todos los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // funcion ejecutada con el boton validar
  const handleSubmit = () => {
    //validar nombres
    if (!REGEX.nombres.test(values.nombres)) alert("Escribir un nombre valido");
    //validar codigo estudiante
    else if (!REGEX.codigoEstudiante.test(values.codigoEstudiante))
      alert("Escribir un codigo de estudiante valido");
    // validar fecha ingreso
    else if (!REGEX.fechaIngreso.test(values.fechaIngreso))
      alert("Escribir una fecha de ingreso valida");
    //validar direccion
    else if (!REGEX.direccion.test(values.direccion))
      alert("Escribir una direccion valida");
    //validar telefono
    else if (!REGEX.telefono.test(values.telefono))
      alert("Escribir un telefono valido");
    //validar celular
    else if (!REGEX.celular.test(values.celular))
      alert("Escribir un celular valido");
    //validar correo electronico
    else if (!REGEX.correoElectronico.test(values.correoElectronico))
      alert("Escribir un email valido");
    // si pasa todo entonces se agrega al array
    else setData([...data, values]);
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <CustomAppBar />
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
                name="nombres"
                className="textField"
                label="Nombre"
                color="warning"
                variant="standard"
                value={values.nombres}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="codigoEstudiante"
                className="textField"
                label="Codigo Estudiante"
                color="warning"
                variant="standard"
                value={values.codigoEstudiante}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="fechaIngreso"
                className="textField"
                label="Fecha Ingreso"
                color="warning"
                variant="standard"
                value={values.fechaIngreso}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="direccion"
                className="textField"
                label="Direccion"
                color="warning"
                variant="standard"
                value={values.direccion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="telefono"
                className="textField"
                label="Telefono"
                color="warning"
                variant="standard"
                value={values.telefono}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="celular"
                className="textField"
                label="Celular"
                color="warning"
                variant="standard"
                value={values.celular}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                name="correoElectronico"
                fullWidth
                className="textField"
                label="Correo Electronico"
                color="warning"
                variant="standard"
                value={values.correoElectronico}
                onChange={handleChange}
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
                onClick={handleSubmit}
              >
                Validar y Guardar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <ActionsToExport data={data} />
      </Card>
    </div>
  );
}

export default Validar;
