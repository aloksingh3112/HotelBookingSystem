import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.compoent.css']
})
export class BookRoomComponent implements OnInit{

    spinner = true;
    roomData= [];
    constructor(public userService:UserService){}
    ngOnInit(){
     this.userService.getRoom()
       .subscribe(
         data=>{
           this.roomData= [...data.body.data];
           this.spinner=false;
          },
         err=>console.log(err)
       )

    }

    roomDetail(room){
      this.userService.setRoomDeatil(room);
    }

}
