import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import {Producto} from 'src/app/interfaces/producto.interface';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  //variables
  carro:Producto[] = [];
 
  producto:Producto|any =null;
  busqueda:string="";
  
  

  agregarcarro(item: any) {
    this.productoService.aniadirCarro(item);
      
      // this.carro.push(item);
      // console.log(item)
      // console.log("nombre añadido al carro", item.nombre);
    
  }

  detalle(itemdetalle_id:string) {
    console.log(itemdetalle_id)
    
  }

  buscar(){
    console.log(this.busqueda)


  }


  
  constructor(public productoService: ProductoService) { 
    console.log("Objeto desde el component==>", productoService);
    

  }

  ngOnInit(): void {
  }

}
