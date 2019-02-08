import { AdminRouting } from './adminrouting.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';





@NgModule({
  declarations:[AdminComponent],
  imports:[AdminRouting],
  providers:[]

})
export class AdminModule{

}
