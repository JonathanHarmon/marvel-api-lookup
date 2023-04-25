import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiConnectorService {

  apiUrl: string = 'http://gateway.marvel.com/v1/public/';
  apiKey: string = environment.apiKey;

  constructor(private http: HttpClient){}

  public getAllCharacters(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}characters?limit=12&${this.apiKey}`)
  }

  public getCharacterByKeyword(keyword:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}characters?nameStartsWith=${keyword}&${this.apiKey}`)
  }

  public getComicsByCharacter(characterId:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}characters/${characterId}/comics?${this.apiKey}`)
  }

  public getSeriesByCharacter(characterId:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}characters/${characterId}/series?${this.apiKey}`)
  }
}


