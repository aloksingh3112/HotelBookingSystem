import { MainService } from './../main.service';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';



@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent{
  constructor(public mainService:MainService,public router:Router){
   localStorage.setItem('url',router.url);


  }
  logout(){
    this.mainService.logout();
  }

}
