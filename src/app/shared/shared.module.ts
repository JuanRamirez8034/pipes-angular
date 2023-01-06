import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimegExportsModule } from '../primeg-exports/primeg-exports.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimegExportsModule
  ]
})
export class SharedModule { }
