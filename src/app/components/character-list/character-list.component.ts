import { Component, OnInit } from '@angular/core';
import { ApiConnectorService } from 'src/app/services/api-connector.service';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{

  constructor(private apiConnectorService: ApiConnectorService){}

  ngOnInit(): void {
      this.apiConnectorService.getCharacters('thor').subscribe(
        (results:any) => {
          console.log(results);
        }
      )
  }

}
