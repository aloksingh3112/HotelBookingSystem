import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
   path:'about',
   component:AboutComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
      path: 'admin',
      loadChildren: '../admin/admin.module#AdminModule'
  },
  {
    path:'user',
    loadChildren:'../user/user.module#UserModule'
  }
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class MainRoutingModule{

}
