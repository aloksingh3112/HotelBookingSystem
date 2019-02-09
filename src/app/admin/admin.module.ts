import { CommonModule } from '@angular/common';
import { AdminRouting } from './adminrouting.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';





@NgModule({
  declarations:[AdminComponent],
  imports:[AdminRouting,CommonModule],
  providers:[]

})
export class AdminModule{

}
