import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './examples-pipes/pages/basics/basics.component';
import { NoCommonsComponent } from './examples-pipes/pages/no-commons/no-commons.component';
import { NumbersComponent } from './examples-pipes/pages/numbers/numbers.component';
import { OrderComponent } from './examples-pipes/pages/order/order.component';

const _routes_ : Routes = [
  {
    path:'',
    pathMatch:'full',
    component: BasicsComponent
    
  },
  {
    path:'order',
    component: OrderComponent
  },
  {
    path:'numbers',
    component: NumbersComponent
  },
  {
    path:'noCommons',
    component: NoCommonsComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(_routes_)
  ], 
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
