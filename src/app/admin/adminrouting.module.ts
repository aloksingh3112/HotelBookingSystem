import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const adminRouutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(adminRouutes)],
  exports: [RouterModule]

})
export class AdminRouting{

}
