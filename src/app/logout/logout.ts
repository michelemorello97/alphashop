import { Component, OnInit } from '@angular/core';
import { Authapp } from '../../services/authapp';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit{
  constructor(private BasicAuth: Authapp){}
  
  ngOnInit(): void {
    this.BasicAuth.clearAll();
  }
}
