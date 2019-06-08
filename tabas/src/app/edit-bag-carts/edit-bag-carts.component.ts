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


  sendPost(){

    var jsonPost = {"id":parseInt(this.id.value),"marca":this.marca.value,
                    "modelo":parseInt(this.modelo.value),"vuelo":parseInt(this.vuelo.value)};
    this.http.put("https://tabas.azurewebsites.net/api/bagCart",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['clientes']);
  }

}
