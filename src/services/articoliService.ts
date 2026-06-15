import { Injectable } from '@angular/core';
import { IArticoli } from '../app/models/articoli';

@Injectable({
  providedIn: 'root',
})
export class ArticoliService {
    articoli: IArticoli[] = [
        {codart: '014600301', descrizione: 'Barilla farina 1 kg', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, activate: true, data: new Date(), imageUrl: '/images/prodotti/1.jpg'},
        {codart: '014600302', descrizione: 'Mulino Bianco Tarallucci 700 g', um: 'PZ', pzcart: 12, peso: 0.7, prezzo: 2.49, activate: true, data: new Date(), imageUrl: '/images/prodotti/2.jpg'},
        {codart: '014600303', descrizione: 'De Cecco Penne Rigate 500 g', um: 'PZ', pzcart: 24, peso: 0.5, prezzo: 1.39, activate: true, data: new Date(), imageUrl: '/images/prodotti/3.jpg'},
        {codart: '014600304', descrizione: 'Rio Mare Tonno Olio Oliva 80 g x 4', um: 'PZ', pzcart: 12, peso: 0.32, prezzo: 4.99, activate: true, data: new Date(), imageUrl: '/images/prodotti/4.jpg'},
        {codart: '014600305', descrizione: 'Valfrutta Piselli Finissimi 400 g', um: 'PZ', pzcart: 24, peso: 0.4, prezzo: 1.29, activate: true, data: new Date(), imageUrl: '/images/prodotti/5.jpg'},
        {codart: '014600306', descrizione: 'Lavazza Qualità Rossa 250 g', um: 'PZ', pzcart: 20, peso: 0.25, prezzo: 3.89, activate: true, data: new Date(), imageUrl: '/images/prodotti/6.jpg'},
        {codart: '014600307', descrizione: 'Mozzarella Vallelata 4 mozzarelle 180g', um: 'PZ', pzcart: 6, peso: 0.18, prezzo: 4.59, activate: true, data: new Date(), imageUrl: '/images/prodotti/7.jpg'},
    ];

    getArticoli = (): IArticoli[] => this.articoli;

    getArticoliByCode = (codart: string) : IArticoli => {
        const index = this.articoli.findIndex(articoli => articoli.codart === codart);

        return this.articoli[index];
    }
}
