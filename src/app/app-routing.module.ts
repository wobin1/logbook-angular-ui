import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentParticularsComponent } from './components/student-particulars/student-particulars.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'student-particulars',
		component: StudentParticularsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
