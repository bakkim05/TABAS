import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css']
})
export class MaletasComponent implements OnInit {
  private MALETAS_DATA = []
  private maletasObservable : Observable<any[]>;

  displayedColumns: string[] = ['id','color','peso','costo','estado','clientid','bagCart'];
  dataSource = new MatTableDataSource(this.MALETAS_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private communicationService : CommsService) {
    this.maletasObservable = this.communicationService.getMaletas();
    this.communicationService.getMaletas().subscribe((res : any[])=>{
      this.MALETAS_DATA = res;
      this.dataSource = new MatTableDataSource(this.MALETAS_DATA);
      console.log(this.MALETAS_DATA);
    })
  }

  ngOnInit() {
  }

}
