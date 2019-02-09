import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector:'app-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.css']

})
export class RegisterComponent {
  constructor(){}
  register(form:NgForm){
    console.log(form);

  }

}
