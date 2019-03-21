import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverdata } from '../main/config';
import { throwError } from 'rxjs';


@Injectable()
export class UserService{
  constructor(private http:HttpClient){}

  getRoom(){
    return this.http.get<any>(`${serverdata.path}/adminoperation/getroom`,{observe:'response'})
     .pipe(
       catchError(
         err=>throwError(err)
       )
     )
  }

}
