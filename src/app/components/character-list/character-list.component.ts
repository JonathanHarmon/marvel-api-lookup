import { Component, OnInit } from '@angular/core';
import { ApiConnectorService } from 'src/app/services/api-connector.service';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  results: any;

  constructor(private apiConnectorService: ApiConnectorService){}

  allCharacters:any=[];
  showSearchResult!: boolean;

  ngOnInit(): void {
    this.showSearchResult=false;
      this.apiConnectorService.getCharacters('thor').subscribe(
        (result:any) => {
          this.allCharacters = result.data.results;
        }
      )
  }

}
