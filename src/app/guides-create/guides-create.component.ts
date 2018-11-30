import { Component, OnInit } from '@angular/core';

//Http
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-guides-create',
  templateUrl: './guides-create.component.html',
  styleUrls: ['./guides-create.component.css']
})
export class GuidesCreateComponent implements OnInit {

  obtainedGuias : object[] = [];

  Auth: string;
  user: string = "gmeono@miflink.com";
  host: string = "api.miflink.com";
  LoginURL: string = "https://"  + this.host +  "/api/v1/administrador/auth/";
  GuiasDetailURL: string = "https://"  + this.host +  "/api/v1/administrador/send_cards/";

  GuiasDetail(): boolean {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.LoginURL,
      {
        email: "sergioja@miflink.com",
        password: "Flinkrules10."
      }
      , options).subscribe(data => {
        this.Auth = String("JWT " + String(data.json()['token']));

        headers.append('Authorization', this.Auth);
        let options = new RequestOptions({ headers: headers });

        this.http.get(this.GuiasDetailURL, options)        
        
          .subscribe(result => {
            const guiasJson = Array.of(result.json());
            const g = []
            for(let i=0; i<guiasJson[0].length; i++){
              if(guiasJson[0][i].guide_number == "S/G" || guiasJson[0][i].guide_number == "SG"){
                g.push(guiasJson[0][i])
              }
            }
            this.obtainedGuias = g
            this.guias = g
            
            return true;
          },
            error => {
              console.log("Error peticion GuiasDetail");
              return false;
            });
      },
        error => {
          console.log("Error peticion login");
          return false;
        }
      );

      return true;

  }


  searchText : string;
  clickedFive: string;
  clickedTen: string;
  clickedTwenty: string;
  orderFondeo = 'asc';
  fondeoArrow = 'minus';
  orderUsuario = 'asc';
  usuarioArrow = 'minus';
  orderFecha = 'asc';
  fechaArrow = 'minus';
  guias = [];
  paginate_five = false;
  paginate_ten = false;
  paginate_twenty = false;
  begin = 0;
  end = 0;

  constructor(private http: Http) {
    this.GuiasDetail();
  }

  ngOnInit() {
  }

  sortByFondeo(){
    this.fondeoArrow="minus"
    if(this.orderFondeo == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(parseInt(this.guias[j].fondeo) < parseInt(this.guias[j+1].fondeo)){
            let temp = {
              amaterno : this.guias[j].amaterno,
              apaterno : this.guias[j].apaterno,
              calle : this.guias[j].calle,
              colonia : this.guias[j].colonia,
              cp : this.guias[j].cp,
              email : this.guias[j].email,
              emboso : this.guias[j].emboso,
              enviada : this.guias[j].enviada,
              envio : this.guias[j].envio,
              esperada : this.guias[j].esperada,
              estado : this.guias[j].estado,
              fondeo : this.guias[j].fondeo,
              guide_number : this.guias[j].guide_number,
              id : this.guias[j].id,
              municipio : this.guias[j].municipio,
              nombre : this.guias[j].nombre,
              number : this.guias[j].number,
              numero_celular : this.guias[j].numero_celular,
              numero_ext : this.guias[j].numero_ext,
              numero_int : this.guias[j].numero_int,
              solicitada : this.guias[j].solicitada,
              status : this.guias[j].status
            }

            this.guias[j].amaterno = this.guias[j+1].amaterno,
            this.guias[j].apaterno = this.guias[j+1].apaterno,
            this.guias[j].calle = this.guias[j+1].calle,
            this.guias[j].colonia = this.guias[j+1].colonia,
            this.guias[j].cp = this.guias[j+1].cp,
            this.guias[j].email = this.guias[j+1].email,
            this.guias[j].emboso = this.guias[j+1].emboso,
            this.guias[j].enviada = this.guias[j+1].enviada,
            this.guias[j].envio = this.guias[j+1].envio,
            this.guias[j].esperada = this.guias[j+1].esperada,
            this.guias[j].estado = this.guias[j+1].estado,
            this.guias[j].fondeo = this.guias[j+1].fondeo,
            this.guias[j].guide_number = this.guias[j+1].guide_number,
            this.guias[j].id = this.guias[j+1].id,
            this.guias[j].municipio = this.guias[j+1].municipio,
            this.guias[j].nombre = this.guias[j+1].nombre,
            this.guias[j].number = this.guias[j+1].number,
            this.guias[j].numero_celular = this.guias[j+1].numero_celular,
            this.guias[j].numero_ext = this.guias[j+1].numero_ext,
            this.guias[j].numero_int = this.guias[j+1].numero_int,
            this.guias[j].solicitada = this.guias[j+1].solicitada,
            this.guias[j].status = this.guias[j+1].status
            
            this.guias[j+1].amaterno = temp.amaterno,
            this.guias[j+1].apaterno = temp.apaterno,
            this.guias[j+1].calle = temp.calle,
            this.guias[j+1].colonia = temp.colonia,
            this.guias[j+1].cp = temp.cp,
            this.guias[j+1].email = temp.email,
            this.guias[j+1].emboso = temp.emboso,
            this.guias[j+1].enviada = temp.enviada,
            this.guias[j+1].envio = temp.envio,
            this.guias[j+1].esperada = temp.esperada,
            this.guias[j+1].estado = temp.estado,
            this.guias[j+1].fondeo = temp.fondeo,
            this.guias[j+1].guide_number = temp.guide_number,
            this.guias[j+1].id = temp.id,
            this.guias[j+1].municipio = temp.municipio,
            this.guias[j+1].nombre = temp.nombre,
            this.guias[j+1].number = temp.number,
            this.guias[j+1].numero_celular = temp.numero_celular,
            this.guias[j+1].numero_ext = temp.numero_ext,
            this.guias[j+1].numero_int = temp.numero_int,
            this.guias[j+1].solicitada = temp.solicitada,
            this.guias[j+1].status = temp.status
          }
        }
      }
      this.orderFondeo='des'
      this.fondeoArrow = 'arrow-up'
      this.usuarioArrow = 'minus';
      this.fechaArrow = 'minus';
    }else if(this.orderFondeo == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(parseInt(this.guias[j].fondeo) > parseInt(this.guias[j+1].fondeo)){
            let temp = {
              amaterno : this.guias[j].amaterno,
              apaterno : this.guias[j].apaterno,
              calle : this.guias[j].calle,
              colonia : this.guias[j].colonia,
              cp : this.guias[j].cp,
              email : this.guias[j].email,
              emboso : this.guias[j].emboso,
              enviada : this.guias[j].enviada,
              envio : this.guias[j].envio,
              esperada : this.guias[j].esperada,
              estado : this.guias[j].estado,
              fondeo : this.guias[j].fondeo,
              guide_number : this.guias[j].guide_number,
              id : this.guias[j].id,
              municipio : this.guias[j].municipio,
              nombre : this.guias[j].nombre,
              number : this.guias[j].number,
              numero_celular : this.guias[j].numero_celular,
              numero_ext : this.guias[j].numero_ext,
              numero_int : this.guias[j].numero_int,
              solicitada : this.guias[j].solicitada,
              status : this.guias[j].status
            }

            this.guias[j].amaterno = this.guias[j+1].amaterno,
            this.guias[j].apaterno = this.guias[j+1].apaterno,
            this.guias[j].calle = this.guias[j+1].calle,
            this.guias[j].colonia = this.guias[j+1].colonia,
            this.guias[j].cp = this.guias[j+1].cp,
            this.guias[j].email = this.guias[j+1].email,
            this.guias[j].emboso = this.guias[j+1].emboso,
            this.guias[j].enviada = this.guias[j+1].enviada,
            this.guias[j].envio = this.guias[j+1].envio,
            this.guias[j].esperada = this.guias[j+1].esperada,
            this.guias[j].estado = this.guias[j+1].estado,
            this.guias[j].fondeo = this.guias[j+1].fondeo,
            this.guias[j].guide_number = this.guias[j+1].guide_number,
            this.guias[j].id = this.guias[j+1].id,
            this.guias[j].municipio = this.guias[j+1].municipio,
            this.guias[j].nombre = this.guias[j+1].nombre,
            this.guias[j].number = this.guias[j+1].number,
            this.guias[j].numero_celular = this.guias[j+1].numero_celular,
            this.guias[j].numero_ext = this.guias[j+1].numero_ext,
            this.guias[j].numero_int = this.guias[j+1].numero_int,
            this.guias[j].solicitada = this.guias[j+1].solicitada,
            this.guias[j].status = this.guias[j+1].status
            
            this.guias[j+1].amaterno = temp.amaterno,
            this.guias[j+1].apaterno = temp.apaterno,
            this.guias[j+1].calle = temp.calle,
            this.guias[j+1].colonia = temp.colonia,
            this.guias[j+1].cp = temp.cp,
            this.guias[j+1].email = temp.email,
            this.guias[j+1].emboso = temp.emboso,
            this.guias[j+1].enviada = temp.enviada,
            this.guias[j+1].envio = temp.envio,
            this.guias[j+1].esperada = temp.esperada,
            this.guias[j+1].estado = temp.estado,
            this.guias[j+1].fondeo = temp.fondeo,
            this.guias[j+1].guide_number = temp.guide_number,
            this.guias[j+1].id = temp.id,
            this.guias[j+1].municipio = temp.municipio,
            this.guias[j+1].nombre = temp.nombre,
            this.guias[j+1].number = temp.number,
            this.guias[j+1].numero_celular = temp.numero_celular,
            this.guias[j+1].numero_ext = temp.numero_ext,
            this.guias[j+1].numero_int = temp.numero_int,
            this.guias[j+1].solicitada = temp.solicitada,
            this.guias[j+1].status = temp.status
          }
        }
      }
      this.orderFondeo = 'asc'
      this.fondeoArrow = 'arrow-down'
      this.usuarioArrow = 'minus';
      this.fechaArrow = 'minus';
    }
  }

  sortByFecha(){
    let date_1 = []
    let date_2 = []
    this.fechaArrow='minus'
    if(this.orderFecha == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(this.guias[j].solicitada == "N/A"){
            date_1 = ["01","01","1000"]
            date_2 = this.guias[j+1].solicitada.split("-")
          }else if(this.guias[j+1].solicitada == "N/A"){
            date_1 = this.guias[j].solicitada.split("-")
            date_2 = ["01","01","1000"]
          }else{
            date_1 = this.guias[j].solicitada.split("-")
            date_2 = this.guias[j+1].solicitada.split("-")
          }
          let d1 = new Date(date_1[1]+"-"+date_1[0]+"-"+date_1[2]);
          let d2 = new Date(date_2[1]+"-"+date_2[0]+"-"+date_2[2]);
          if(d1 < d2){
            let temp = {
              amaterno : this.guias[j].amaterno,
              apaterno : this.guias[j].apaterno,
              calle : this.guias[j].calle,
              colonia : this.guias[j].colonia,
              cp : this.guias[j].cp,
              email : this.guias[j].email,
              emboso : this.guias[j].emboso,
              enviada : this.guias[j].enviada,
              envio : this.guias[j].envio,
              esperada : this.guias[j].esperada,
              estado : this.guias[j].estado,
              fondeo : this.guias[j].fondeo,
              guide_number : this.guias[j].guide_number,
              id : this.guias[j].id,
              municipio : this.guias[j].municipio,
              nombre : this.guias[j].nombre,
              number : this.guias[j].number,
              numero_celular : this.guias[j].numero_celular,
              numero_ext : this.guias[j].numero_ext,
              numero_int : this.guias[j].numero_int,
              solicitada : this.guias[j].solicitada,
              status : this.guias[j].status
            }

            this.guias[j].amaterno = this.guias[j+1].amaterno,
            this.guias[j].apaterno = this.guias[j+1].apaterno,
            this.guias[j].calle = this.guias[j+1].calle,
            this.guias[j].colonia = this.guias[j+1].colonia,
            this.guias[j].cp = this.guias[j+1].cp,
            this.guias[j].email = this.guias[j+1].email,
            this.guias[j].emboso = this.guias[j+1].emboso,
            this.guias[j].enviada = this.guias[j+1].enviada,
            this.guias[j].envio = this.guias[j+1].envio,
            this.guias[j].esperada = this.guias[j+1].esperada,
            this.guias[j].estado = this.guias[j+1].estado,
            this.guias[j].fondeo = this.guias[j+1].fondeo,
            this.guias[j].guide_number = this.guias[j+1].guide_number,
            this.guias[j].id = this.guias[j+1].id,
            this.guias[j].municipio = this.guias[j+1].municipio,
            this.guias[j].nombre = this.guias[j+1].nombre,
            this.guias[j].number = this.guias[j+1].number,
            this.guias[j].numero_celular = this.guias[j+1].numero_celular,
            this.guias[j].numero_ext = this.guias[j+1].numero_ext,
            this.guias[j].numero_int = this.guias[j+1].numero_int,
            this.guias[j].solicitada = this.guias[j+1].solicitada,
            this.guias[j].status = this.guias[j+1].status
            
            this.guias[j+1].amaterno = temp.amaterno,
            this.guias[j+1].apaterno = temp.apaterno,
            this.guias[j+1].calle = temp.calle,
            this.guias[j+1].colonia = temp.colonia,
            this.guias[j+1].cp = temp.cp,
            this.guias[j+1].email = temp.email,
            this.guias[j+1].emboso = temp.emboso,
            this.guias[j+1].enviada = temp.enviada,
            this.guias[j+1].envio = temp.envio,
            this.guias[j+1].esperada = temp.esperada,
            this.guias[j+1].estado = temp.estado,
            this.guias[j+1].fondeo = temp.fondeo,
            this.guias[j+1].guide_number = temp.guide_number,
            this.guias[j+1].id = temp.id,
            this.guias[j+1].municipio = temp.municipio,
            this.guias[j+1].nombre = temp.nombre,
            this.guias[j+1].number = temp.number,
            this.guias[j+1].numero_celular = temp.numero_celular,
            this.guias[j+1].numero_ext = temp.numero_ext,
            this.guias[j+1].numero_int = temp.numero_int,
            this.guias[j+1].solicitada = temp.solicitada,
            this.guias[j+1].status = temp.status
          }
        }
      }
      this.orderFecha='des'
      this.fechaArrow = 'arrow-up'
      this.usuarioArrow = 'minus';
      this.fondeoArrow = 'minus';
    }else if(this.orderFecha == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(this.guias[j].solicitada == "N/A"){
            date_1 = ["01","01","1000"]
            date_2 = this.guias[j+1].solicitada.split("-")
          }else if(this.guias[j+1].solicitada == "N/A"){
            date_1 = this.guias[j].solicitada.split("-")
            date_2 = ["01","01","1000"]
          }else{
            date_1 = this.guias[j].solicitada.split("-")
            date_2 = this.guias[j+1].solicitada.split("-")
          }
          let d1 = new Date(date_1[1]+"-"+date_1[0]+"-"+date_1[2]);
          let d2 = new Date(date_2[1]+"-"+date_2[0]+"-"+date_2[2]);
          if(d1 > d2){
            let temp = {
              amaterno : this.guias[j].amaterno,
              apaterno : this.guias[j].apaterno,
              calle : this.guias[j].calle,
              colonia : this.guias[j].colonia,
              cp : this.guias[j].cp,
              email : this.guias[j].email,
              emboso : this.guias[j].emboso,
              enviada : this.guias[j].enviada,
              envio : this.guias[j].envio,
              esperada : this.guias[j].esperada,
              estado : this.guias[j].estado,
              fondeo : this.guias[j].fondeo,
              guide_number : this.guias[j].guide_number,
              id : this.guias[j].id,
              municipio : this.guias[j].municipio,
              nombre : this.guias[j].nombre,
              number : this.guias[j].number,
              numero_celular : this.guias[j].numero_celular,
              numero_ext : this.guias[j].numero_ext,
              numero_int : this.guias[j].numero_int,
              solicitada : this.guias[j].solicitada,
              status : this.guias[j].status
            }

            this.guias[j].amaterno = this.guias[j+1].amaterno,
            this.guias[j].apaterno = this.guias[j+1].apaterno,
            this.guias[j].calle = this.guias[j+1].calle,
            this.guias[j].colonia = this.guias[j+1].colonia,
            this.guias[j].cp = this.guias[j+1].cp,
            this.guias[j].email = this.guias[j+1].email,
            this.guias[j].emboso = this.guias[j+1].emboso,
            this.guias[j].enviada = this.guias[j+1].enviada,
            this.guias[j].envio = this.guias[j+1].envio,
            this.guias[j].esperada = this.guias[j+1].esperada,
            this.guias[j].estado = this.guias[j+1].estado,
            this.guias[j].fondeo = this.guias[j+1].fondeo,
            this.guias[j].guide_number = this.guias[j+1].guide_number,
            this.guias[j].id = this.guias[j+1].id,
            this.guias[j].municipio = this.guias[j+1].municipio,
            this.guias[j].nombre = this.guias[j+1].nombre,
            this.guias[j].number = this.guias[j+1].number,
            this.guias[j].numero_celular = this.guias[j+1].numero_celular,
            this.guias[j].numero_ext = this.guias[j+1].numero_ext,
            this.guias[j].numero_int = this.guias[j+1].numero_int,
            this.guias[j].solicitada = this.guias[j+1].solicitada,
            this.guias[j].status = this.guias[j+1].status
            
            this.guias[j+1].amaterno = temp.amaterno,
            this.guias[j+1].apaterno = temp.apaterno,
            this.guias[j+1].calle = temp.calle,
            this.guias[j+1].colonia = temp.colonia,
            this.guias[j+1].cp = temp.cp,
            this.guias[j+1].email = temp.email,
            this.guias[j+1].emboso = temp.emboso,
            this.guias[j+1].enviada = temp.enviada,
            this.guias[j+1].envio = temp.envio,
            this.guias[j+1].esperada = temp.esperada,
            this.guias[j+1].estado = temp.estado,
            this.guias[j+1].fondeo = temp.fondeo,
            this.guias[j+1].guide_number = temp.guide_number,
            this.guias[j+1].id = temp.id,
            this.guias[j+1].municipio = temp.municipio,
            this.guias[j+1].nombre = temp.nombre,
            this.guias[j+1].number = temp.number,
            this.guias[j+1].numero_celular = temp.numero_celular,
            this.guias[j+1].numero_ext = temp.numero_ext,
            this.guias[j+1].numero_int = temp.numero_int,
            this.guias[j+1].solicitada = temp.solicitada,
            this.guias[j+1].status = temp.status
          }
        }
      }
      this.orderFecha = 'asc'
      this.fechaArrow = 'arrow-down'
      this.usuarioArrow = 'minus';
      this.fondeoArrow = 'minus';
    }
  }

  sortByUsuario(){
    this.usuarioArrow='minus'
    if(this.orderUsuario == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){ 
          if((this.guias[j].apaterno+this.guias[j].amaterno+this.guias[j].nombre) < (this.guias[j+1].apaterno+this.guias[j+1].amaterno+this.guias[j+1].nombre)){
            let temp = {
              amaterno : this.guias[j].amaterno,
              apaterno : this.guias[j].apaterno,
              calle : this.guias[j].calle,
              colonia : this.guias[j].colonia,
              cp : this.guias[j].cp,
              email : this.guias[j].email,
              emboso : this.guias[j].emboso,
              enviada : this.guias[j].enviada,
              envio : this.guias[j].envio,
              esperada : this.guias[j].esperada,
              estado : this.guias[j].estado,
              fondeo : this.guias[j].fondeo,
              guide_number : this.guias[j].guide_number,
              id : this.guias[j].id,
              municipio : this.guias[j].municipio,
              nombre : this.guias[j].nombre,
              number : this.guias[j].number,
              numero_celular : this.guias[j].numero_celular,
              numero_ext : this.guias[j].numero_ext,
              numero_int : this.guias[j].numero_int,
              solicitada : this.guias[j].solicitada,
              status : this.guias[j].status
            }

            this.guias[j].amaterno = this.guias[j+1].amaterno,
            this.guias[j].apaterno = this.guias[j+1].apaterno,
            this.guias[j].calle = this.guias[j+1].calle,
            this.guias[j].colonia = this.guias[j+1].colonia,
            this.guias[j].cp = this.guias[j+1].cp,
            this.guias[j].email = this.guias[j+1].email,
            this.guias[j].emboso = this.guias[j+1].emboso,
            this.guias[j].enviada = this.guias[j+1].enviada,
            this.guias[j].envio = this.guias[j+1].envio,
            this.guias[j].esperada = this.guias[j+1].esperada,
            this.guias[j].estado = this.guias[j+1].estado,
            this.guias[j].fondeo = this.guias[j+1].fondeo,
            this.guias[j].guide_number = this.guias[j+1].guide_number,
            this.guias[j].id = this.guias[j+1].id,
            this.guias[j].municipio = this.guias[j+1].municipio,
            this.guias[j].nombre = this.guias[j+1].nombre,
            this.guias[j].number = this.guias[j+1].number,
            this.guias[j].numero_celular = this.guias[j+1].numero_celular,
            this.guias[j].numero_ext = this.guias[j+1].numero_ext,
            this.guias[j].numero_int = this.guias[j+1].numero_int,
            this.guias[j].solicitada = this.guias[j+1].solicitada,
            this.guias[j].status = this.guias[j+1].status
            
            this.guias[j+1].amaterno = temp.amaterno,
            this.guias[j+1].apaterno = temp.apaterno,
            this.guias[j+1].calle = temp.calle,
            this.guias[j+1].colonia = temp.colonia,
            this.guias[j+1].cp = temp.cp,
            this.guias[j+1].email = temp.email,
            this.guias[j+1].emboso = temp.emboso,
            this.guias[j+1].enviada = temp.enviada,
            this.guias[j+1].envio = temp.envio,
            this.guias[j+1].esperada = temp.esperada,
            this.guias[j+1].estado = temp.estado,
            this.guias[j+1].fondeo = temp.fondeo,
            this.guias[j+1].guide_number = temp.guide_number,
            this.guias[j+1].id = temp.id,
            this.guias[j+1].municipio = temp.municipio,
            this.guias[j+1].nombre = temp.nombre,
            this.guias[j+1].number = temp.number,
            this.guias[j+1].numero_celular = temp.numero_celular,
            this.guias[j+1].numero_ext = temp.numero_ext,
            this.guias[j+1].numero_int = temp.numero_int,
            this.guias[j+1].solicitada = temp.solicitada,
            this.guias[j+1].status = temp.status
          }
        }
      }
      this.orderUsuario='des'
      this.usuarioArrow = 'arrow-up'
      this.fondeoArrow = 'minus'
      this.fechaArrow = 'minus'
    }else if(this.orderUsuario == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if((this.guias[j].apaterno+this.guias[j].amaterno+this.guias[j].nombre) > (this.guias[j+1].apaterno+this.guias[j+1].amaterno+this.guias[j+1].nombre)){
            let temp = {
              amaterno : this.guias[j].amaterno,
              apaterno : this.guias[j].apaterno,
              calle : this.guias[j].calle,
              colonia : this.guias[j].colonia,
              cp : this.guias[j].cp,
              email : this.guias[j].email,
              emboso : this.guias[j].emboso,
              enviada : this.guias[j].enviada,
              envio : this.guias[j].envio,
              esperada : this.guias[j].esperada,
              estado : this.guias[j].estado,
              fondeo : this.guias[j].fondeo,
              guide_number : this.guias[j].guide_number,
              id : this.guias[j].id,
              municipio : this.guias[j].municipio,
              nombre : this.guias[j].nombre,
              number : this.guias[j].number,
              numero_celular : this.guias[j].numero_celular,
              numero_ext : this.guias[j].numero_ext,
              numero_int : this.guias[j].numero_int,
              solicitada : this.guias[j].solicitada,
              status : this.guias[j].status
            }

            this.guias[j].amaterno = this.guias[j+1].amaterno,
            this.guias[j].apaterno = this.guias[j+1].apaterno,
            this.guias[j].calle = this.guias[j+1].calle,
            this.guias[j].colonia = this.guias[j+1].colonia,
            this.guias[j].cp = this.guias[j+1].cp,
            this.guias[j].email = this.guias[j+1].email,
            this.guias[j].emboso = this.guias[j+1].emboso,
            this.guias[j].enviada = this.guias[j+1].enviada,
            this.guias[j].envio = this.guias[j+1].envio,
            this.guias[j].esperada = this.guias[j+1].esperada,
            this.guias[j].estado = this.guias[j+1].estado,
            this.guias[j].fondeo = this.guias[j+1].fondeo,
            this.guias[j].guide_number = this.guias[j+1].guide_number,
            this.guias[j].id = this.guias[j+1].id,
            this.guias[j].municipio = this.guias[j+1].municipio,
            this.guias[j].nombre = this.guias[j+1].nombre,
            this.guias[j].number = this.guias[j+1].number,
            this.guias[j].numero_celular = this.guias[j+1].numero_celular,
            this.guias[j].numero_ext = this.guias[j+1].numero_ext,
            this.guias[j].numero_int = this.guias[j+1].numero_int,
            this.guias[j].solicitada = this.guias[j+1].solicitada,
            this.guias[j].status = this.guias[j+1].status
            
            this.guias[j+1].amaterno = temp.amaterno,
            this.guias[j+1].apaterno = temp.apaterno,
            this.guias[j+1].calle = temp.calle,
            this.guias[j+1].colonia = temp.colonia,
            this.guias[j+1].cp = temp.cp,
            this.guias[j+1].email = temp.email,
            this.guias[j+1].emboso = temp.emboso,
            this.guias[j+1].enviada = temp.enviada,
            this.guias[j+1].envio = temp.envio,
            this.guias[j+1].esperada = temp.esperada,
            this.guias[j+1].estado = temp.estado,
            this.guias[j+1].fondeo = temp.fondeo,
            this.guias[j+1].guide_number = temp.guide_number,
            this.guias[j+1].id = temp.id,
            this.guias[j+1].municipio = temp.municipio,
            this.guias[j+1].nombre = temp.nombre,
            this.guias[j+1].number = temp.number,
            this.guias[j+1].numero_celular = temp.numero_celular,
            this.guias[j+1].numero_ext = temp.numero_ext,
            this.guias[j+1].numero_int = temp.numero_int,
            this.guias[j+1].solicitada = temp.solicitada,
            this.guias[j+1].status = temp.status
          }
        }
      }
      this.orderUsuario='asc'
      this.usuarioArrow = 'arrow-down'
      this.fondeoArrow = 'minus'
      this.fechaArrow = 'minus'
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
