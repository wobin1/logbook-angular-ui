import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from '../../services/server-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public login: boolean = false;
	public code: boolean = false;
	private token: any;
	public student_id: any = {"student_id": 1};
  public current_user:any;

	


	public formData = {
		email: "",
		password: ""
	}

  constructor( private api: ServerRequestService, private router: Router ) { }

  ngOnInit(): void {
  }

  public onClick(){
  	this.login=true;
  	this.code=true;
  }

  public clearance(){
  	this.login=false;
  	this.code=false;
  }

  public submit(){
  	console.log(this.formData)
  	this.api.post('login', this.formData).subscribe(
  		res=>{this.token = res, this.saveToken(this.token.token), this.pass(this.token.token, this.formData)},
  		err=> console.log(err)
  		)

  	
  	
  	this.router.navigate(['/student-particulars']);


  }

  public pass(data:any, userEmail:any){
  	this.api.post("get_current_user_id?token=" + data, userEmail).subscribe(
			res => {this.current_user=res, this.saveCurrentUser(this.current_user.current_user)},
			err => console.log(err)
  		)
  	this.router.navigate(['/student-particulars'])
  }

public saveToken(token:any){
  	localStorage.setItem("logbookToken", token)

  }

public saveCurrentUser(user:any){
  localStorage.setItem("currentUser", user)
}

  public getToken(key:any){
  	localStorage.getItem(key)
  }

}
