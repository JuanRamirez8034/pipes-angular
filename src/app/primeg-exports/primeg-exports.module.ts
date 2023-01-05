import { NgModule } from '@angular/core';
// importando los botones del PrimeNG
import {ButtonModule as primegButtonModule} from 'primeng/button';
// importando las tarjetas del PrimegNG
import {CardModule as primegCardModule} from 'primeng/card';



@NgModule({
  declarations: [],
  exports: [
    primegButtonModule,
    primegCardModule
  ]
})
export class PrimegExportsModule { }
