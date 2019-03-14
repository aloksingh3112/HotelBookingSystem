import { OnInit, OnDestroy } from '@angular/core';
import { AdminService } from './../admin.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit ,OnDestroy{
  message: string;
  errorMessage: string;
  facilityData;
  facility;

  constructor(public adminService: AdminService) {
    this.message = null;
    this.errorMessage = null;
  }

  ngOnInit() {
    if (this.adminService.isEdit) {
      this.facilityData = this.adminService.getFacilityData();
      this.facility = this.facilityData.roomfacility;
    }
  }

  addFacility(data: NgForm) {
    this.message = null;
    this.errorMessage = null;

    if (this.adminService.isEdit) {
      data.value._id = this.facilityData._id;

      this.adminService.editRoomFacility(data.value).subscribe(
        facilitydata => {
          this.message = facilitydata.body.message;
          data.reset();
        },
        err => {
          this.errorMessage = err.error.message;
        }
      );
    } else {
      this.adminService.addFacility(data.value).subscribe(
        facility => {
          this.message = facility.body.message;
          data.reset();
        },
        err => {
          this.errorMessage = err.error.message;
        }
      );
    }
  }


  ngOnDestroy(){
    this.adminService.isEdit=false;
  }
}
