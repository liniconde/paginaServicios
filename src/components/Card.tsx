import React from "react";
import { WebConfigurator } from "./WebConfigurator";
import { Presupuesto } from "../interfaces/interfaces";

interface CardProps {
  title: string;
  description: string;
  price: number;
  checked: boolean;
  isWebComponent: boolean;
  presupuesto: Presupuesto;
  setPresupuesto: React.Dispatch<React.SetStateAction<Presupuesto>>;
  sumarPresupuesto: (valorASumar: number) => void;
  onCheckboxChange: (checked: boolean) => void;
  isPagoAnual: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  checked,
  isWebComponent,
  sumarPresupuesto,
  onCheckboxChange,
  presupuesto,
  setPresupuesto,
  isPagoAnual,
}) => {
  return (
    <div className="border-2 py-5 px-9 shadow-xl rounded-xl overflow-auto">
      <div className="grid grid-cols-3 items-center place-items-center">
        <div className="flex flex-col text-start">
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <p className="text-sm font-bold text-black-600">{description}</p>
        </div>

        <div className="text-2xl font-bold text-gray-900">
          {isPagoAnual && (
            <p className="text-sm justify-center text-orange-500 mb-1">
              ¡Descuento del 20%!
            </p>
          )}

          <div className="text-2xl font-bold text-gray-900">
            {price}
            <span className="text-sm font-normal">€</span>
          </div>
        </div>

        <div className="flex items-center">
          <input
            id={title}
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckboxChange(e.target.checked)}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor={title}
            className="ml-2 text-sm font-medium text-gray-700"
          >
            Afegir
          </label>
        </div>
      </div>
      {isWebComponent && (
        <WebConfigurator
          sumarPresupuesto={sumarPresupuesto}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
        />
      )}
    </div>
  );
};
