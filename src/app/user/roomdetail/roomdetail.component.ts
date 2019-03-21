import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector:'app-roomdetail',
  templateUrl:'./roomdetail.component.html',
  styleUrls:['./roomdetail.component.css']
})
export class RoomDetailComponent implements OnInit{
    roomForm:FormGroup;
   roomDetail={};
  constructor(public userService:UserService,private route:Router,private fb:FormBuilder){

  }

  ngOnInit(){
    if(this.userService.getRoomDetail()){
     this.roomDetail={...this.userService.getRoomDetail()};
     this.roomForm=this.fb.group({
      fromdate:[null,[Validators.required]],
      todate:[null,[Validators.required]],
      noofpersons:[null,[Validators.required,Validators.minLength(0),Validators.maxLength(this.roomDetail.maxadults)]],
      noofchilds:[null,[Validators.required,Validators.maxLength(0),Validators.maxLength(this.roomDetail.maxchilds)]],
      name:[null,[Validators.required]],
      mobile:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:[null,[Validators.required,Validators.email]]

     })

    }
    else
    {
       this.route.navigateByUrl('/user/bookroom');
    }
  }


  get fromdate(){
      return this.roomForm.get('fromdate');
  }

  get todate(){
    return this.roomForm.get('todate');
  }

  get noofpersons(){
    return this.roomForm.get('noofpersons');
  }

  get noofchilds(){
    return this.roomForm.get('noofchilds');
  }

  get name(){
    return this.roomForm.get('name');
  }
   get mobile(){
     return this.roomForm.get('mobile');
   }
   get email(){
     return this.roomForm.get('email');
   }
}
