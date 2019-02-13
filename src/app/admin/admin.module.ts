import { RoomReportComponent } from './roomreport/roomreport.component';
import { RoomComponent } from './room/room.component';
import { FacilityReportComponent } from './facilityreport/facilityreport.component';
import { FacilityComponent } from './facility/facility.component';
import { CategoryReportComponent } from './categoryreport/categoryreport.component';
import { CategoryComponent } from './category/category.component';
import { BookingComponent } from './Booking/booking.component';
import { AccountComponent } from './account/account.component';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './adminrouting.module';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AccountComponent,
    AccountComponent,
    BookingComponent,
    CategoryComponent,
    CategoryReportComponent,
    FacilityComponent,
    FacilityReportComponent,
    RoomComponent,
    RoomReportComponent,

  ],
  imports: [AdminRouting, CommonModule],
  providers: []
})
export class AdminModule {}
