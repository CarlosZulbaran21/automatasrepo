import React from "react";
import Exportar from "./pages/Exportar";
import Importar from "./pages/Importar";
import Validar from "./pages/Validar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Validar}/>
        <Route exact path="/validar" component={Validar}/>
        <Route exact path="/exportar" component={Exportar}/>
        <Route exact path="/importar" component={Importar}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
