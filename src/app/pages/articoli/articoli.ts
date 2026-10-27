import { DatePipe, CurrencyPipe} from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { IArticoli } from '../../models/articoli';
import { ArticoliService } from '../../../services/data/articoliService';

@Component({
  selector: 'app-articoli',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './articoli.html',
  styleUrl: './articoli.css',
})

export class Articoli implements OnInit{

    //articoli$: IArticoli[] = [];
    articoli$ = signal<IArticoli[]>([]);
    errore: string = "";

    constructor(private artcoliSevice: ArticoliService){}

    ngOnInit(): void {
        this.artcoliSevice.getArticoliByDesc("Barilla").subscribe({
            next: this.handleResponse.bind(this),
            error: this.handleError.bind(this)
        });
    }

    handleResponse = (articoli: IArticoli[]) => {
        this.articoli$.set(articoli);
        //this.articoli$ = articoli;
        console.log('Articoli ricevuti:', this.articoli$);
        console.log('Numero articoli:', this.articoli$.length);
    }
    
    handleError = (error: Object) => {
        this.errore = error.toString();
        console.log(this.errore);
    }

}
