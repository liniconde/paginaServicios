import { useState } from "react";
import { Presupuesto } from "../interfaces/interfaces";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface WebConfiguratorProps {
  sumarPresupuesto: (valorASumar: number) => void;
  presupuesto: Presupuesto;
  setPresupuesto: React.Dispatch<React.SetStateAction<Presupuesto>>;
}

export const WebConfigurator: React.FC<WebConfiguratorProps> = ({
  sumarPresupuesto,
  presupuesto,
  setPresupuesto,
}) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<string>("");

  const costPerUnit = 30;
  const { numeroDePaginas, numeroDeIdiomas } = presupuesto;

  /*
  useEffect(() => {
    const additionalCost = (numPages + numLanguages) * costPerUnit;
    setTotalCost(baseCost + additionalCost);
    setPresupuesto(baseCost + additionalCost); // Actualiza el presupuesto global
  }, [numPages, numLanguages, setPresupuesto]);
  */

  const handleIncrementNumPages = () => {
    setPresupuesto((prev) => ({
      ...prev,
      numeroDePaginas: prev.numeroDePaginas + 1,
    }));
    sumarPresupuesto(costPerUnit);
  };

  const handleDecrementNumPages = () => {
    setPresupuesto((prev) => ({
      ...prev,
      numeroDePaginas: prev.numeroDePaginas - 1,
    }));
    sumarPresupuesto(-costPerUnit);
  };

  const handleIncrementNumIdiomas = () => {
    setPresupuesto((prev) => ({
      ...prev,
      numeroDeIdiomas: prev.numeroDeIdiomas + 1,
    }));
    sumarPresupuesto(costPerUnit);
  };

  const handleDecrementNumIdiomas = () => {
    setPresupuesto((prev) => ({
      ...prev,
      numeroDeIdiomas: prev.numeroDeIdiomas - 1,
    }));
    sumarPresupuesto(-costPerUnit);
  };
  const openPopup = (content: string) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent("");
  };

  return (
    <div>
      {/* Controles Incrementales */}
      <div className="mt-4 flex flex-col px-9 space-y-4">
        {/* Control de Número de Páginas */}
        <div className="flex justify-between items-center gap-8">
          <span className="font-semibold">Número de páginas</span>
          <div className="flex items-center gap-6">
            <div className="flex items-center border rounded-md">
              <button
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                onClick={() => numeroDePaginas && handleDecrementNumPages()}
              >
                -
              </button>
              <span className="px-4">{numeroDePaginas}</span>
              <button
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                onClick={handleIncrementNumPages}
              >
                +
              </button>
            </div>
            <AiOutlineQuestionCircle
              size={24}
              className="text-blue-500 cursor-pointer"
              onClick={() =>
                openPopup(
                  "El número de páginas se refiere a la cantidad de secciones que tendrá tu sitio web."
                )
              }
            />
          </div>
        </div>

        {/* Control de Número de Lenguajes */}
        <div className="flex justify-between items-center gap-4">
          <span className="font-semibold">Número de lenguajes</span>
          <div className="flex items-center gap-6">
            <div className="flex items-center border rounded-md">
              <button
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                onClick={() => numeroDeIdiomas && handleDecrementNumIdiomas()}
              >
                -
              </button>
              <span className="px-4">{numeroDeIdiomas}</span>
              <button
                className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                onClick={handleIncrementNumIdiomas}
              >
                +
              </button>
            </div>
            <AiOutlineQuestionCircle
              size={24}
              className="text-blue-500 cursor-pointer"
              onClick={() =>
                openPopup(
                  "El número de lenguajes indica cuántos idiomas estarán disponibles en el sitio web."
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-xl font-bold mb-4">Información</h2>
            <p className="text-gray-700 mb-4">{popupContent}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closePopup}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
