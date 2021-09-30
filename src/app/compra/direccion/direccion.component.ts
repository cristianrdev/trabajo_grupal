import { Component, Input, OnInit } from '@angular/core';
import {Direccion} from 'src/app/interfaces/direccion.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
  @Input() pais: string = '';
  @Input() region: string = '';
  @Input() ciudad: string = '';
  @Input() calle: string = '';
  @Input() cod_postal: string = '';
  // direccion: Direccion[] | any = []



  

  registered: boolean | null = false;
  errorRegister: boolean | null = false;
  errores:string[] = [];


  constructor(public productoService: ProductoService) { }

  registrarDomicilio(){
    let direccion: Direccion = {
      pais: '',
      region: '',
      ciudad: '',
      calle: '',
      cod_postal: '',
    };
    this.registered = false;
    this.errorRegister = false;
    this.errores = [];
    if(this.pais.length<3 || this.pais==null){
      this.errores.push("El Nombre del país debe tener mínimo 3 caracteres");
      this.errorRegister = true;
    }

    if(this.region.length<3 || this.region==null){
      this.errores.push("La región debe tener mínimo 3 caracteres");
      this.errorRegister = true;
    }

    if(this.ciudad.length<3 || this.ciudad==null){
      this.errores.push("La ciudad debe tener mínimo 3 caracteres");
      this.errorRegister = true;
    }

    if(this.calle.length<3 || this.calle==null){
      this.errores.push("La calle debe tener mínimo 3 caracteres");
      this.errorRegister = true;
    }
    if(this.cod_postal.length!=7 || this.cod_postal==null ){
      this.errores.push("El codigo postal debe ser de 7 dígitos");
      this.errorRegister = true;
    }

    if(!this.esNumerico(this.cod_postal)){
      this.errores.push("El codigo postal debe ser numérico");
      this.errorRegister = true;
    }

    
    if (!this.errorRegister) {
      this.registered = true;

    }

    if(this.errorRegister==false){

      console.log("Formulario aprobado")
      direccion.pais = this.pais
      direccion.region = this.region
      direccion.ciudad = this.ciudad
      direccion.calle = this.calle
      direccion.cod_postal = this.cod_postal
      this.productoService.aniadirDireccion(direccion)
      


      


    }

  }

  

  ngOnInit(): void {
  }
  esNumerico(cod: string) {
    var regex = /^[0-9]*$/;
    return regex.test(cod);
  }


}
