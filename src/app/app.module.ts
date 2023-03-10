import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { ExamplesPipesModule } from './examples-pipes/examples-pipes.module';

import { SharedModule } from './shared/shared.module';

// configuracion para cambiar el idioma por defecto
import myPrefLenuaje from '@angular/common/locales/es-VE'; // 1. imoportar el lenguaje de preferencia
import myFrechLenguaje from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';      // 2. importar la funcion que se encarga de realizar el cambio
registerLocaleData(myPrefLenuaje);                         // 3. Ejecutar la funcion pasandole el lenguaje
registerLocaleData(myFrechLenguaje);
                                                           // 4. Para cambiar el lenguaje de forma global se debe agregar una configuracion en los providers

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    ExamplesPipesModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue: 'es-VE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
