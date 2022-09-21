import React from "react";
import Exportar from "./pages/Exportar";
import Importar from "./pages/Importar";
import Validar from "./pages/Validar";
function App() {
  return (
    <React.Fragment>
      <Validar />
      <Exportar />
      <Importar />
    </React.Fragment>
  );
}

export default App;
