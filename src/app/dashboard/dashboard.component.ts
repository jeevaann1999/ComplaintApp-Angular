import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private api:ApiService){
    api.getAllComplaint().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  data:any=[]
}
