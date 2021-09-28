import { Component, OnInit } from '@angular/core';
import {ProductosComponent} from 'src/app/compartida/productos/productos.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  

  constructor() { }

  // agregarcarro(item_id:string) {
  //   console.log(item_id)
  //   this.carro.push(item_id);
  //   console.log("por aca pasa")
    
  // }


  ngOnInit(): void {
  }

}
