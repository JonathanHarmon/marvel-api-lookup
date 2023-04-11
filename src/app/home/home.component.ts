import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiUrl = environment.apiUrl;
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod(){
    this.http.get(this.apiUrl).subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
    });
  }

}
