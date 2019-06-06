import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private nombre = new FormControl('');
  private apellido = new FormControl('');
  private rol = new FormControl('');
  private username = new FormControl('');
  private password = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createJSON(){
    var sent : any = {};

    sent.code = "registrarUsuario";

    sent.usuario = {};
    sent.usuario.nombre = this.nombre.value;
    sent.usuario.apellido = this.apellido.value;
    sent.usuario.rol = parseInt(this.rol.value);
    sent.usuario.username = this.username.value;
    sent.usuario.password = this.password.value;

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
