import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
 title = 'image-gallery';
 public data:any = []
 constructor(private http: HttpClient) {
   
 }


 getData(stockID:string): void{
   const url ='http://localhost:8080/livestock/summary/'+stockID;   
   this.http.get(url)
   .subscribe((res)=>{
     this.data = res
     console.log(this.data)
   })
 }

 ngOnInit(): void {
  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      paging: false,
      searching: false,      
      lengthMenu: [5, 10, 15, 100]
  };
}
}