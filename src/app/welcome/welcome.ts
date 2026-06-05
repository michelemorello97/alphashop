import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {

  utente: string = "";

  constructor(private router: ActivatedRoute){}


  ngOnInit(): void {
    this.utente = this.router.snapshot.params['userId'];
  }
}
