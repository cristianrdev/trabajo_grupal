import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pago } from 'src/app/interfaces/pago.interface';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  tipo_tarjeta: string = '';
  nombre_cliente: string = '';
  numero_tarjeta: string = '';
  codigo_seguridad: string = '';
  mes_exp: string = '';
  anio_exp: string = '';
  

  registered: boolean | null = false;
  errorRegister: boolean | null = false;
  errores:string[] = [];

  constructor(public productoService: ProductoService, private router: Router) { 
    console.log("Dirección", productoService.direccion)
    this.tipo_tarjeta = productoService.pago.tipo_tarjeta
    this.nombre_cliente = productoService.pago.nombre_cliente
    this.numero_tarjeta = productoService.pago.numero_tarjeta
    this.codigo_seguridad = productoService.pago.codigo_seguridad
    this.mes_exp = productoService.pago.mes_exp
    this.anio_exp = productoService.pago.anio_exp

  }

  ngOnInit(): void {
  }


  confirmarPago(){

    let pago: Pago = {
      tipo_tarjeta: '',
      nombre_cliente:'',
      numero_tarjeta:'',
      codigo_seguridad:'',
      mes_exp: '',
      anio_exp:'',

    }


    this.registered = false;
    this.errorRegister = false;
    this.errores = [];

    if(this.tipo_tarjeta==""){
      this.errores.push("Ingrese el tipo de tarjeta");
      this.errorRegister = true;

    }
    if(this.nombre_cliente.length<3 || this.anio_exp==null ){
      this.errores.push("Nombre del cliente mayor a 3 caracteres");
      this.errorRegister = true;
    }

    if(this.codigo_seguridad.length!=3 || this.codigo_seguridad==null || !this.esNumerico(this.codigo_seguridad)){
      this.errores.push("El código debe ser de 3 dígitos y sólo números");
      this.errorRegister = true;
    }

    if(this.mes_exp==""){
      this.errores.push("Ingrese mes");
      this.errorRegister = true;
    }

    if(this.anio_exp.length!=4 || this.anio_exp==null || !this.esNumerico(this.anio_exp) ){
      this.errores.push("Año inválido");
      this.errorRegister = true;
    }



    if(!this.tarjValida(this.numero_tarjeta)){
      this.errores.push("Número de tarjeta inválida");
      this.errorRegister = true;

    }

    if (!this.errorRegister) {
      this.registered = true;
     
    }

    if(this.errorRegister==false){

      console.log("Formulario pago aprobado")
      pago.tipo_tarjeta = this.tipo_tarjeta
      pago.nombre_cliente = this.nombre_cliente
      pago.numero_tarjeta = this.numero_tarjeta
      pago.codigo_seguridad = this.codigo_seguridad
      pago.mes_exp = this.mes_exp
      pago.anio_exp = this.anio_exp
      this.productoService.aniadirPago(pago)
      this.router.navigate(['/resumencompra']);
         
      // direccion.pais = this.pais
      // direccion.region = this.region
      // direccion.ciudad = this.ciudad
      // direccion.calle = this.calle
      // direccion.cod_postal = this.cod_postal
      // this.productoService.aniadirDireccion(direccion)
      // this.router.navigate(['/pago']);
     
      // tipo_tarjeta: '',
      // nombre_cliente:'',
      // numero_tarjeta:'',
      // codigo_seguridad:'',
      // mes_exp: '',
      // anio_exp:'',

    }

    // this.productoService.aniadirPago(){}

  }

  esNumerico(cod: string) {
    var regex = /^[0-9]*$/;
    return regex.test(cod);
  }

  tarjValida(num: string){
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/;
    return regex.test(num)
  }

}
