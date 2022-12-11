import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  userLogin = (data: any) => 
  {
    return this.http.post("http://localhost:8080/userlogin", data);
  }

  userReg = (data: any) => 
  {
    return this.http.post("http://localhost:8080/userreg", data);
  }

  getUserById = (data: any) =>
  {
    return this.http.post("http://localhost:8080/getUserById", data);
  }
  addComplaint = (data:any)=>
  {
    return this.http.post("http://localhost:8080/addcomplaint", data)
  }
  getAllComplaint = ()=>
  {
    return this.http.get("http://localhost:8080/viewallcomplaints")
  }

  getUserComplaints = (data:any)=>
  {
    return this.http.post("http://localhost:8080/viewUserComplaint", data)
  }
}
