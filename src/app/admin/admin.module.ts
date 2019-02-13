import { AccountComponent } from './account/account.component';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './adminrouting.module';

import { NgModule } from '@angular/core';






@NgModule({
  declarations:[AccountComponent],
  imports:[AdminRouting,CommonModule],
  providers:[],


})
export class AdminModule{

}
