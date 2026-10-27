import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticoli } from '../../models/articoli';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-articoli-card',
  imports: [CurrencyPipe],
  templateUrl: './articoli-card.html',
  styleUrl: './articoli-card.css',
})
export class ArticoliCard {

    @Input() articolo: IArticoli = {codArt: '', descrizione: '', um: '', codStat: '', pzcart: 0, pesoNetto: 0, prezzo: 0, idStatoArt: '', dataCreazione: new Date(), imageUrl: ''};

    @Output() delete = new EventEmitter();
    @Output() edit = new EventEmitter();

    editArt = () => this.edit.emit(this.articolo.codArt);
    delArt = () => this.delete.emit(this.articolo.codArt);
}
