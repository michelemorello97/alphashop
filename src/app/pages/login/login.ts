import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreModule } from "../../core/core-module";
import { Authapp } from '../../../services/authapp';

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

  constructor(private router: Router, private BasicAuth: Authapp) {}

  gestAut = (): void => {
    console.log(this.userId);
    if(this.BasicAuth.autentica(this.userId, this.password)) {
      this.router.navigate(['welcome', this.userId]);
      this.autenticato = true;
    }
    else {
      this.autenticato = false;
    }
  }
}
