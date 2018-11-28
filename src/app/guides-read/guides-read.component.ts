import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides-read',
  templateUrl: './guides-read.component.html',
  styleUrls: ['./guides-read.component.css']
})
export class GuidesReadComponent implements OnInit {

  searchText : string;
  clickedFive: string;
  clickedTen: string;
  clickedTwenty: string;

  orderFondeo = 'asc';
  fondeoArrow = 'minus';
  orderFechaSolicitud = 'asc';
  fechaSolicitudArrow = 'minus';
  orderFechaEnvio = 'asc';
  fechaEnvioArrow = 'minus';
  orderFechaEsperada = 'asc';
  fechaEsperadaArrow = 'minus';
  orderNumGuia = 'asc'
  numGuiaArrow = 'minus';

  guias = [];
  paginate_five = false;
  paginate_ten = false;
  paginate_twenty = false;
  begin = 0;
  end = 0;


  obtainedGuias = [
    {
      usuario: 'Gerardo Arjona 1',
      direccion: 'Av. Morelos 23',
      fondeo: '302',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2018',
      fecha_envio: '08-16-2018',
      fecha_esperada: '06-17-2018',
      num_guia: '3'
    },
    {
      usuario: 'Gerardo Arjona 2',
      direccion: 'Av. Morelos 2530',
      fondeo: '3060',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-17-2018',
      fecha_envio: '02-16-2018',
      fecha_esperada: '05-17-2018',
      num_guia: '45'
    },
    {
      usuario: 'Gerardo Arjona 4',
      direccion: 'Av. Morelos 2530',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-18-2018',
      fecha_envio: '04-16-2018',
      fecha_esperada: '07-17-2015',
      num_guia: '67'
    },
    {
      usuario: 'Gerardo Arjona 5',
      direccion: 'Av. Morelos 2539',
      fondeo: '3400',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-19-2018',
      fecha_envio: '02-16-2015',
      fecha_esperada: '06-17-2013',
      num_guia: '63'
    },
    {
      usuario: 'Gerardo Arjona 6',
      direccion: 'Av. Morelos 2538',
      fondeo: '3007',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-24-2018',
      fecha_envio: '07-30-2018',
      fecha_esperada: '07-20-2018',
      num_guia: '693'
    },
    {
      usuario: 'Gerardo Arjona 7',
      direccion: 'Av. Morelos 2536',
      fondeo: '3500',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-09-2018',
      fecha_envio: '12-15-2018',
      fecha_esperada: '05-17-2017',
      num_guia: '683'
    },
    {
      usuario: 'Gerardo Arjona 8',
      direccion: 'Av. Morelos 2353',
      fondeo: '3300',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-12-2018',
      fecha_envio: '07-15-2003',
      fecha_esperada: '01-17-2013',
      num_guia: '1'
    },
  ];

  constructor() {
    this.guias = this.obtainedGuias;
   }

  ngOnInit() {
  }

  sortByNumGuia(){
    this.numGuiaArrow="minus"
    if(this.orderNumGuia == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(parseInt(this.guias[j].num_guia) < parseInt(this.guias[j+1].num_guia)){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderNumGuia='des'
      this.numGuiaArrow = 'arrow-up'
      this.fondeoArrow = 'minus'
      this.fechaSolicitudArrow = 'minus'
      this.fechaEnvioArrow = 'minus'
      this.fechaEsperadaArrow = 'minus'
    }else if(this.orderNumGuia == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(parseInt(this.guias[j].num_guia) > parseInt(this.guias[j+1].num_guia)){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderNumGuia = 'asc'
      this.numGuiaArrow = 'arrow-down'
      this.fondeoArrow = 'minus'
      this.fechaSolicitudArrow = 'minus'
      this.fechaEnvioArrow = 'minus'
      this.fechaEsperadaArrow = 'minus'
    }
  }


  sortByFondeo(){
    this.fondeoArrow="minus"
    if(this.orderFondeo == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(parseInt(this.guias[j].fondeo) < parseInt(this.guias[j+1].fondeo)){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFondeo='des'
      this.fondeoArrow = 'arrow-up'
      this.numGuiaArrow = 'minus'
      this.fechaSolicitudArrow = 'minus'
      this.fechaEnvioArrow = 'minus'
      this.fechaEsperadaArrow = 'minus'
    }else if(this.orderFondeo == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(parseInt(this.guias[j].fondeo) > parseInt(this.guias[j+1].fondeo)){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFondeo = 'asc'
      this.fondeoArrow = 'arrow-down'
      this.numGuiaArrow = 'minus'
      this.fechaSolicitudArrow = 'minus'
      this.fechaEnvioArrow = 'minus'
      this.fechaEsperadaArrow = 'minus'
    }
  }

  sortByFechaSolicitud(){
    this.fechaSolicitudArrow='minus'
    if(this.orderFechaSolicitud == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          let d1 = new Date(this.guias[j].fecha_solicitud);
          let d2 = new Date(this.guias[j+1].fecha_solicitud);
          if(d1 < d2){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFechaSolicitud='des'
      this.fechaSolicitudArrow = 'arrow-up'
      this.numGuiaArrow = 'minus'
      this.fondeoArrow = 'minus'
      this.fechaEnvioArrow = 'minus'
      this.fechaEsperadaArrow = 'minus'
    }else if(this.orderFechaSolicitud == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          let d1 = new Date(this.guias[j].fecha_solicitud);
          let d2 = new Date(this.guias[j+1].fecha_solicitud);
          if(d1 > d2){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFechaSolicitud = 'asc'
      this.fechaSolicitudArrow = 'arrow-down'
      this.numGuiaArrow = 'minus'
      this.fondeoArrow = 'minus'
      this.fechaEnvioArrow = 'minus'
      this.fechaEsperadaArrow = 'minus'
    }
  }

  sortByFechaEnvio(){
    this.fechaEnvioArrow='minus'
    if(this.orderFechaEnvio == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          let d1 = new Date(this.guias[j].fecha_envio);
          let d2 = new Date(this.guias[j+1].fecha_envio);
          if(d1 < d2){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFechaEnvio='des'
      this.fechaEnvioArrow = 'arrow-up'
      this.fechaSolicitudArrow = 'minus'
      this.numGuiaArrow = 'minus'
      this.fondeoArrow = 'minus'
      this.fechaEsperadaArrow = 'minus'
    }else if(this.orderFechaEnvio == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          let d1 = new Date(this.guias[j].fecha_envio);
          let d2 = new Date(this.guias[j+1].fecha_envio);
          if(d1 > d2){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFechaEnvio = 'asc'
      this.fechaEnvioArrow = 'arrow-down'
      this.fechaSolicitudArrow = 'minus'
      this.numGuiaArrow = 'minus'
      this.fondeoArrow = 'minus'
      this.fechaEsperadaArrow = 'minus'
    }
  }

  sortByFechaEsperada(){
    this.fechaEsperadaArrow='minus'
    if(this.orderFechaEsperada == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          let d1 = new Date(this.guias[j].fecha_esperada);
          let d2 = new Date(this.guias[j+1].fecha_esperada);
          if(d1 < d2){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFechaEsperada='des'
      this.fechaEsperadaArrow = 'arrow-up'
      this.fechaSolicitudArrow = 'minus'
      this.fechaEnvioArrow = 'minus'
      this.numGuiaArrow = 'minus'
      this.fondeoArrow = 'minus'
    }else if(this.orderFechaEsperada == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          let d1 = new Date(this.guias[j].fecha_esperada);
          let d2 = new Date(this.guias[j+1].fecha_esperada);
          if(d1 > d2){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFechaEsperada = 'asc'
      this.fechaEsperadaArrow = 'arrow-down'
      this.fechaSolicitudArrow = 'minus'
      this.fechaEnvioArrow = 'minus'
      this.numGuiaArrow = 'minus'
      this.fondeoArrow = 'minus'
    }
  }


  paginateFive(){
    this.paginate_five = true
    this.paginate_ten = false
    this.paginate_twenty = false
    if(this.end != 5){
      this.clickedFive = "clicked";
      this.clickedTen = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = 5
    }else{
      this.clickedFive = "unclicked";
      this.clickedTen = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = this.obtainedGuias.length;
    }
    this.guias = this.obtainedGuias.slice(this.begin, this.end)
  }

  paginateTen(){
    this.paginate_five = false
    this.paginate_ten = true
    this.paginate_twenty = false
    if(this.end != 10){
      this.clickedTen = "clicked";
      this.clickedFive = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = 10
    }else{
      this.clickedFive = "unclicked";
      this.clickedTen = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = this.obtainedGuias.length;
    }
    this.guias = this.obtainedGuias.slice(this.begin, this.end)
  }

  paginateTwenty(){
    this.paginate_five = false
    this.paginate_ten = false
    this.paginate_twenty = true
    if(this.end != 20){
      this.clickedTwenty = "clicked";
      this.clickedFive = "unclicked";
      this.clickedTen = "unclicked";
      this.begin = 0
      this.end = 20
    }else{
      this.clickedFive = "unclicked";
      this.clickedTen = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = this.obtainedGuias.length;
    }
    this.guias = this.obtainedGuias.slice(this.begin, this.end)
  }

  nextPage(){
    if(this.paginate_five){
      this.begin += 5
      this.end += 5
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin -= 5
        this.end -= 5
      }
    }else if(this.paginate_ten){
      this.begin += 10
      this.end += 10
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin -= 10
        this.end -= 10
      }
    }else if(this.paginate_twenty){
      this.begin += 20
      this.end += 20
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
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
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin += 5
        this.end += 5
      }
    }else if(this.paginate_ten){
      this.begin -= 10
      this.end -= 10
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin += 10
        this.end += 10
      }
    }else if(this.paginate_twenty){
      this.begin -= 20
      this.end -= 20
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin += 20
        this.end += 20
      }
    }
  }

}
