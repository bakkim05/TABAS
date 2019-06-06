import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-create-maletas',
  templateUrl: './create-maletas.component.html',
  styleUrls: ['./create-maletas.component.css']
})
export class CreateMaletasComponent implements OnInit {

  private id = new FormControl('');
  private color = new FormControl('');
  private peso = new FormControl('');
  private costo = new FormControl('');
  private estado = new FormControl('');
  private correo = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createJSON(){
    var sent : any = {};

    sent.code = "crearMaletas";

    sent.maleta = {};
    sent.maleta.id = parseInt(this.id.value);
    sent.maleta.color = this.color.value;
    sent.maleta.peso = parseInt(this.peso.value);
    sent.maleta.costo = parseInt(this.costo.value);
    sent.maleta.estado = this.estado.value;
    sent.maleta.correo = this.correo.value;

    return sent;
  }

  sendPost(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'Content-Type',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS'
      })
    };

    this.http.post("http://httpbin.org/post",this.createJSON(),httpOptions)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['clientes']);
  }


}
