import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Login } from "./pages/login/login";
import { CoreModule } from './core/core-module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Login, CoreModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
