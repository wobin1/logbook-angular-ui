import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentParticularsComponent } from './components/student-particulars/student-particulars.component';
import { ServerRequestService } from './services/server-request.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentParticularsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServerRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
