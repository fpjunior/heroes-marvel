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
  apikey = '3579a66ac3ace7cef9476ce2d5f8030e'

  constructor(private http: HttpClient) { }

  getMarvel(): Observable<any> {
    return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${this.timeStamp}&orderBy=name&limit=10&apikey=${this.apikey}&hash=${this.hash}`)
  }

}
