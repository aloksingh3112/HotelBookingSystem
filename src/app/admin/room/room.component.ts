import { OnDestroy } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { AdminService } from './../admin.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';


@Component({
  selector:'app-room',
  templateUrl:'./room.component.html',
  styleUrls:['./room.component.css']
})
export class RoomComponent implements OnInit,OnDestroy{
  datas = [] ;
  spinner = true;
  roomData;
  message;
  errorMessage;














  optionsModel: number[];
  myOptions: IMultiSelectOption[]= [];

  constructor(public adminService:AdminService){

  }
  ngOnInit(){
    if(this.adminService.isEdit){
   this.roomData=this.adminService.getEditRoom();
   console.log(this.roomData);



    }





    return forkJoin(

    this.adminService.getCategory(),
    this.adminService.getFacility()

  )
   .subscribe(
     data=>{

       console.log(data[0], data[1]);
       this.datas = [...data[0].body.data.roomcategory];
       for(let option of data[1].body.data.roomfacility){

         const obj={
           id:option.roomfacility,
           name:option.roomfacility
         }


        this.myOptions.push(obj);
       }


       this.spinner = false;
     },
     err=>{
       console.log(err)
     }
   )

  }


  addRoom(data:NgForm){
    this.message=null;
    this.errorMessage= null;
   this.adminService.addRoom(data.value)
    .subscribe(
      roomdata=>{
        this.message = roomdata.body.message;
        data.reset();
      },
      err=>{
        this.errorMessage = err.error.message;
      }
    )

  }


  ngOnDestroy() {
   this.adminService.isEdit=false;

  }



}
