import { Calculadora } from "./pages/Calculadora";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { ListadoPresupuesto } from "./pages/ListadoPresupuesto";
import { useState } from "react";
import { Presupuesto } from "./interfaces/interfaces";


export const App = () => {
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/calculadora"
          element={
            <Calculadora
              listadoPresupuesto={presupuestos}
              setlistadoPresupuesto={setPresupuestos}
            />
          }
        />
        <Route
          path="/listado-presupuesto"
          element={
            <ListadoPresupuesto
              listadoPresupuesto={presupuestos}
              setlistadoPresupuesto={setPresupuestos}
            />
          }
        />
      </Routes>
    </Router>
  );
};
