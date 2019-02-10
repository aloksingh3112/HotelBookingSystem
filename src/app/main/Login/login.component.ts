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

  constructor(public mainService:MainService){

  }
  ngOnInit(){
   this.isAdmin = false;

  }
  login(form:NgForm){
    if(!this.isAdmin){
    this.mainService.login(form.value)
     .subscribe(
       data=>{
         console.log(data)
       },
       err=>{
         console.log(err)
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
