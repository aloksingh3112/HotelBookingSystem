import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { HomeComponent } from './Home/home.component';
import { MainRoutingModule } from './mainrouting.module';
import { MainComponent } from './main.component';
import {HeaderComponent} from './Header/header.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './About/about.component';




@NgModule({
  declarations : [MainComponent,HeaderComponent,HomeComponent,RegisterComponent,LoginComponent,AboutComponent],
  imports: [MainRoutingModule],
  providers: [],
  exports: [MainComponent]

})
export class MainModule{

}
