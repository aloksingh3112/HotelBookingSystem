import { MainService } from './../main.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector:'app-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css']

})
export class RegisterComponent {
  constructor(private mainService:MainService){}

  register(form:NgForm){
    this.mainService.register(form)
      .subscribe(
        data=>{
          
        },
        err=>{
          console.log(err)
        }
      )


  }


}
