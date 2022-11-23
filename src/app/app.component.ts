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
  heroeName!: string;
  descriptionName!: string;

  text!: any[];
  results!: any[];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.items = [
    ];
  }

  findHeroe(event: any) {

    this.service.getHeroesByName(event?.query).subscribe(
      (data: any) => {
        this.results = data.data.results;
        console.log(this.results)
      },
      () => { }
    )
  }

  selectHeroe(event: any) {
    const IMAGE_SIZE: string = 'standard_fantastic'
    this.imageHeroe = `${this.results[0].thumbnail.path}/${IMAGE_SIZE}.jpg`
    this.heroeName = event.name
    this.descriptionName = event.description
  }

}
