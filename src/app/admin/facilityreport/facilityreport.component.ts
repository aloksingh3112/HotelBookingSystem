import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector:'app-facilityreport',
  templateUrl:'./facilityreport.component.html',
  styleUrls:['./facility.component.css']
})
export class FacilityReportComponent implements OnInit{
  spinner=true;
  facilities=[];
  constructor(public adminService:AdminService){

  }
  ngOnInit(){

  this.adminService.getFacility()
     .subscribe(
       data=>{
        this.facilities=[...data.body.data.roomfacility]
        this.spinner=false;

       },
       err=>{
         console.log(err)
       }
     )




  }

  deletefacility(id){
    this.adminService.deleteFacility(id)
      .subscribe(
        data=>{
          var facilityId = this.facilities.findIndex(data=>data._id==id);
          this.facilities.splice(facilityId,1);
        },
        err=>{
          console.log(err)
        }
      )
  }


  editfacility(facility){
    this.adminService.editFacility(facility);
  }

}
