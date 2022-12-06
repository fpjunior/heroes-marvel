import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'heroes-marvel';
  result: any;
  text: any;
  heroName: string="";
  heroDescription: string="";
  imgHero: string="";
  sizeImg: string= "standard_fantastic";

  items!: any[]

  constructor(private service: ServiceService) { }


  ngOnInit(): void {
    this.items=[];
  }

  searchHero(event:any) {
    let hero: string;
    hero= event.query;
    this.service.getSearchHeros(hero).subscribe(
      (result) => {
        this.result= result.data.results;
       },
      (error) => { },
    )
  }

  translaterText(value:string){
    this.service.getTranslater(value).subscribe(
      (result:any) => {
        this.heroDescription= result.responseData.translatedText
      },
      (error) => { alert('Error')},
      )

  }

  selectHero(){
    let cont=0;
    let img;
    let extension;
    for(let i = 0; i < 10; i++){
      if(this.result[i].name == this.text.name){
        cont= i;
        i= 10;
      }
    }
    // console.log(this.result[cont]);
    this.heroName= this.result[cont].name;
    this.heroDescription= this.result[cont].description;
    img= this.result[cont].thumbnail.path;
    extension= this.result[cont].thumbnail.extension;
    this.imgHero= img + '/' + this.sizeImg + '.' + extension;
    console.log(this.heroName);
    console.log(this.heroDescription);
    console.log(this.imgHero);
    this.translaterText(this.heroDescription);
  }

}
