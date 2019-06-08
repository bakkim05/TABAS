import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-create-bag-carts',
  templateUrl: './create-bag-carts.component.html',
  styleUrls: ['./create-bag-carts.component.css']
})
export class CreateBagCartsComponent implements OnInit {

  private id = new FormControl('');
  private marca = new FormControl('');
  private modelo = new FormControl('');
  private vuelo = new FormControl('')


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){
        /**
     * Construye los headers necesarios para el REST service
     */

    var jsonPost = {"id":parseInt(this.id.value),"marca":this.marca.value,
                    "modelo":parseInt(this.modelo.value),"vuelo":parseInt(this.vuelo.value)};
    this.http.post("https://tabas.azurewebsites.net/api/bagCart",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['clientes']);
  }

}
