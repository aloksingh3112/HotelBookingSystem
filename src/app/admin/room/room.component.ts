import { AdminService } from './../admin.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';


@Component({
  selector:'app-room',
  templateUrl:'./room.component.html',
  styleUrls:['./room.component.css']
})
export class RoomComponent implements OnInit{
  datas = [] ;
  spinner = true;

  optionsModel: number[];
  myOptions: IMultiSelectOption[];

  constructor(public adminService:AdminService){

  }
  ngOnInit(){
   this.adminService.getCategory()
    .subscribe(
      data=>console.log(data),
      err=
    )

  }


  addRoom(data:NgForm){
    console.log(data.value);

  }



}
