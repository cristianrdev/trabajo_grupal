import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//interfases
import {Producto} from '../interfaces/producto.interface';
import {Direccion} from '../interfaces/direccion.interface';
import {Pago} from '../interfaces/pago.interface';



@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  
  productos: Producto|any={};
  productos_filtrados: Producto[]|any = [];
  direccion: Direccion[]|any = [];
  pago: Pago[]|any = [];


  carro_compras: Producto[] = []
  constructor(private http:HttpClient) {
    this.cargarProductos();
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

  aniadirDireccion(direcc: any){
    this.direccion = direcc;
    console.log("agregada la direccion", direcc);


  }


  aniadirPago(pag: any){
    this.pago = pag;
    console.log("agregado el pago", pag);
    

  }



  eliminarCarro(elemento: any){
    elemento.stock=elemento.stock+1
    let indice = this.carro_compras.lastIndexOf(elemento) //obtiene el ultimo indice del elemento a borrar
    this.carro_compras.splice(indice, 1) //borra del carro de compras segun el índice obtenido

    
    // this.carro_compras = this.carro_compras.filter(item => item!==elemento) este metodo borraría todos los parecidos
    //sería inutil si hay mas de un producto similar en el carro de compras

  }


}
