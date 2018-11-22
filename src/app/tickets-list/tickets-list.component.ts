import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  searchText : string;

  tickets = [
    {
      fecha: '10-02-2018',
      folio: '1234567891',
      nombre: 'Arturo',
      apellidos: 'Gomez Franciso',
      tarjeta: '1111-1111-1111-1111',
      dispositvo: false,
      tipo_problema: 'Problemas de pago',
      problema: 'No puede pagar',
      solucion: 'Cambio de tarjeta',
      status: 'Resuelto'
    },
    {
      fecha: '11-02-2018',
      folio: '1234567892',
      nombre: 'Arturo',
      apellidos: 'Gomez Franciso',
      tarjeta: '1111-1111-1111-1111',
      dispositvo: false,
      tipo_problema: 'Problemas de pago',
      problema: 'No puede pagar',
      solucion: 'Cambio de tarjeta',
      status: 'Resuelto'
    },
    {
      fecha: '12-02-2018',
      folio: '1234567893',
      nombre: 'Arturo',
      apellidos: 'Gomez Franciso',
      tarjeta: '1111-1111-1111-1111',
      dispositvo: false,
      tipo_problema: 'Problemas de pago',
      problema: 'No puede pagar',
      solucion: 'Cambio de tarjeta',
      status: 'Resuelto'
    },
    {
      fecha: '13-02-2018',
      folio: '1234567894',
      nombre: 'Arturo',
      apellidos: 'Gomez Franciso',
      tarjeta: '1111-1111-1111-1111',
      dispositvo: false,
      tipo_problema: 'Problemas de transferencia',
      problema: 'No puede pagar',
      solucion: 'Reponer tarjeta',
      status: 'Resuelto'
    },
    {
      fecha: '14-02-2018',
      folio: '1234567895',
      nombre: 'Arturo',
      apellidos: 'Gomez Franciso',
      tarjeta: '1111-1111-1111-1111',
      dispositvo: false,
      tipo_problema: 'Problemas de transferencia',
      problema: 'No puede pagar',
      solucion: 'Reponer tarjeta',
      status: 'Resuelto'
    },    {
      fecha: '15-02-2018',
      folio: '1234567896',
      nombre: 'Arturo',
      apellidos: 'Gomez Franciso',
      tarjeta: '1111-1111-1111-1111',
      dispositvo: false,
      tipo_problema: 'Problemas de pago',
      problema: 'No puede pagar',
      solucion: 'Cambio de tarjeta',
      status: 'Resuelto'
    },
    {
      fecha: '16-02-2018',
      folio: '1234567897',
      nombre: 'Arturo',
      apellidos: 'Gomez Franciso',
      tarjeta: '1111-1111-0000-1111',
      dispositvo: false,
      tipo_problema: 'Problemas de pago',
      problema: 'No puede pagar',
      solucion: 'Cambio de tarjeta',
      status: 'Resuelto'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
