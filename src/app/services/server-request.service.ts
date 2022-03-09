import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

	public baseUrl = "http://127.0.0.1:5000/"

  constructor(private http: HttpClient) {}

  public post(url: any, data: any){
  	return this.http.post(this.baseUrl + url, data)
  }

  public get(url:any) {
  	return this.http.get(this.baseUrl + url)
  }

  public response(){
  	
  }


  
}
