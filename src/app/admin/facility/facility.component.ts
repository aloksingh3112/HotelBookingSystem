import { AdminService } from './../admin.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';



@Component({
  selector:'app-facility',
  templateUrl:'./facility.component.html',
  styleUrls:['./facility.component.css']
})
export class FacilityComponent{
 message:string;
 errorMessage:string;

  constructor(public adminService:AdminService){
    this.message= null;
    this.errorMessage= null;
  }

  addFacility(data:NgForm){
    this.message=null;
    this.errorMessage=null;
   this.adminService.addFacility(data.value)
      .subscribe(
        facility=>{
         this.message=facility.body.message;
         data.reset();
        },
        err=>{
         this.errorMessage=err.error.message;
        }
      )
  }
}
