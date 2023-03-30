import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Joke } from './joke/Joke';

@Injectable({
  providedIn: 'root'
})
export class JokeListService {
  rootUrl= 'https://icanhazdadjoke.com';

  constructor(private http: HttpClient) { }


  getJoke() {
    return this.http.get<Joke>(this.rootUrl, { 
      'headers': {'accept': 'application/json'}
    })
  }
}
