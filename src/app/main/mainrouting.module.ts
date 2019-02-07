import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';

const routes:Routes=[
  {
    path:'body',
    component:BodyComponent

  }
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class MainRoutingModule{

}
