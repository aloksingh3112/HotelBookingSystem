import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const userRoutes:Routes=[
  {
    path:'',
    component:UserComponent
  }

]

@NgModule({
  imports:[RouterModule.forChild(userRoutes)],
  exports:[RouterModule]

})
export class UserRouting{

}
