import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';

@Component({
  selector: 'app-tickets-info',
  templateUrl: './tickets-info.component.html',
  styleUrls: ['./tickets-info.component.css']
})
export class TicketsInfoComponent implements OnInit {

  buttonState = false;
  isReadOnly = false;
  saveButton = true;
  editButton = false;

  savedTicket: Ticket = {
    fecha: '',
    folio: '',
    nombre: '',
    apellidos: '',
    tarjeta: '',
    dispositvo: false,
    tipo_problema: '',
    problema: '',
    solucion: '',
    status: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onClickButton(){
    if (this.buttonState == true){
      this.isReadOnly = false;
      this.buttonState = false;
      this.saveButton = true;
      this.editButton = false;
    } else {
      this.buttonState = true;
      this.isReadOnly = true;
      this.saveButton = false;
      this.editButton = true;
    }
  }

}
