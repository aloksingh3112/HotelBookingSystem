import { RoomListComponent } from './roomlist/roomlist.component';
import { RoomDetailComponent } from './roomdetail/roomdetail.component';
import { BookRoomComponent } from './bookroom/bookroom.component';
import { RecieptComponent } from './reciept/reciept.component';
import { PaymentComponent } from './payment/payment.component';

import { MyBookingComponent } from './booking/mybooking.component';
import { MyAccountComponent } from './account/account.component';
import { CommonModule } from '@angular/common';
import { UserRouting } from './userrouting.module';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations:[
    UserComponent,MyAccountComponent,MyBookingComponent,PaymentComponent,RecieptComponent,BookRoomComponent,RoomDetailComponent,
    RoomListComponent],
  imports:[UserRouting,CommonModule],
  providers:[],


})
export class UserModule {
 }
