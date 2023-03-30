import { Component } from '@angular/core';
import { JokeListService } from '../joke-list.service';
import { OnInit } from '@angular/core';
import { Joke } from './Joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit{
  currentJoke: Joke = {
    id:'',
    joke: '',
    status: 404
  };

constructor(private hazJoke: JokeListService) {}


ngOnInit() {
 this.hazJoke.getJoke().subscribe(newJoke => this.currentJoke.joke = newJoke.joke)
}
}
