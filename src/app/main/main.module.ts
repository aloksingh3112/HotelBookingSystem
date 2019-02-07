import { MainRoutingModule } from './mainrouting.module';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main.component';
import {HeaderComponent} from './Header/header.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations : [MainComponent,HeaderComponent,BodyComponent],
  imports: [MainRoutingModule],
  providers: [],
  exports: [MainComponent]

})
export class MainModule{

}
