import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectorService {

  apiUrl: string = 'http://gateway.marvel.com/v1/public/characters?';
  apiKey: string = environment.apiKey;
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient){}

  public getCharacters(keyword:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}nameStartsWith=${keyword}&${this.apiKey}`);
  }


}


