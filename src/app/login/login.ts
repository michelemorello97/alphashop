import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userId = 'Michele';
  password = '';
  autenticato: boolean = true;
  errMsg: string = "Spiacente, la userId e/o la password sono errati. Riprova!";

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
