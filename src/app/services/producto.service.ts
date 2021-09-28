import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import {Lista_producto} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})


export class ProductoService {
  url = 'assets/data/productos.json'
  productos: Producto|any={};
  productosdos: Producto|any={};
  lista_productos : Lista_producto[] = [];
  carro_compras: Producto[] = []



  constructor(private http:HttpClient) {

    this.cargarProductos();
    
    // this.cargarProductosdos();
    console.log("producto service");
   }



  cargarProductos(){
    this.http.get('assets/data/productos.json').subscribe( (respuesta: any) => {
      this.productos = respuesta;
      // this.lista_productos = 
      this.productos = this.productos["productos"];



    })

  }

  aniadirCarro(carro_compras: any){
    this.carro_compras.push(carro_compras)
    console.log(this.carro_compras)

  }



    

}
