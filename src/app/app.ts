import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from "./login/login";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('alphashop');
  saluti: string = 'Benvenuto in alphashop Coglionazzo';
  bollini: number = 1500;
}
