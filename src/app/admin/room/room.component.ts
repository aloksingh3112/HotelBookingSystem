import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';


@Component({
  selector:'app-room',
  templateUrl:'./room.component.html',
  styleUrls:['./room.component.css']
})
export class RoomComponent{
  datas=[
    'alok',
    'avinash',
    'sid'
  ];
  spinner = true;

  optionsModel: number[];
  myOptions: IMultiSelectOption[];

  constructor(){
    this.myOptions = [
      { id: 'spinner', name: 'Option 1' },
      { id: 'name', name: 'Option 2' },
      { id: 'aa', name: 'Option 3' },
      { id: 'bb', name: 'Option 4' }
  ];
  setTimeout(()=>{
    this.spinner = false;
  },2000)
  }
  addRoom(data:NgForm){
    console.log(data.value);

  }

  add(event){
    console.log(event.target.value);

  }
  onChange() {
    console.log(this.optionsModel);
}

}
