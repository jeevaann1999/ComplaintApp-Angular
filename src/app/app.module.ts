import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component'


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userreg",
    component:UserRegistrationComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"userprofile",
    component:UserProfileComponent
  },
  {
    path:"addcomplaint",
    component:AddComplaintComponent
  }




]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarComponent,
    NavbarAdminComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    DashboardComponent,
    UserProfileComponent,
    AddComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
