import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

	private baseUrl = "http://127.0.0.1:5000/"
  private checkoutUrl = "https://sandbox.klik.ng/api/v1"
  private headers = {}

  constructor(private http: HttpClient) {}

 setHeaders(headers: any = {}): void{
   this.headers = headers;
 }

  public post(url: any, data: any){
  	return this.http.post(this.baseUrl + url, data)
  }

  public get(url:any) {
  	return this.http.get(this.baseUrl + url)
  }

  public checkout(uri: any,  data: any){
    return this.http.post(this.checkoutUrl + uri, data, {headers: new HttpHeaders({"Content-type": "application/json", 
                                                                                    "Accept": "application/json", 
                                                                                    "Authorization": "Bearer 11|l6z4XoE5y0NNvRqKzh0XxNAgKWhoWQEniWrn4aAP"})})
  }

  public response(){
  	
  }


  
}
