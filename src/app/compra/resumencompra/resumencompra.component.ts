import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumencompra',
  templateUrl: './resumencompra.component.html',
  styleUrls: ['./resumencompra.component.css']
})
export class ResumencompraComponent implements OnInit {

  constructor(public productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

}
