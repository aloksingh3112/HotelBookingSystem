import { NgForm } from '@angular/forms';
import { MainService } from './../main.service';
import { Component } from '@angular/core';



@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent{
  constructor(public mainService:MainService){

  }
  login(form:NgForm){
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

}
