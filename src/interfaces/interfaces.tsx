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
  [CardsEnum.Seo]: boolean;
  [CardsEnum.Ads]: boolean;
  [CardsEnum.Web]: boolean;
  numeroDePaginas: number;
  numeroDeIdiomas: number;
}
