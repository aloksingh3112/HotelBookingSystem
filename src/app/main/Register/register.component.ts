import { MainService } from './../main.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector:'app-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css']

})
export class RegisterComponent implements OnInit {
   sucessMessage:string;
   errorMessage:string;
  constructor(private mainService:MainService){}
  ngOnInit(){
    this.errorMessage=null;
    this.sucessMessage=null;
  }

  register(form:NgForm){
    this.errorMessage=null;
    this.sucessMessage=null;
    this.mainService.register(form.value)
      .subscribe(
        data=>{
          console.log(data);
          if(data.isRegister){
        this.sucessMessage= 'You are registered succussfully' ;
         form.reset()
          }
          else
          {
            this.errorMessage=data.message;
          }

        },
        err=>{
          console.log(err);
          this.errorMessage = 'something went wrong';

        }
      )


  }


}
