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
  public paymentCard: boolean = false;
	public student_id: any = {"student_id": 1};
  	public current_user:any;
	public paymentRespoonse: any;
	private checkoutData: any = {
		"reference_id": "56456",
		"amount": 5000,
		"currency": "NGN",
		"callback_url": "http://127.0.0.1:5000/payment-callback",
		"redirect_url": "http://localhost:4200/student-particulars",
		"payload": [
			{"title":"clearance code", "quantity": 1, "total": 5000},
		]
	}


	


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


public payment(){
	this.api.checkout("/request-checkout", this.checkoutData).subscribe(
		ress => {this.paymentRespoonse = ress;
				console.log(this.paymentRespoonse.url)
        
        this.paymentCard = true;
			},
		err => console.log(err)
	)
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
