import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {
  complaints = ""
  constructor(private api: ApiService) { }
  readValues = () => {
    let data: any =
    {
      "userid": localStorage.getItem("userInfo"),
      "complaints": this.complaints

    }
    this.api.addComplaint(data).subscribe(
      (response: any) => {
        console.log(response)
        alert("complaint added successfully")
        this.complaints = ""

      }
    )
  }

}
