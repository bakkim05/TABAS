import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface bagCartList {
  id : number;
  brand : string;
  model : string;
  sec_code : number
}

const BAGCART_DATA : bagCartList[] = 
[{
  "id": 1,
  "brand": "Honda",
  "model": "S2000",
  "sec_code": 8354
}, {
  "id": 2,
  "brand": "Mercedes-Benz",
  "model": "S-Class",
  "sec_code": 9356
}, {
  "id": 3,
  "brand": "Nissan",
  "model": "Altima",
  "sec_code": 3451
}, {
  "id": 4,
  "brand": "Ford",
  "model": "Lightning",
  "sec_code": 1032
}, {
  "id": 5,
  "brand": "Scion",
  "model": "iQ",
  "sec_code": 7699
}, {
  "id": 6,
  "brand": "Buick",
  "model": "Enclave",
  "sec_code": 3536
}, {
  "id": 7,
  "brand": "Volkswagen",
  "model": "Type 2",
  "sec_code": 8013
}, {
  "id": 8,
  "brand": "Ford",
  "model": "Bronco II",
  "sec_code": 7039
}, {
  "id": 9,
  "brand": "Honda",
  "model": "Accord",
  "sec_code": 6521
}, {
  "id": 10,
  "brand": "Mazda",
  "model": "RX-8",
  "sec_code": 5385
}]




@Component({
  selector: 'app-bag-carts',
  templateUrl: './bag-carts.component.html',
  styleUrls: ['./bag-carts.component.css']
})
export class BagCartsComponent implements OnInit {

  displayedColumns: string[] = ['id','brand','model','sec_code'];
  dataSource = new MatTableDataSource(BAGCART_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
