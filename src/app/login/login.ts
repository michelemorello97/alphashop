import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreModule } from "../core/core-module";

@Component({
  selector: 'app-login',
  imports: [FormsModule, CoreModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userId = 'Michele';
  password = '';
  autenticato: boolean = true;
  errMsg: string = "Spiacente, la userId e/o la password sono errati. Riprova!";

  titolo: string = "Accesso & Autenticazione";
  sottoTitolo: string = "Procedi ad inserire la userId e la password";

  constructor(private router: Router) {}

  gestAut = (): void => {
    console.log(this.userId);
    if(this.userId === 'Michele' && this.password === '123_Stella') {
      this.router.navigate(['welcome', this.userId]);
      this.autenticato = true;
    }
    else {
      this.autenticato = false;
    }
  }
}
