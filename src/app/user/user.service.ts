import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverdata } from '../main/config';
import { throwError } from 'rxjs';


@Injectable()
export class UserService{
  private roomDetail;
  constructor(private http:HttpClient,private router:Router){}

  getRoom(){
    return this.http.get<any>(`${serverdata.path}/adminoperation/getroom`,{observe:'response'})
     .pipe(
       catchError(
         err=>throwError(err)
       )
     )
  }


  setRoomDeatil(room) {
    this.roomDetail = room;
    this.router.navigateByUrl('/user/roomdetail');
  }

  getRoomDetail(){
    return this.roomDetail;
  }

}
