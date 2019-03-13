import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector:'app-categoryreport',
  templateUrl:'./category.component.html',
  styleUrls:['./category.component.css']
})
export class CategoryReportComponent implements OnInit{
  spinner = true;
  categories=[];
constructor(public adminService: AdminService){

}

ngOnInit(){
 this.adminService.getCategory()
    .subscribe(
      data  =>{
        console.log(data);
        this.categories=[...data.body.data.roomcategory];
        this.spinner=false;
      },
      err => console.log(err)
    )
}


deletecategory(id){
  this.adminService.deleteCategory(id)
   .subscribe(
     data=>{
      var categoryId = this.categories.findIndex(data=>data._id==id);
      this.categories.splice(categoryId,1);
     },
     err=>console.log(err)
   )
}

}
