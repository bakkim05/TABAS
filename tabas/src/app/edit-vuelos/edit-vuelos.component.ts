import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-edit-vuelos',
  templateUrl: './edit-vuelos.component.html',
  styleUrls: ['./edit-vuelos.component.css']
})
export class EditVuelosComponent implements OnInit {

  private vuelo = new FormControl('');
  private avion = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  sendPost(){

    var jsonPost = {"vuelo":parseInt(this.vuelo.value), "avion":parseInt(this.avion.value)};

    this.http.put("https://tabas.azurewebsites.net/api/vuelos",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['vuelos']);
  }

}
