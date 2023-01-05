import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// modulo que contiene los comopentes de primeNG
import { PrimegExportsModule } from './primeg-exports/primeg-exports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimegExportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
