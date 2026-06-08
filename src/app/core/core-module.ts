import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Jumbotron } from './jumbotron/jumbotron';

@NgModule({
  declarations: [],
  imports: [CommonModule, Header, Footer, Jumbotron],
  exports: [Header, Footer, Jumbotron]
})
export class CoreModule {}
