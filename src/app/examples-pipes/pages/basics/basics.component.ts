import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  public textExample : string = 'JuAn raMireZ'
  public Date  : Date = new Date();
}
