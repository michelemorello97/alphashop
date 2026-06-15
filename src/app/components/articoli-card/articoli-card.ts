import { Component, Input } from '@angular/core';
import { IArticoli } from '../../models/articoli';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-articoli-card',
  imports: [CurrencyPipe],
  templateUrl: './articoli-card.html',
  styleUrl: './articoli-card.css',
})
export class ArticoliCard {

    @Input() articolo: IArticoli = {codart: '', descrizione: '', um: '', pzcart: 0, peso: 0, prezzo: 0, activate: true, data: new Date(), imageUrl: ''};
}
