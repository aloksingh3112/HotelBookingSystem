import { MyBookingComponent } from './booking/mybooking.component';
import { RecieptComponent } from './reciept/reciept.component';
import { PaymentComponent } from './payment/payment.component';
import { RoomDetailComponent } from './roomdetail/roomdetail.component';
import { BookRoomComponent } from './bookroom/bookroom.component';
import { MyAccountComponent } from './account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const userRoutes:Routes=[
  {
    path:'',
    component:MyAccountComponent
  },
  {
    path:'bookroom',
    component:BookRoomComponent

  },
  {
    path:'roomdetail',
    component:RoomDetailComponent

  },
  {
    path:'payment',
    component:PaymentComponent

  },
  {
    path:'reciept',
    component:RecieptComponent

  },
  {
    path:'mybooking',
    component:MyBookingComponent

  }

]

@NgModule({
  imports:[RouterModule.forChild(userRoutes)],
  exports:[RouterModule]

})
export class UserRouting{

}
