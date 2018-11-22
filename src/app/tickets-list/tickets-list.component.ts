import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  searchText : string;
  orderFolio = 'asc';
  folioArrow = 'minus';
  orderFecha = 'asc';
  fechaArrow = 'minus';
  tickets = [];
  paginate_five = false;
  paginate_ten = false;
  paginate_twenty = false;
  begin = 0;
  end = 0;


  obtainedTickets = [
    {
      fecha: '07-15-2016',
      folio: '1004',
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
      fecha: '07-15-2016',
      folio: '105504',
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
      fecha: '07-15-2016',
      folio: '10004400',
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
      fecha: '07-15-2016',
      folio: '10500',
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
      fecha: '07-15-2016',
      folio: '100000',
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
      fecha: '11-03-2018',
      folio: '2',
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
      fecha: '09-02-2017',
      folio: '3',
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
      fecha: '01-02-2018',
      folio: '43',
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
      fecha: '07-03-2015',
      folio: '5',
      nombre: 'Arturo',
      apellidos: 'Gomez Franciso',
      tarjeta: '1111-1111-1111-1111',
      dispositvo: false,
      tipo_problema: 'Problemas de transferencia',
      problema: 'No puede pagar',
      solucion: 'Reponer tarjeta',
      status: 'Resuelto'
    },    {
      fecha: '12-07-2018',
      folio: '6',
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
      fecha: '11-02-2017',
      folio: '76',
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

  constructor() {
    this.tickets = this.obtainedTickets;
   }

  ngOnInit() {
  }

  sortByFolio(){
    this.fechaArrow="minus"
    if(this.orderFolio == 'asc'){
      for(let i=0; i<this.tickets.length; i++){
        for(let j=0; j<this.tickets.length-i-1; j++){
          if(parseInt(this.tickets[j].folio) < parseInt(this.tickets[j+1].folio)){
            let temp = {
              fecha : this.tickets[j].fecha,
              folio : this.tickets[j].folio,
              nombre : this.tickets[j].nombre,
              apellidos : this.tickets[j].apellidos,
              tarjeta : this.tickets[j].tarjeta,
              dispositvo : this.tickets[j].dispositvo,
              tipo_problema : this.tickets[j].tipo_problema,
              problema : this.tickets[j].problema,
              solucion : this.tickets[j].solucion,
              status : this.tickets[j].status,
            }

            this.tickets[j].fecha = this.tickets[j+1].fecha
            this.tickets[j].folio = this.tickets[j+1].folio
            this.tickets[j].nombre = this.tickets[j+1].nombre
            this.tickets[j].apellidos = this.tickets[j+1].apellidos
            this.tickets[j].tarjeta = this.tickets[j+1].tarjeta
            this.tickets[j].dispositvo = this.tickets[j+1].dispositvo
            this.tickets[j].tipo_problema = this.tickets[j+1].tipo_problema
            this.tickets[j].problema = this.tickets[j+1].problema
            this.tickets[j].solucion = this.tickets[j+1].solucion
            this.tickets[j].status = this.tickets[j+1].status

            this.tickets[j+1].fecha = temp.fecha
            this.tickets[j+1].folio = temp.folio
            this.tickets[j+1].nombre = temp.nombre
            this.tickets[j+1].apellidos = temp.apellidos
            this.tickets[j+1].tarjeta = temp.tarjeta
            this.tickets[j+1].dispositvo = temp.dispositvo
            this.tickets[j+1].tipo_problema = temp.tipo_problema
            this.tickets[j+1].problema = temp.problema
            this.tickets[j+1].solucion = temp.solucion
            this.tickets[j+1].status = temp.status
          }
        }
      }
      this.orderFolio='des'
      this.folioArrow = 'arrow-up'
    }else if(this.orderFolio == 'des'){
      for(let i=0; i<this.tickets.length; i++){
        for(let j=0; j<this.tickets.length-i-1; j++){
          if(parseInt(this.tickets[j].folio) > parseInt(this.tickets[j+1].folio)){
            let temp = {
              fecha : this.tickets[j].fecha,
              folio : this.tickets[j].folio,
              nombre : this.tickets[j].nombre,
              apellidos : this.tickets[j].apellidos,
              tarjeta : this.tickets[j].tarjeta,
              dispositvo : this.tickets[j].dispositvo,
              tipo_problema : this.tickets[j].tipo_problema,
              problema : this.tickets[j].problema,
              solucion : this.tickets[j].solucion,
              status : this.tickets[j].status,
            }

            this.tickets[j].fecha = this.tickets[j+1].fecha
            this.tickets[j].folio = this.tickets[j+1].folio
            this.tickets[j].nombre = this.tickets[j+1].nombre
            this.tickets[j].apellidos = this.tickets[j+1].apellidos
            this.tickets[j].tarjeta = this.tickets[j+1].tarjeta
            this.tickets[j].dispositvo = this.tickets[j+1].dispositvo
            this.tickets[j].tipo_problema = this.tickets[j+1].tipo_problema
            this.tickets[j].problema = this.tickets[j+1].problema
            this.tickets[j].solucion = this.tickets[j+1].solucion
            this.tickets[j].status = this.tickets[j+1].status

            this.tickets[j+1].fecha = temp.fecha
            this.tickets[j+1].folio = temp.folio
            this.tickets[j+1].nombre = temp.nombre
            this.tickets[j+1].apellidos = temp.apellidos
            this.tickets[j+1].tarjeta = temp.tarjeta
            this.tickets[j+1].dispositvo = temp.dispositvo
            this.tickets[j+1].tipo_problema = temp.tipo_problema
            this.tickets[j+1].problema = temp.problema
            this.tickets[j+1].solucion = temp.solucion
            this.tickets[j+1].status = temp.status
          }
        }
      }
      this.orderFolio = 'asc'
      this.folioArrow = 'arrow-down'
    }
  }

  sortByFecha(){
    this.folioArrow='minus'
    if(this.orderFecha == 'asc'){
      for(let i=0; i<this.tickets.length; i++){
        for(let j=0; j<this.tickets.length-i-1; j++){
          let d1 = new Date(this.tickets[j].fecha);
          let d2 = new Date(this.tickets[j+1].fecha);
          if(d1 < d2){
            let temp = {
              fecha : this.tickets[j].fecha,
              folio : this.tickets[j].folio,
              nombre : this.tickets[j].nombre,
              apellidos : this.tickets[j].apellidos,
              tarjeta : this.tickets[j].tarjeta,
              dispositvo : this.tickets[j].dispositvo,
              tipo_problema : this.tickets[j].tipo_problema,
              problema : this.tickets[j].problema,
              solucion : this.tickets[j].solucion,
              status : this.tickets[j].status,
            }

            this.tickets[j].fecha = this.tickets[j+1].fecha
            this.tickets[j].folio = this.tickets[j+1].folio
            this.tickets[j].nombre = this.tickets[j+1].nombre
            this.tickets[j].apellidos = this.tickets[j+1].apellidos
            this.tickets[j].tarjeta = this.tickets[j+1].tarjeta
            this.tickets[j].dispositvo = this.tickets[j+1].dispositvo
            this.tickets[j].tipo_problema = this.tickets[j+1].tipo_problema
            this.tickets[j].problema = this.tickets[j+1].problema
            this.tickets[j].solucion = this.tickets[j+1].solucion
            this.tickets[j].status = this.tickets[j+1].status

            this.tickets[j+1].fecha = temp.fecha
            this.tickets[j+1].folio = temp.folio
            this.tickets[j+1].nombre = temp.nombre
            this.tickets[j+1].apellidos = temp.apellidos
            this.tickets[j+1].tarjeta = temp.tarjeta
            this.tickets[j+1].dispositvo = temp.dispositvo
            this.tickets[j+1].tipo_problema = temp.tipo_problema
            this.tickets[j+1].problema = temp.problema
            this.tickets[j+1].solucion = temp.solucion
            this.tickets[j+1].status = temp.status
          }
        }
      }
      this.orderFecha='des'
      this.fechaArrow = 'arrow-up'
    }else if(this.orderFecha == 'des'){
      for(let i=0; i<this.tickets.length; i++){
        for(let j=0; j<this.tickets.length-i-1; j++){
          let d1 = new Date(this.tickets[j].fecha);
          let d2 = new Date(this.tickets[j+1].fecha);
          if(d1 > d2){
            let temp = {
              fecha : this.tickets[j].fecha,
              folio : this.tickets[j].folio,
              nombre : this.tickets[j].nombre,
              apellidos : this.tickets[j].apellidos,
              tarjeta : this.tickets[j].tarjeta,
              dispositvo : this.tickets[j].dispositvo,
              tipo_problema : this.tickets[j].tipo_problema,
              problema : this.tickets[j].problema,
              solucion : this.tickets[j].solucion,
              status : this.tickets[j].status,
            }

            this.tickets[j].fecha = this.tickets[j+1].fecha
            this.tickets[j].folio = this.tickets[j+1].folio
            this.tickets[j].nombre = this.tickets[j+1].nombre
            this.tickets[j].apellidos = this.tickets[j+1].apellidos
            this.tickets[j].tarjeta = this.tickets[j+1].tarjeta
            this.tickets[j].dispositvo = this.tickets[j+1].dispositvo
            this.tickets[j].tipo_problema = this.tickets[j+1].tipo_problema
            this.tickets[j].problema = this.tickets[j+1].problema
            this.tickets[j].solucion = this.tickets[j+1].solucion
            this.tickets[j].status = this.tickets[j+1].status

            this.tickets[j+1].fecha = temp.fecha
            this.tickets[j+1].folio = temp.folio
            this.tickets[j+1].nombre = temp.nombre
            this.tickets[j+1].apellidos = temp.apellidos
            this.tickets[j+1].tarjeta = temp.tarjeta
            this.tickets[j+1].dispositvo = temp.dispositvo
            this.tickets[j+1].tipo_problema = temp.tipo_problema
            this.tickets[j+1].problema = temp.problema
            this.tickets[j+1].solucion = temp.solucion
            this.tickets[j+1].status = temp.status
          }
        }
      }
      this.orderFecha = 'asc'
      this.fechaArrow = 'arrow-down'
    }
  }

  paginateFive(){
    this.paginate_five = true
    this.paginate_ten = false
    this.paginate_twenty = false
    this.begin = 0
    this.end = 5
    this.tickets = this.obtainedTickets.slice(this.begin, this.end)
  }

  paginateTen(){
    this.paginate_five = false
    this.paginate_ten = true
    this.paginate_twenty = false
    this.begin = 0
    this.end = 10
    this.tickets = this.obtainedTickets.slice(this.begin, this.end)
  }

  paginateTwenty(){
    this.paginate_five = false
    this.paginate_ten = false
    this.paginate_twenty = true
    this.begin = 0
    this.end = 20
    this.tickets = this.obtainedTickets.slice(this.begin, this.end)
  }

  nextPage(){
    if(this.paginate_five){
      this.begin += 5
      this.end += 5
      if(this.obtainedTickets.slice(this.begin, this.end).length != 0){
        this.tickets = this.obtainedTickets.slice(this.begin, this.end)
      }else{
        this.begin -= 5
        this.end -= 5
      }
    }else if(this.paginate_ten){
      this.begin += 10
      this.end += 10
      if(this.obtainedTickets.slice(this.begin, this.end).length != 0){
        this.tickets = this.obtainedTickets.slice(this.begin, this.end)
      }else{
        this.begin -= 10
        this.end -= 10
      }
    }else if(this.paginate_twenty){
      this.begin += 20
      this.end += 20
      if(this.obtainedTickets.slice(this.begin, this.end).length != 0){
        this.tickets = this.obtainedTickets.slice(this.begin, this.end)
      }else{
        this.begin -= 20
        this.end -= 20
      }
    }
  }

  previousPage(){
    if(this.paginate_five){
      this.begin -= 5
      this.end -= 5
      if(this.obtainedTickets.slice(this.begin, this.end).length != 0){
        this.tickets = this.obtainedTickets.slice(this.begin, this.end)
      }else{
        this.begin += 5
        this.end += 5
      }
    }else if(this.paginate_ten){
      this.begin -= 10
      this.end -= 10
      if(this.obtainedTickets.slice(this.begin, this.end).length != 0){
        this.tickets = this.obtainedTickets.slice(this.begin, this.end)
      }else{
        this.begin += 10
        this.end += 10
      }
    }else if(this.paginate_twenty){
      this.begin -= 20
      this.end -= 20
      if(this.obtainedTickets.slice(this.begin, this.end).length != 0){
        this.tickets = this.obtainedTickets.slice(this.begin, this.end)
      }else{
        this.begin += 20
        this.end += 20
      }
    }
  }

}
