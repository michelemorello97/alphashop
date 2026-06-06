import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from "./login/login";
import { CoreModule } from './core/core-module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Login, CoreModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
