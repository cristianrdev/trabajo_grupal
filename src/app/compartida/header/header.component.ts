import { Component, OnInit } from '@angular/core';
import {Producto} from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // palabraBuscada: any;
  productos: Producto[] = [];
  




  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    // this.productoService.cargarProductos().subscribe((response) => {
    //   this.
    // });
  }

  busqueda(palabraBuscada: string){
    let result = this.productoService.productos
    result= this.productos.filter(producto =>{
      producto.nombre?.match(palabraBuscada)
    })
    console.log(result)

  }

  // busqueda(){
  //   if(this.palabraBuscada == ""){
  //     this.ngOnInit();
  //   }else{
  //     this.productos = this.productos.filter(response =>{
  //       return response.

  //     })
      
  //   }


  // }

}
