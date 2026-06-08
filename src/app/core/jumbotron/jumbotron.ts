import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  imports: [],
  templateUrl: './jumbotron.html',
  styleUrl: './jumbotron.css',
})
export class Jumbotron {
  @Input() titolo: string = "";
  @Input() sottoTitolo: string = "";
  @Input() Show: boolean = true;
}
