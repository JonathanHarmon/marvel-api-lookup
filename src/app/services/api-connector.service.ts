import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectorService {

  apiUrl = environment.apiUrl;
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient){

  }



  public getMethod(){
    this.http.get(this.apiUrl).subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
    });
  }
}

