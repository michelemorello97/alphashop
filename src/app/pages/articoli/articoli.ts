import { DatePipe, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../../models/articoli';
import { ArticoliService } from '../../../services/articoliService';

@Component({
  selector: 'app-articoli',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './articoli.html',
  styleUrl: './articoli.css',
})

export class Articoli implements OnInit{

    articoli: IArticoli[] = [];

    constructor(private artcoliSevice: ArticoliService){}

    ngOnInit(): void {
        this.articoli = this.artcoliSevice.getArticoli();
    }

}
