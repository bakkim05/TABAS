import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bag-carts',
  templateUrl: './bag-carts.component.html',
  styleUrls: ['./bag-carts.component.css']
})
export class BagCartsComponent implements OnInit {
private BAGCART_DATA = []
private bagCartObservable : Observable<any[]>;

  displayedColumns: string[] = ['id','brand','model','sec_code', 'vuelo'];
  dataSource = new MatTableDataSource(this.BAGCART_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private communicationService : CommsService) {
    this.bagCartObservable = this.communicationService.getBagCarts();
    this.communicationService.getBagCarts().subscribe((res : any[])=>{
      this.BAGCART_DATA = res;
      this.dataSource = new MatTableDataSource(this.BAGCART_DATA);
      console.log(this.BAGCART_DATA);
    })
  }

  ngOnInit() {
  }

}
