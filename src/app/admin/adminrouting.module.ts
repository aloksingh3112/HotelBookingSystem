import { AccountComponent } from './account/account.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const adminRouutes: Routes = [
  {
    path: '',
    component: AccountComponent
  },
  {

  }
]


@NgModule({
  imports: [RouterModule.forChild(adminRouutes)],
  exports: [RouterModule]

})
export class AdminRouting{

}
