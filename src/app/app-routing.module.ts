import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentParticularsComponent } from './components/student-particulars/student-particulars.component';
import { ReportComponent } from './components/report/report.component';
import { SiwesValedictoryActiivitiesComponent } from './components/siwes-valedictory-actiivities/siwes-valedictory-actiivities.component';
import { PrefaceComponent } from './components/preface/preface.component';
import { UplodeDiagramComponent } from './components/uplode-diagram/uplode-diagram.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'student-particulars',
		component: StudentParticularsComponent
	},
	{
		path: 'report',
		component: ReportComponent
	},
	{
		path: 'preface',
		component: PrefaceComponent
	},
	{
		path: 'siwes-valedictory-actiivities',
		component: SiwesValedictoryActiivitiesComponent
	},
	{
		path: 'uplode-diagram',
		component: UplodeDiagramComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'code-of-conduct',
		component: CodeOfConductComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
