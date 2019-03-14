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
        data=>{
         var roomId=this.rooms.findIndex(data=>data._id==id);
         this.rooms.splice(roomId,1);

        },
        err=>console.log(err)
      )
  }

  editroom(room){
    this.adminService.editRoom(room);
  }

}
