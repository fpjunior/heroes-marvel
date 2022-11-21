import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  timeStamp = '1'
  privateKey = '5bccdc8a0b4b460863d4d687bfff960243762793'
  publicKey = '3579a66ac3ace7cef9476ce2d5f8030e'
  hash = '5a224723a56c79734d956fbb5ecb1fd6'

  constructor(private http: HttpClient) { }

  getMusic(): Observable<any> {
    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&orderBy=name&limit=10&apikey=3579a66ac3ace7cef9476ce2d5f8030e&hash=${this.hash}`)
  }


  getHeroesByName(nameHeroe: string){
    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nameHeroe}&ts=1&orderBy=name&limit=10&apikey=3579a66ac3ace7cef9476ce2d5f8030e&hash=${this.hash}`)
  }
}
