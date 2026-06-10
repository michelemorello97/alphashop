import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authapp {

  autentica = (userId: string, password: string): boolean => {
    var retVal = (userId === 'Michele' && password === '123_Stella') ? true : false;
    
    if(retVal) {
      sessionStorage.setItem("Utente", userId);
    }
    
    return retVal; 
  }
}
