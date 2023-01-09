import { Pipe, PipeTransform } from "@angular/core";


@Pipe({// decorador que necesita obligadamente la clase, proviene de @angular/core
  name:'toUpperCasePers'
})
export class TranformToUpperCasePers implements PipeTransform { //implemmentacion que necesita la clase, proviene de @anglar/coore
  // el primer parametro es el que va a la izquierda en el html, y los demas van a la derecha luego de ':' (param1 | pipe : param2 : paramX..)
  transform(param:string, mayus :boolean = true):string {//funcion implementada que utiliza el pipe para realizar las acciones, siempre retorna algo
    return mayus ? param.toLocaleUpperCase() : param.toLocaleLowerCase();
  }

}