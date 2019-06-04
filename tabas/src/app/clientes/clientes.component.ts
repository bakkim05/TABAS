import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface clientesList{
  nombre : string;
  tel : number;
  correo : string;
  carnet : number;
}

const CLIENTES_DATA : clientesList[] =
[{
  "nombre": "Asher Tythe",
  "tel": 82796586,
  "correo": "atythe0@tmall.com",
  "carnet": 2013732714
}, {
  "nombre": "Jandy Gout",
  "tel": 64906774,
  "correo": "jgout1@umich.edu",
  "carnet": 2011584543
}, {
  "nombre": "Kaiser Veal",
  "tel": 63724351,
  "correo": "kveal2@sohu.com",
  "carnet": 2017434864
}, {
  "nombre": "Susan McAw",
  "tel": 81971339,
  "correo": "smcaw3@geocities.com",
  "carnet": 2012201407
}, {
  "nombre": "Rori Kissock",
  "tel": 63527873,
  "correo": "rkissock4@ask.com",
  "carnet": 2012079057
}, {
  "nombre": "Britteny Geake",
  "tel": 81438453,
  "correo": "bgeake5@indiegogo.com",
  "carnet": 2012505373
}, {
  "nombre": "Karon Rickardes",
  "tel": 75748994,
  "correo": "krickardes6@buzzfeed.com",
  "carnet": 2017284142
}, {
  "nombre": "Marti Timmons",
  "tel": 83306222,
  "correo": "mtimmons7@drupal.org",
  "carnet": 2018714713
}, {
  "nombre": "Brendon Cleft",
  "tel": 82613481,
  "correo": "bcleft8@last.fm",
  "carnet": 2015756056
}, {
  "nombre": "Annmaria Jenicke",
  "tel": 66136901,
  "correo": "ajenicke9@constantcontact.com",
  "carnet": 2015735845
}]




@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['nombre','tel','correo','carnet'];
  dataSource = new MatTableDataSource(CLIENTES_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
