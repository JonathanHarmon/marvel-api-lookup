import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectorService {

  apiUrl = 'http://gateway.marvel.com/v1/public/characters?';
  apiKey = environment.apiKey;
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient){}

  public getCharacters(){
    this.http.get(`${this.apiUrl}${this.apiKey}`).subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
    });
  }


}


