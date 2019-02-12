import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverdata } from './config';
import { catchError } from 'rxjs/operators';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Injectable()
export class MainService {
  isAdmin =false;
  isUser=false;
  isLogin=false;

  constructor(public httpClient: HttpClient) {}

  register(data: any) {
    const body = JSON.stringify(data);


    return this.httpClient
      .post<any>(`${serverdata.path}/admin/signup`, body)
      .pipe(catchError(err => throwError(err)));
  }

   adminlogin(data){
     const body=JSON.stringify(data);

     return this.httpClient.post<any>(`${serverdata.path}/admin/login`,body,{ observe: 'response' }
     ).pipe(
       catchError(err=>throwError(err))
     )

   }



}
