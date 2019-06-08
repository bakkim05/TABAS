import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-cerrar-bag-carts',
  templateUrl: './cerrar-bag-carts.component.html',
  styleUrls: ['./cerrar-bag-carts.component.css']
})
export class CerrarBagCartsComponent implements OnInit {

  private id = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  sendPost(){
    // Estructura de JSON a enviar
    var jsonPost = {"id":parseInt(this.id.value)};

    // servidor REST a la cual se manda la informacion
    this.http.put("https://tabas.azurewebsites.net/api/bagCart",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['bagCarts']);
  }


}
 