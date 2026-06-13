import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CoreModule } from "../../core/core-module";

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

  constructor(private router: ActivatedRoute){}


  ngOnInit(): void {
    this.utente = this.router.snapshot.params['userId'];
  }
}
