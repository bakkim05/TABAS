import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommsService {

  constructor(private http : HttpClient) {}

  
  public getUsers(){
    return this.http.get<any[]>('https://my-json-server.typicode.com/bakkim05/clientes/users');
  }
}