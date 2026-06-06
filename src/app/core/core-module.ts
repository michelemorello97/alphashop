import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [],
  imports: [CommonModule, Header, Footer],
  exports: [Header, Footer]
})
export class CoreModule {}
