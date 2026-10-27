import { Component, OnInit } from '@angular/core';
import { ArticoliCard } from "../../components/articoli-card/articoli-card";
import { IArticoli } from '../../models/articoli';
import { ArticoliService } from '../../../services/data/articoliService';

@Component({
  selector: 'app-grid-articoli',
  imports: [ArticoliCard],
  templateUrl: './grid-articoli.html',
  styleUrl: './grid-articoli.css',
})
export class GridArticoli implements OnInit{

    articoli$: IArticoli[] = [];
    errore: string = "";

    constructor(private articoliService: ArticoliService){}

    ngOnInit(): void {
        this.articoliService.getArticoliByDesc("Barilla").subscribe({
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

    handleEdit = (codart: string) => {
        console.log("cliccato il tasto modifica del codice " + codart);
    }

    handleDelete = (codart: string) => {
        console.log("cliccato il tasto elimina del codice " + codart);
        this.articoli$.splice(this.articoli$.findIndex(x => x.codArt === codart), 1);
        console.log(this.articoli$);
    }

}
