import { NgModule } from '@angular/core';
// importando los botones del PrimeNG
import {ButtonModule as primegButtonModule} from 'primeng/button';
// importando las tarjetas del PrimegNG
import {CardModule as primegCardModule} from 'primeng/card';
// importando el menuBar del PrimegNG
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  exports: [
    primegButtonModule,
    primegCardModule,
    MenubarModule
  ]
})
export class PrimegExportsModule { }
