import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from '../../services/server-request.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

	public token:any;
	public file:any;
	public reportData: any = {
	    "user_id": "",
	    "week_day": "",
	    "weekending_date": "",
	    "progress_report": "",
	    "student_signature": "20003",
	    "industry_supervisor_comment": "",
	    "industry_supervisor_name": 1
	}

  constructor(private api: ServerRequestService) {}

  ngOnInit(): void {
  	this.getcurrentUser("currentUser");
  	this.getToken("logbookToken")
  	console.log(this.reportData.user_id)
  }

  public getcurrentUser(key:any){
    this.reportData.user_id = localStorage.getItem(key)
  }

  public onSubmit(){
  	console.log(this.reportData)
  	this.saveReport();
  }

  public saveReport(){
  	this.api.post("/progress-report?token=" + this.token, this.reportData).subscribe(
  			res => console.log(res),
  			err => console.log(err)
  		)
  }

   public getToken(key:any){
    this.token = localStorage.getItem(key)
  }

  public getFile(event:any){
  	this.file = event.target.files[0]
  	console.log(this.file)
  }

  public uploadImage(){
  	let formData = new FormData()

  	formData.set('file', this.file)

  	
  }

}
