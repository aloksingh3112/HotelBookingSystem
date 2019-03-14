import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverdata } from '../main/config';
import { pipe, throwError } from 'rxjs';

@Injectable()
export class AdminService{
  isEdit = false;
  private editCategoryData = {};
  private editFacilityData = {};
  private editRoomData =  {}
  constructor(private http:HttpClient,private router:Router){

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

  deleteFacility(id){
    return this.http.delete(`${serverdata.path}/adminoperation/deletefacility/${id}`)
      .pipe(
        catchError(
          err=>throwError(err);
        )
      )

  }

  deleteCategory(id){
    return this.http.delete(`${serverdata.path}/adminoperation/deletecategory/${id}`)
      .pipe(
        catchError(
          err=>throwError(err);
        )
      )

  }

  editCategory(category){
    this.editCategoryData={...category};
    this.isEdit=true;
    this.router.navigateByUrl('admin/category');

  }

  getCategoryData(){
    return this.editCategoryData;
  }

  editRoomCategory(data){
    const id:number = data._id;
    console.log(data,id);
    const body=JSON.stringify(data);
    return this.http.put<any>(`${serverdata.path}/adminoperation/updatecategory/${id}`,body,{observe:'response'})
     .pipe(
       catchError(
         err=>throwError(err)
       )
     )


  }




  editFacility(facility){
     this.editFacilityData={...facility};
     this.isEdit=true;
     this.router.navigateByUrl('/admin/facility')
  }

  getFacilityData(){
    return this.editFacilityData;
  }

  editRoomFacility(data){
    const id=data._id;
    const body=JSON.stringify(data);
return this.http.put(`${serverdata.path}/adminoperation/updatefacility/${id}`,body,{
 observe:'response'
})
  .pipe(
    catchError(
      err=>throwError(err)
    )
  )

  }



  editRoom(room){
    console.log(room);
    this.editRoomData={...room};
    this.isEdit=true;
    this.router.navigateByUrl('/admin/room');
  }

  getEditRoom(){
    return this.editRoomData;
  }

  updateRoom(data){
    const id=data._id;
    const body=JSON.stringify(data);
    return this.http.put(`${serverdata.path}/adminoperation/editroom/${id}`,body,{
      observe:'response'
    })
    .pipe(
      catchError(
        err=>throwError(err)
      )
    )
  }

}
