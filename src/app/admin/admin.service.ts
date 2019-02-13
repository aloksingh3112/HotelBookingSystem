import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverdata } from '../main/config';

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

}
