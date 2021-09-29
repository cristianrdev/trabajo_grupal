import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import {Lista_producto} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  
  productos: Producto|any={};
  productos_filtrados: Producto[]|any = [];

  carro_compras: Producto[] = []
  constructor(private http:HttpClient) {
    this.cargarProductos();
    // this.cargarProductosdos();
    console.log("producto service");
   }

  cargarProductos(){
    this.http.get('assets/data/productos.json').subscribe( (respuesta: any) => {
      this.productos = respuesta;
      this.productos = this.productos["productos"];
    })
  }

  aniadirCarro(elemento: any){
    if(elemento.stock>=1){
      elemento.stock=elemento.stock-1
      this.carro_compras.push(elemento)
      console.log("Stock", elemento.stock);
      

    }else{
      alert("Sin Stock");
    }

  }



  eliminarCarro(elemento: any){
    // this.carro_compras.
  }


}
