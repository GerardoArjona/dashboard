import { Component, OnInit } from '@angular/core';

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

  onClickButton(nombre){
    console.log(nombre);
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
