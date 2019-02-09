import { CommonModule } from '@angular/common';
import { UserRouting } from './userrouting.module';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations:[UserComponent],
  imports:[UserRouting,CommonModule],
  providers:[],


})
export class UserModule {
 }
