import { AppIntercepters } from './app.interceptors';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AppIntercepters,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
