import { Router } from '@angular/router';
import { AdminService } from './../admin.service';

import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';



@Component({
  selector:'app-category',
  templateUrl:'./category.component.html',
  styleUrls:['./category.component.css']
})
export class CategoryComponent {
  message:string;
 errorMessage:string;
constructor(public adminService:AdminService,public router:Router){

}

addCategory(data:NgForm){
  this.message=null;
  this.errorMessage=null;
this.adminService.addCategory(data.value)
 .subscribe(
   admindata=>{
    //  console.log(data.body);
   this.message=admindata.body.message;
data.reset();
   },
   err=>{
  this.errorMessage = err.error.message;



   }
 )

}

}
