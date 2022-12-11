import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  constructor(private api: ApiService, private route: Router) { }
  name = ""
  address = ""
  email = ""
  phone = ""
  username = ""
  password = ""

  readValues = () => {
    let data = {
      "name": this.name,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "username": this.username,
      "password": this.password
    }
    this.api.userReg(data).subscribe(
      (response: any) => {
        if (response.status == "success") {
          console.log(response)
          alert("User Registration Successfull")
          this.route.navigate(["/userlogin"])
        } else {
          alert("User Registration Failed")
        }
      }
    )
  }
}
