import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component,OnInit } from '@angular/core';


@Component({
  selector:'app-roomdetail',
  templateUrl:'./roomdetail.component.html',
  styleUrls:['./roomdetail.component.css']
})
export class RoomDetailComponent implements OnInit{
   roomDetail={};
  constructor(public userService:UserService,private route:Router){

  }

  ngOnInit(){
    if(this.userService.getRoomDetail()){
     this.roomDetail={...this.userService.getRoomDetail()}
     console.log(this.roomDetail)
    }
    else
    {
       this.route.navigateByUrl('/user/bookroom');
    }
  }
}
