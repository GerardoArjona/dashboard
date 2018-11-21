import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';

@Component({
  selector: 'app-tickets-info',
  templateUrl: './tickets-info.component.html',
  styleUrls: ['./tickets-info.component.css']
})
export class TicketsInfoComponent implements OnInit {

  buttonText = 'Editar';
  buttonState = true;
  typeInput = 'password';
  isReadOnly = true;

  constructor() { }

  ngOnInit() {
  }

  onClickButton(){
    if (this.buttonState == true){
      this.isReadOnly = false;
      this.buttonText = 'Guardar';
      this. typeInput = 'text'
      this.buttonState = false;
    } else {
      this.buttonState = true;
      this.isReadOnly = true;
      this.typeInput = 'password';
      this.buttonText = 'Editar';
    }
  }

}
