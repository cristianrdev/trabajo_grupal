import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() titulo:any = null;
  @Input() detalle:any = null;
  @Input() accion:any = null;

  @Output() accionModal = new EventEmitter<string>();

  mensaje: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  //metodos
  enviarDatos(){
    // this.accion = "enviar"
    this.mensaje = "enviando mensajes al padre"
    console.log("enviando datos", this.mensaje)
    this.accionModal.emit(this.accion)
  }


}
