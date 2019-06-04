import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface maletasList{
  id : number;
  color : string;
  weight : number;
  cost : number;
  state : string;
  cliente : string;
}

const MALETAS_DATA : maletasList[] =
[{
  "id": 1,
  "color": "Mauv",
  "weight": 22,
  "cost": 34,
  "state": "Texas",
  "cliente": "Nalani Brown"
}, {
  "id": 2,
  "color": "Yellow",
  "weight": 86,
  "cost": 63,
  "state": "Florida",
  "cliente": "Franklyn Pavlenko"
}, {
  "id": 3,
  "color": "Maroon",
  "weight": 20,
  "cost": 64,
  "state": "California",
  "cliente": "Jaquelin Toffts"
}, {
  "id": 4,
  "color": "Mauv",
  "weight": 17,
  "cost": 64,
  "state": "Pennsylvania",
  "cliente": "Marnia Licquorish"
}, {
  "id": 5,
  "color": "Yellow",
  "weight": 16,
  "cost": 27,
  "state": "California",
  "cliente": "Ulric Linklater"
}, {
  "id": 6,
  "color": "Mauv",
  "weight": 98,
  "cost": 52,
  "state": "Virginia",
  "cliente": "Nico Whatman"
}, {
  "id": 7,
  "color": "Maroon",
  "weight": 33,
  "cost": 21,
  "state": "Louisiana",
  "cliente": "Junina Korting"
}, {
  "id": 8,
  "color": "Orange",
  "weight": 13,
  "cost": 46,
  "state": "North Carolina",
  "cliente": "Tarah Burds"
}, {
  "id": 9,
  "color": "Blue",
  "weight": 90,
  "cost": 69,
  "state": "Alabama",
  "cliente": "Tandi Heighway"
}, {
  "id": 10,
  "color": "Orange",
  "weight": 83,
  "cost": 42,
  "state": "Minnesota",
  "cliente": "Elga Joblin"
}]


@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css']
})
export class MaletasComponent implements OnInit {

  displayedColumns: string[] = ['id','color','weight','cost','state','cliente'];
  dataSource = new MatTableDataSource(MALETAS_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor() { }

  ngOnInit() {
  }

}
