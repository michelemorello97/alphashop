import { DatePipe, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../../models/articoli';
import { ArticoliService } from '../../../services/data/articoliService';

@Component({
  selector: 'app-articoli',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './articoli.html',
  styleUrl: './articoli.css',
})

export class Articoli implements OnInit{

    articoli$: IArticoli[] = [];
    errore: string = "";

    constructor(private artcoliSevice: ArticoliService){}

    ngOnInit(): void {
        this.artcoliSevice.getArticoliByDesc("Barilla").subscribe({
            next: this.handleResponse.bind(this),
            error: this.handleError.bind(this)
        });
    }

    handleResponse = (articoli: IArticoli[]) => {
        this.articoli$ = articoli;
        console.log(this.articoli$);
    }
    
    handleError = (error: Object) => {
        this.errore = error.toString();
        console.log(this.errore);
    }

}
