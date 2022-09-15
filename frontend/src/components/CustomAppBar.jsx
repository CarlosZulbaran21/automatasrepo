import { AppBar, Breadcrumbs, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function CustomAppBar() {
  return (
    <AppBar
      position="static"
      style={{
        background: "#F5F5F5",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#000", fontSize: 16 }}
        >
          Expresiones Regulares
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" className="link_breadcrumps enabled" href="/">
            Validar
          </Link>
          <Link className="link_breadcrumps" underline="hover" color="inherit">
            Exportar
          </Link>
          <Link underline="hover" className="link_breadcrumps enabled">
            Importar
          </Link>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
}
