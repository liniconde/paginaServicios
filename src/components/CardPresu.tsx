import { ListadoPresupuesto } from "../pages/ListadoPresupuesto";
import { CardsEnum, Presupuesto } from "../interfaces/interfaces";

interface CardPresuProps {
  presupuesto: Presupuesto;
}

export const CardPresu: React.FC<CardPresuProps> = ({ presupuesto }) => {
  const { nombre, email, telefono } = presupuesto;
  return (
    <div className="border-2 py-5 px-9 shadow-xl rounded-xl overflow-auto ">
      <div className="grid grid-cols-3 items-center place-items-center">
        {/*Nombre*/}
        <div className="flex flex-col text-start">
          <h1 className="text-2xl font-bold text-gray-900">{nombre}</h1>
          <p className="text-l font-bold text-gray-500">{email}</p>
          <p className="text-l font-bold text-gray-500">{telefono}</p>
        </div>
        {/* Servicios contratados*/}
        <div className="flex flex-col text-start">
          <h2 className="text-2xl font-bold text-gray-900">
            Servicios Contratados
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            {presupuesto[CardsEnum.Seo] && (
              <li className="text-l font-bold">
                <h1 className="text-l font-bold mb-2">{"Seo"}</h1>
              </li>
            )}
            {presupuesto[CardsEnum.Ads] && (
              <li className="text-l font-bold">
                <h1 className="text-l font-bold mb-2">{"Ads"}</h1>
              </li>
            )}
            {presupuesto[CardsEnum.Web] && (
              <li className="text-l font-bold">
                <h1 className="text-l font-bold mb-2">{`Web (${presupuesto.numeroDePaginas} paginas, ${presupuesto.numeroDeIdiomas} lenguajes)`}</h1>
              </li>
            )}
          </ul>
        </div>
        <div className="text-2xl font-bold text-gray-900">
          <h2 className="text-2xl font-bold text-gray-500">Total</h2>
          {presupuesto.precioTotal}
          <span className="text-sm font-normal">€</span>
        </div>
      </div>
    </div>
  );
};
