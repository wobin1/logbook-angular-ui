import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from '../../services/server-request.service';

@Component({
  selector: 'app-uplode-diagram',
  templateUrl: './uplode-diagram.component.html',
  styleUrls: ['./uplode-diagram.component.css']
})
export class UplodeDiagramComponent implements OnInit {

  constructor(private api: ServerRequestService) { }

  public file: any;
  public reportUploadDate:any;
  public dateData = {
  	"reportDate": "",
  	"path": ""
  }

  ngOnInit(): void {
  	this.getReportDate();
  }

  public getFile(event:any){
  	this.file = event.target.files[0]
  	console.log(this.file.name)
  	var sanitize = require("sanitize-filename");
  	var filename = sanitize(this.file.name);
  	this.dateData.path = filename;
  	console.log(filename)
  }

  public uploadFile(){
  	console.log(this.dateData)
  	let formData = new FormData()

  	formData.set('file', this.file)

  	this.api.post('file_uploads', formData).subscribe(
  		res => console.log(res),
  		err => console.log(err)
  		)
  	this.updateDiagramPath()

  }

  public getReportDate(){
  	this.api.get('get-reports').subscribe(
  		res => {
  			this.reportUploadDate = res
  			console.log(this.reportUploadDate)
  		},
  		err => console.log(err)
  		)

  }

  public updateDiagramPath(){

  	this.api.post('update-daigram-path', this.dateData).subscribe(
  		res => console.log(res),
  		err => console.log(err)
  		)
  }


}
