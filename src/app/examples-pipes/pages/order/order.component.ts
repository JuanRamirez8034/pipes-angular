import { Component } from '@angular/core';
import { Hero, Colors } from '../../interfaces/example-pipes.interfaces';

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

  // pipe con parametros
  public orderMode : string = 'name';

  public heroes : Hero[] = [
    {
      name:'Black Panther',
      fly:false,
      color: Colors.black
    },
    {
      name:'Spiderman',
      fly:false,
      color: Colors.red
    },
    {
      name:'Thor',
      fly:true,
      color: Colors.blue
    },
    {
      name:'Hulk',
      fly:false,
      color: Colors.green
    },
  ];

  public orderTable(param:string):void{
    this.orderMode = param;
  }

}
