import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimegExportsModule } from '../primeg-exports/primeg-exports.module';
import { TranformToUpperCasePers } from './pipes/tranformToUpperCase.pers.pipe';
import { FlyHeroPersPipe } from './pipes/flyHero.pers.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
    TranformToUpperCasePers,
    FlyHeroPersPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimegExportsModule
  ]
})
export class ExamplesPipesModule { }
