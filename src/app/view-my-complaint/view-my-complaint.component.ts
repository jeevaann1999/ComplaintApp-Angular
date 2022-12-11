import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-my-complaint',
  templateUrl: './view-my-complaint.component.html',
  styleUrls: ['./view-my-complaint.component.css']
})
export class ViewMyComplaintComponent {
  userId:any=""
  data:any=[]
  constructor(private api:ApiService){

    this.userId=localStorage.getItem("userInfo")
    let data:any={
      "userId":this.userId
    }
    this.api.getUserComplaints(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
}
