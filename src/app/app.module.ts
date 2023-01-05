import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// importando los botones del PrimeNG
import {ButtonModule as primegButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    primegButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
