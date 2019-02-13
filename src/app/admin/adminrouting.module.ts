import { BookingComponent } from './Booking/booking.component';
import { FacilityReportComponent } from './facilityreport/facilityreport.component';
import { FacilityComponent } from './facility/facility.component';
import { CategoryReportComponent } from './categoryreport/categoryreport.component';
import { CategoryComponent } from './category/category.component';
import { RoomReportComponent } from './roomreport/roomreport.component';
import { RoomComponent } from './room/room.component';
import { AccountComponent } from './account/account.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const adminRouutes: Routes = [
  {
    path: '',
    component: AccountComponent
  },
  {
    path:'room',
    component:RoomComponent

  },
  {
    path:'roomreport',
    component:RoomReportComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'categoryreport',
    component:CategoryReportComponent
  },
  {
    path:'facility',
    component:FacilityComponent
  },
  {
    path:'facilityreport',
    component:FacilityReportComponent
  },
  {
    path:'booking',
    component:BookingComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(adminRouutes)],
  exports: [RouterModule]

})
export class AdminRouting{

}
