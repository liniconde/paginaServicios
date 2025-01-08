import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Presupuesto } from "../interfaces/interfaces";
import { CardPresu } from "../components/CardPresu";

interface ListadoPresupuestoProps {
  listadoPresupuesto: Presupuesto[];
  setlistadoPresupuesto: React.Dispatch<React.SetStateAction<Presupuesto[]>>;
}

export const ListadoPresupuesto: React.FC<ListadoPresupuestoProps> = ({
  listadoPresupuesto,
  setlistadoPresupuesto,
}) => {
  const navigate = useNavigate();
  const [buscarTerm, setBuscarTerm] = useState("");
  const [sortKey, setSortKey] = useState<"fecha" | "precio" | "nombre">(
    "nombre"
  );

  const filtrarPresupuestos = listadoPresupuesto
    .filter((presupuesto) =>
      presupuesto.nombre.toLowerCase().includes(buscarTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === "fecha") {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime(); 
      } else if (sortKey === "nombre") {
        return a.nombre.localeCompare(b.nombre); 
      } else if (sortKey === "precio") {
        return b.precioTotal - a.precioTotal; 
      }
      return 0;
    });

  return (
    <div className="mt-8 px-6">
      <div className="mb-6">
        <button
          className="px-6 py-3 bg-gray-300 text-black font-bold rounded-md hover:bg-gray-400 transition"
          onClick={() => navigate("/calculadora")}
        >
          Calculadora
        </button>
      </div>
      <div className="grid grid-cols-2  w-2/4 mx-auto mb-6">
        <h2 className="text-2xl font-bold">Presupuestos en curso</h2>

        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              value={buscarTerm}
              onChange={(e) => setBuscarTerm(e.target.value)}
              className="border rounded-md px-4 py-2 w-64"
            />
            <span className="absolute right-3 top-2 text-gray-500">🔍</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setSortKey("fecha")}
              className={`font-bold ${
                sortKey === "fecha" ? "text-black" : "rexr-gray-500"
              }`}
            >
              Fecha
            </button>
            <button
              onClick={() => setSortKey("precio")}
              className={`font-bold ${
                sortKey === "precio" ? "text-black" : "text-gray-500"
              }`}
            >
              Import
            </button>
            <button
              onClick={() => setSortKey("nombre")}
              className={`font-bold ${
                sortKey === "nombre" ? "text-black" : "text-gray-500"
              }`}
            >
              Nombre
            </button>
          </div>
        </div>
      </div>

      {filtrarPresupuestos.length === 0 ? (
        <p className="text-gray-500">No hay presupuestos generados.</p>
      ) : (
        <ul className=" flex flex-col mx-auto w-2/4 gap-4 divide-y divide-gray-200">
          {filtrarPresupuestos.map((presupuesto, index) => (
            <CardPresu key={index} presupuesto={presupuesto} />
          ))}
        </ul>
      )}
    </div>
  );
};
