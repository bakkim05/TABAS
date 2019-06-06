import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {

  private nombre = new FormControl('');
  private apellido = new FormControl('');
  private telefono = new FormControl('');
  private correo = new FormControl('');
  private carnet = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createJSON(){
    var sent : any = {};

    sent.code = "crearClientes";

    sent.cliente = {};
    sent.cliente.nombre = this.nombre.value;
    sent.cliente.apellido = this.apellido.value;
    sent.cliente.tel = parseInt(this.telefono.value);
    sent.cliente.correo = this.correo.value;
    sent.cliente.carnet = parseInt(this.carnet.value);


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
