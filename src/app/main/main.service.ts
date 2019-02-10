
import { throwError} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { serverdata } from './config';
import {map, catchError} from 'rxjs/operators'



@Injectable()
export class MainService {


  constructor(public httpClient:HttpClient){}

  register(data:any){
    const body=JSON.stringify(data)

   const headers= new HttpHeaders({
    'Content-Type':'application/json',
    });

   return  this.httpClient.post<any>(`${serverdata.path}/admin/signup`,body,{headers:headers}).pipe(
                 catchError(err=>throwError( err))
              );

  }

}
