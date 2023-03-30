import { Component } from '@angular/core';
import { JokeListService } from '../joke-list.service';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {
savedJokes=[
  "saved"
]
}
