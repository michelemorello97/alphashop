import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Authapp } from '../../../services/authapp';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public BasicAuth: Authapp) {}
}
