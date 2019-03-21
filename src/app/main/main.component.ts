import { MainService } from './main.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private route: Router, private mainService: MainService) {
    const token = localStorage.getItem('token');

    if (this.getDecodedAccessToken(token)) {
      if(this.getDecodedAccessToken(token).user.role == 'ADMIN'){
          this.mainService.isAdmin=true;
          this.mainService.isLogin=true;
          // this.route.navigateByUrl('/');
      }
      else if(this.getDecodedAccessToken(token).user.role == 'USER'){
        this.mainService.isUser=true;
        this.mainService.isLogin=true;
        // this.route.navigateByUrl('/');
    }

    }
    else
    {
      console.log('enter');
      this.mainService.isAdmin=false;
      this.mainService.isLogin=false;
      this.mainService.isUser=false;
      this.route.navigateByUrl('/login')


    }
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch (Error) {
        return null;
    }
  }
}
