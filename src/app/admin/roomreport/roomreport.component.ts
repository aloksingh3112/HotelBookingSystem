import { AdminService } from './../admin.service';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector:'app-roomreport',
  templateUrl:'./roomreport.component.html',
  styleUrls:['./roomreport.component.css']
})
export class RoomReportComponent implements OnInit {
  spinner= true;
  rooms= [];
  constructor(public adminService:AdminService){

  }

  ngOnInit(){
      this.adminService.getRoom()
        .subscribe(
          data => {
            this.rooms=[...data.body.data]
            this.spinner = false;
          },
          err=>console.log(err)
        )
  }

  deleteroomreport(id) {

    this.adminService.deleteRoomReport(id)
      .subscribe(
        data=>console.log('data is',data),
        err=>console.log(err)
      )
  }

}
