import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverdata } from '../main/config';
import { pipe, throwError } from 'rxjs';

@Injectable()
export class AdminService{

  constructor(private http:HttpClient){

  }




  addCategory(data){
    const body=JSON.stringify(data);
    return this.http.post<any>(`${serverdata.path}/adminoperation/addcategory`,body,{observe:'response'})

  }




  addFacility(data){
    const body=JSON.stringify(data);
    return this.http.post<any>(`${serverdata.path}/adminoperation/addfacility`,body,{observe:'response'})
  }



  getCategory(){
    return this.http.get<any>(`${serverdata.path}/adminoperation/getcategory`,{observe:'response'})
     .pipe(
       catchError(
         err=>throwError(err)
       )
     )

  }


  getFacility(){
    return this.http.get<any>(`${serverdata.path}/adminoperation/getfacility`,{observe:'response'})
     .pipe(
       catchError(
         err=>throwError(err)
       )
     )

  }

  getRoom(){
    return this.http.get<any>(`${serverdata.path}/adminoperation/getroom`,{observe:'response'})
      .pipe(
        catchError(
          err=>throwError(err)
        )
      )
  }



  addRoom(data){
    const body=JSON.stringify(data);
    return this.http.post<any>(`${serverdata.path}/adminoperation/addroom`,body,{observe:'response'})
      .pipe(
        catchError(
          err=>throwError(err)
        )
      )
  }

  deleteRoomReport(id){
    return this.http.delete(`${serverdata.path}/adminoperation/roomdelete/${id}`,{observe:'response'})
     .pipe(
       catchError(
         err=>throwError(err)
       )
     )
  }

}
