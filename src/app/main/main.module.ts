import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { MainService } from './main.service';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { HomeComponent } from './Home/home.component';
import { MainRoutingModule } from './mainrouting.module';
import { MainComponent } from './main.component';
import {HeaderComponent} from './Header/header.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './About/about.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations : [MainComponent, HeaderComponent, HomeComponent, RegisterComponent,  LoginComponent, AboutComponent],
  imports: [MainRoutingModule, FormsModule,CommonModule,CustomFormsModule,
  HttpClientModule],
  providers: [MainService],
  exports: [MainComponent]

})
export class MainModule {

}
