import { UserRouting } from './userrouting.module';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations:[UserComponent],
  imports:[UserRouting],
  providers:[],


})
export class UserModule {
 }
