import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'heroes-marvel';
  items!: any[];
  imageHeroe!: string;

  text!: any[];
  results!: any[];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.items = [

  ];

    this.teste()
  }

  search(event: any) {
 const IMAGE_SIZE: string = 'standard_fantastic'

    this.service.getHeroesByName(event?.query).subscribe(
      (data: any)=>{
        this.results = data.data.results;
        this.imageHeroe = `${this.results[0].thumbnail.path}/${IMAGE_SIZE}.jpg`
        console.log(this.results)
      },
      ()=>{}
    )

}



  teste() {
    this.service.getMusic().subscribe(
      (result) => {
        console.log(result)
       },
      (error) => { },
    )
  }


}
