import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// importando los botones del PrimeNG
import {ButtonModule as primegButtonModule} from 'primeng/button';
// importando las tarjetas del PrimegNG
import {CardModule as primegCardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    primegButtonModule,
    primegCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
