import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.compoent.css']
})
export class BookRoomComponent{


    constructor(public userService:UserService){}

}
