import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentParticularsComponent } from './components/student-particulars/student-particulars.component';
import { ServerRequestService } from './services/server-request.service';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component';
import { SiwesValedictoryActiivitiesComponent } from './components/siwes-valedictory-actiivities/siwes-valedictory-actiivities.component';
import { PrefaceComponent } from './components/preface/preface.component';
import { ReportComponent } from './components/report/report.component';
import { AllReportComponent } from './components/all-report/all-report.component';
import { UplodeDiagramComponent } from './components/uplode-diagram/uplode-diagram.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentParticularsComponent,
    CodeOfConductComponent,
    SiwesValedictoryActiivitiesComponent,
    PrefaceComponent,
    ReportComponent,
    AllReportComponent,
    UplodeDiagramComponent,
    DashboardComponent,
    PaymentComponent
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
