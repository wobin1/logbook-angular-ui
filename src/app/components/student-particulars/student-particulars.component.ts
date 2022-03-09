import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from '../../services/server-request.service';

@Component({
  selector: 'app-student-particulars',
  templateUrl: './student-particulars.component.html',
  styleUrls: ['./student-particulars.component.css']
})
export class StudentParticularsComponent implements OnInit {


  public token:any;
  public particulars: any;

  constructor(private api: ServerRequestService) { }

  ngOnInit(): void {
    this.getcurrentUser("currentUser");
     this.getToken("current")
    this.getParticulars();
  }

  public getParticulars(){
    this.getcurrentUser("currentUser")
    this.getToken("logbookToken")
    this.pass(this.token, this.id)
    
  }

  public particulars_status: any;
  public id: any = {"student_id": ""};

  public particularsData = {
  	"name": "",
  	"department": "",
  	"reg_number":"",
  	"email": "",
  	"course_of_study": "",
  	"course_duration": "",
  	"phone_number": "",
  	"p_g_phoneNumber": "",
  	"account_name": "",
  	"bank_name": "",
  	"bank_sort_code": "",
  	"bank_account_no": "",
  	"name_of_establishment": "",
  	"address_of_establishment": "",
  	"period_of_attachment": "",
  	"industry_supervisor_name": "",
  	"industry_supervisor_phoneNumber": ""
					

  }

  public onSubmit(){
  	console.log(this.particularsData)

  }

  public pass(data:any,  student_id:any){
    this.api.post("get_student_particulars?token=" + data, student_id).subscribe(
      res => {this.particulars = res, 
        console.log(this.particulars[0].user_id),
        this.particulars_status = this.particulars[0].user_id,
        console.log(this.particulars_status) },
      err => console.log(err)
      )

  }

    public getcurrentUser(key:any){
    this.id.student_id = localStorage.getItem(key)
  }

   public getToken(key:any){
    this.token = localStorage.getItem(key)
  }

}
