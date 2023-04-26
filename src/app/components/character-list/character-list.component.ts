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
  comics:any=[];
  series:any=[];
  showComicsDiv!: boolean;
  showSeriesDiv!: boolean;
  keyWord!: string;
  showSearchResult!: boolean;
  searchedCharacter:any=[];

  ngOnInit(): void {
    this.showComicsDiv = false;
    this.showSeriesDiv = false;
    this.showSearchResult=false;
      this.apiConnectorService.getAllCharacters().subscribe(
        (result:any) => {
          this.allCharacters = result.data.results;
        }
      )
  }

  searchByKeyword(event:any)
{
   this.keyWord = event.target.value;
   this.apiConnectorService.getCharacterByKeyword(this.keyWord).subscribe((result)=>{
     console.log(result);
     if(result.data.count>0)
     {
       this.showSearchResult = true;
       this.searchedCharacter = result.data.results;
     }
     else{

       this.ngOnInit();
     }
   })
}

fetchComicsByCharacter(characterId:string)
  {
    console.log(characterId);
    this.apiConnectorService.getComicsByCharacter(characterId).subscribe((result)=>{
      console.log(result);

      if(result.data.count>0)
      {
        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    })
  }



}
