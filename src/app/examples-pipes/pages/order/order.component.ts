import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public boooolean : boolean = true;

  public toggleUC(){
    this.boooolean = !this.boooolean;
    console.log(this.boooolean);
    
  }

}
