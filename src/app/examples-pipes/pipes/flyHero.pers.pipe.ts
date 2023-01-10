import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'flyHeroPipePers'
})
export class FlyHeroPersPipe implements PipeTransform {
  transform(arg : boolean):string {
    return arg ? 'Yes, the hero flies' : "No, the hero don't flying";
  }

}