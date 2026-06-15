import { Component, OnInit } from '@angular/core';
import { ArticoliCard } from "../../components/articoli-card/articoli-card";
import { IArticoli } from '../../models/articoli';
import { ArticoliService } from '../../../services/articoliService';

@Component({
  selector: 'app-grid-articoli',
  imports: [ArticoliCard],
  templateUrl: './grid-articoli.html',
  styleUrl: './grid-articoli.css',
})
export class GridArticoli implements OnInit{

    articoli$: IArticoli[] = [];

    constructor(private articoliService: ArticoliService){}

    ngOnInit(): void {
        this.articoli$ = this.articoliService.getArticoli();
        console.log(this.articoli$);
    }

}
