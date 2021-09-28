export interface Producto {
   
    id?: number;
    nombre?: string;
    Fabricante?: string;
    precio?: number;
    imgSrc?: string;
}


export interface Lista_producto {
    productos?: Producto[];
  }
  

