import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CoreModule } from "../../core/core-module";
import { SalutiData } from '../../../services/data/saluti-data';

@Component({
    selector: 'app-welcome',
    imports: [RouterModule, CoreModule],
    templateUrl: './welcome.html',
    styleUrl: './welcome.css',
})

export class Welcome implements OnInit {

    utente: string = "";
    titolo: string = "Benvenuto in AlphaShop";
    sottoTitolo: string = "Visualizza le offerte del giorno!";
    saluti: string = "";

    constructor(private router: ActivatedRoute, private salutiSrv: SalutiData){}

    ngOnInit(): void {
        this.utente = this.router.snapshot.params['userId'];
    }

    getSaluti = (): void =>{
        this.salutiSrv.getSaluti().subscribe(
            response => this.handleResponse(response)
        );
    }

    handleResponse(response: Object){
        this.saluti = response.toString();
    }
}
