import React from "react";
import { useNavigate } from "react-router-dom";

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/imagenes/WELCOME.jpg')` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-5">
          ¡Bienvenido a tu presupuesto personalizado!
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Este sitio te permite calcular presupuestos personalizados para tus
          proyectos. Puedes seleccionar diferentes opciones y ajustar los
          parámetros según tus necesidades.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
          onClick={() => navigate("/calculadora")}
        >
          Ir a la Calculadora
        </button>
      </div>
    </div>
  );
};
