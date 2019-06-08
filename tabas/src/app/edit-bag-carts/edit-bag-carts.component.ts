import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-edit-bag-carts',
  templateUrl: './edit-bag-carts.component.html',
  styleUrls: ['./edit-bag-carts.component.css']
})
export class EditBagCartsComponent implements OnInit {
  
  private id = new FormControl('');
  private marca = new FormControl('');
  private modelo = new FormControl('');
  private vuelo = new FormControl('');


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createJSON(){
    var sent : any = {};

    sent.bagCart = {};
    sent.bagCart.id = parseInt(this.id.value);
    sent.bagCart.marca = this.marca.value;
    sent.bagCart.modelo = parseInt(this.modelo.value);
    sent.bagCart.vuelo = parseInt(this.vuelo.value);

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
