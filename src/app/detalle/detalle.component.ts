import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
    id: string = "";
  
    constructor(private activatedRoute: ActivatedRoute, public productoService: ProductoService) {}
    

    agregarcarro(item: any) {
      this.productoService.aniadirCarro(item);  
      }



    ngOnInit(): void {
      this.activatedRoute.params.subscribe(paramsId => {
        this.id = paramsId.id;
    

      });
  
    }

  

}
