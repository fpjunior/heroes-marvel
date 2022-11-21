import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'heroes-marvel';

  constructor(private service: ServiceService) { }


  ngOnInit(): void {
    this.teste()
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
