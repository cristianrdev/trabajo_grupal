import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute, public productoService: ProductoService) {
    // productoService.productos[0];
    // console.log("producto seleccionado", productoService.productos)

   }
  id: string = "";



  ngOnInit(): void {
    // let id = +this._route.snapshot.paramMap.get;
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      console.log(this.id);
      
      // this.productoService.productos.id[this.id];
      console.log("selecccionaddoo", this.productoService.productos.nombre);

  });
 
  }

  

}
