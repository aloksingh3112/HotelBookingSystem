import { ElementRef } from "@angular/core";
import { OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from '@angular/router';
import { AdminService } from './../admin.service';

import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  message: string;
  errorMessage: string;
  editData;
  categoryData: string;

  constructor(public adminService: AdminService, public router: Router) {}

  ngOnInit() {
    if (this.adminService.isEdit) {
      this.editData = this.adminService.getCategoryData();
      this.categoryData = this.editData.roomcategory;
    }
  }

  addCategory(data: NgForm) {
    this.message = null;
    this.errorMessage = null;

    if (this.adminService.isEdit) {
       data.value._id = this.editData._id;
       this.adminService.editRoomCategory(data.value)
         .subscribe(
           editdata=>{
            this.message = editdata.body.message;
          data.reset();
           },
           err=>{
            this.errorMessage = err.error.message;
           }
         )



    } else {
      this.adminService.addCategory(data.value).subscribe(
        admindata => {
          //  console.log(data.body);
          this.message = admindata.body.message;
          data.reset();
        },
        err => {
          this.errorMessage = err.error.message;
        }
      );
    }
  }
}
