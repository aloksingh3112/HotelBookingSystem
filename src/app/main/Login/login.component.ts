import { Router, RouterState } from '@angular/router';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MainService } from './../main.service';
import { Component } from '@angular/core';



@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
  isAdmin= false;
  errorMessage;

  constructor(public mainService:MainService,private router:Router){


  }
  ngOnInit(){
    this.errorMessage=null;
   this.isAdmin = false;

  }
  login(form:NgForm){
    this.errorMessage=null;
    if(this.isAdmin){
    this.mainService.adminlogin(form.value)
     .subscribe(
       data=>{
        localStorage.setItem('token',data.body.token);
        if(data.body.user.role== 'ADMIN'){
          this.mainService.isAdmin=true;
          this.mainService.isLogin=true;
          this.router.navigateByUrl('/admin');

        }
        else{

        }
       },
       err=>{
        this.errorMessage=err.error.message;
       }
     )
    }
    else {

    }

  }

  changeAdmin(){
    this.isAdmin = !this.isAdmin;


  }

}
