import React, { useState } from "react";
import { CardsEnum, Presupuesto } from "../interfaces/interfaces";

interface Solicitud {
  presupuesto: Presupuesto;
  setPresupuesto: React.Dispatch<React.SetStateAction<Presupuesto>>;
  agregarPresupuesto: (nuevoPresupuesto: Presupuesto) => void;
}

export const Solicitud: React.FC<Solicitud> = ({
  presupuesto,
  setPresupuesto,
  agregarPresupuesto,
}) => {
  const { nombre, email, telefono, precioTotal } = presupuesto;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !telefono || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevoPresupuesto = { ...presupuesto };

    // Resetear los campos del formulario
    setPresupuesto({
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
    agregarPresupuesto({ ...nuevoPresupuesto });
  };

  return (
    <div className=" flex py-11 rounded-xl mx-auto w-2/4 -mt-8 gap-2">
      <div className=" h-1/2 bg-center ">
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <h2 className="text-lg font-bold mb-4">Demanar pressupost</h2>
          <form onSubmit={handleSubmit} className="flex gap-4 items-center">
            {/* Nombre del presupuesto */}
            <input
              type="text"
              value={nombre}
              onChange={(nuevo) =>
                setPresupuesto({ ...presupuesto, nombre: nuevo.target.value })
              }
              placeholder="Nombre"
              className="border rounded-md px-3 py-2 w-1/4"
            />
            {/* telefono */}
            <input
              type="text"
              value={telefono}
              onChange={(e) =>
                setPresupuesto({ ...presupuesto, telefono: e.target.value })
              }
              placeholder="Telefono"
              className="border rounded-md px-3 py-2 w-1/4"
            />

            {/* Email */}
            <input
              type="text"
              value={email}
              onChange={(e) =>
                setPresupuesto({ ...presupuesto, email: e.target.value })
              }
              placeholder="Email"
              className="border rounded-md px-3 py-2 w-1/4"
            />

            {/* Precio (invisible al usuario, ya viene calculado) */}
            <input
              type="text"
              value={precioTotal}
              disabled
              placeholder={`${precioTotal} €`}
              className="border rounded-md px-3 py-2 w-1/4 bg-gray-100 cursor-not-allowed"
            />
            {/* Botón para agregar */}
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Solicitar presupuesto →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
