export enum CardsEnum {
  Seo = "Seo",
  Ads = "Ads",
  Web = "Web",
}

export interface Presupuesto {
  nombre: string;
  telefono: string;
  email: string;
  precioTotal: number;
  fecha: Date;
  [CardsEnum.Seo]: false;
  [CardsEnum.Ads]: false;
  [CardsEnum.Web]: false;
  numeroDePaginas: number;
  numeroDeIdiomas: number;
}
