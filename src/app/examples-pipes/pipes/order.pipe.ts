import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/example-pipes.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value:Hero[], orderIndex : string = ''): Hero[] {

    switch (orderIndex) {
      case 'name':{
        return value.sort((a,b)=>{
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
        break;
      }

      case 'fly':{
        return value.sort((a,b)=>{
          return a.fly > b.fly ? 1 : a.fly < b.fly ? -1 : 0;
        });
        break;
      }

      case 'color':{
        return value.sort((a,b)=>{
          return a.color > b.color ? 1 : a.color < b.color ? -1 : 0;
        });
        break;
      }
    
      default:{
        return value;
        break;
      }
    }

    // value = value.sort(function (a, b) {
    //   if (a.name > b.name) {return 1;}
    //   if (a.name < b.name) {return -1;}
    //   // a must be equal to b
    //   return 0;
    // });

    // return value;
  }

}
