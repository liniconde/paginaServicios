import { useState } from "react";
import { Card } from "./../components/Card";
import { cardData } from "./../data/data";
import { useNavigate } from "react-router-dom";
import { Solicitud } from "../components/Solicitud";
import { CardsEnum, Presupuesto } from "../interfaces/interfaces";

interface CalculadoraProps {
  listadoPresupuesto: Presupuesto[];
  setlistadoPresupuesto: React.Dispatch<React.SetStateAction<Presupuesto[]>>;
}

export const Calculadora: React.FC<CalculadoraProps> = ({
  listadoPresupuesto,
  setlistadoPresupuesto,
}) => {
  const [presupuesto, setPresupuesto] = useState<Presupuesto>({
    nombre: "",
    telefono: "",
    email: "",
    precioTotal: 0,
    fecha: new Date(),
    [CardsEnum.Seo]: false,
    [CardsEnum.Ads]: false,
    [CardsEnum.Web]: false,
    numeroDePaginas: 0,
    numeroDeIdiomas: 0,
  });

  const [isPagoAnual, setIsPagoAnual] = useState<boolean>(false); // Estado del toggle
  const navigate = useNavigate(); // Estado centralizado para manejar las selecciones de las casillas

  //const [valorPresupuesto, setValorPresupuesto] = useState<number>(0);
  // Función para actualizar el estado de los checkboxes
  const handleCheckboxChange = (id: string, checked: boolean) => {
    setPresupuesto({ ...presupuesto, [id]: checked });
    calcularValorPresupuesto(id, checked);
  };

  const calcularValorPresupuesto = (id: string, checked: boolean) => {
    const itemBuscado = cardData.find((item) => item.id === id);
    if (checked == true) {
      sumarValorPresupuesto(itemBuscado?.price || 0);
    } else {
      sumarValorPresupuesto(-(itemBuscado?.price || 0));
    }
  };

  const sumarValorPresupuesto = (valorASumar: number) => {
    setPresupuesto((prev) => ({
      ...prev,
      precioTotal: prev.precioTotal + valorASumar,
    }));
  };

  const calcularDescuento = (precio: number) => {
    return isPagoAnual ? precio * 0.8 : precio; // 20% de descuento en pago anual
  };

  const agregarPresupuesto = (nuevoPresupuesto: Presupuesto) => {
    setlistadoPresupuesto([...listadoPresupuesto, nuevoPresupuesto]);
    navigate("/listado-presupuesto");
  };

  return (
    <div>
      <div
        className="h-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url('/imagenes/CALCULADORA.jpg')`,
          minHeight: "15vh",
        }}
      ></div>
      <div>
        <button
          className="px-9 py-3 bg-gray-300 text-black font-bold rounded-md hover:bg-gray-400 transition"
          onClick={() => navigate("/ Calculadora")}
        >
          INICIO
        </button>
      </div>

      {/* Toggle Pago Mensual/Anual */}
      <div className="flex items-center justify-center my-6 gap-4">
        <span className="font-bold text-lg">Pago mensual</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isPagoAnual}
            onChange={() => setIsPagoAnual(!isPagoAnual)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500"></div>
          <div className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transform peer-checked:translate-x-full transition-transform"></div>
        </label>
        <span className="font-bold text-lg">Pago anual</span>
      </div>

      <div className="flex flex-col mx-auto w-2/4 gap-2">
        {cardData.map((data) => (
          <Card
            key={data.id}
            title={data.id}
            description={data.description}
            price={calcularDescuento(data.price)}
            checked={presupuesto[data.id]}
            isWebComponent={data.isWebComponent}
            sumarPresupuesto={sumarValorPresupuesto}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            onCheckboxChange={() => {}}
            isPagoAnual={isPagoAnual}
          />
        ))}
      </div>
      <div className="flex justify-end w-2/4 mx-auto mt-5 items-center">
        <span className="font-bold text-lg">
          Presupuesto:{calcularDescuento(presupuesto.precioTotal)} €
        </span>
      </div>

      <Solicitud
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        agregarPresupuesto={agregarPresupuesto}
      />
    </div>
  );
};
