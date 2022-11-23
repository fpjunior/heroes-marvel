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
  text: string= "";

  constructor(private service: ServiceService) { }


  ngOnInit(): void {
    this.teste();
  }

  teste() {
    this.service.getMusic().subscribe(
      (result) => {
        console.log(result)
       },
      (error) => { },
    )
  }

  searchHero(event:any) {
    var hero: string;
    hero= event.query;
    this.service.getSearchHeros(hero).subscribe(
      (result) => {
        this.result= result.data.results;
        console.log(this.result);
       },
      (error) => { },
    )
  }


}
