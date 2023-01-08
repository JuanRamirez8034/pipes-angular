import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';
import { People } from '../../interfaces/example-pipes.interfaces';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent implements OnInit {
  // I18nSelect Pipe
  private people  : People[] = [
    {name:'Sther', gender:'female'},
    {name:'Juan', gender: 'male'}
  ];

  public name     : string = 'Sther';
  public gender   : string = 'female';

  public mapGender : any = {
    "male":"Mr",
    "female":"Miss"
  }

  public changeGender ():void {
    
    if(this.people[0].name === this.name){
      this.name = this.people[1].name;
      this.gender = this.people[1].gender;
      return;
    }

    this.name = this.people[0].name;
    this.gender = this.people[0].gender;

  }




  // I18Plural Pipe
  public customers     : string[] = ['Juan', 'Sther', 'Lissette', 'Enrique'];
  private cstmrsAux    : string[] = [];

  public mapPlural : any = {
    "=0":"have no customers waiting",
    "other": "have # customers waiting"
  };//este objeto contiene los elementos "clave:valor" de los posibles casos que puedan ocurrir
    //los casos son los resultados evaluados por la tuveria "pipe"
    // el simbolo de numeral "#" se utiliza para colocar el resultado evaluado por el pipe


  public chnageCustomers(action:string = '-'):void{
    if(action === '-' && this.customers.length > 0){
      this.cstmrsAux.push(`${this.customers.shift()}`);
    }
    if(action === '+' && this.cstmrsAux.length > 0){
      this.customers.push(`${this.cstmrsAux.shift()}`);
    }
  }

  // json pipe
  public myJson : object[] = [
    {
      name : 'Juan',
      lastName : 'Ramirez',
      age: parseInt(new Date().toISOString().slice(0, 4)) -2001,
      gender: 'male'
    },
    {
      name : 'Sther',
      lastName : 'Salazar',
      age: parseInt(new Date().toISOString().slice(0, 4)) -2000,
      gender: 'female'
    },
  ]


  // keyValue pipe
  public Myobject : object = {
    name : 'Juan',
    age  : parseInt(new Date().toISOString().slice(0, 4)) -2001,
    natinality: 'Venezuelan',
    ocupation : 'Ingenier'
  }

  public code : string = `
  <ul class="ml-4 mt-2">
    <li *ngFor="let item of Myobject | keyvalue">
      Index: {{item.key}} -> Value: {{item.value}}
    </li>
  </ul>
  `;
  

  // asyncPipe, solo aplicacble a prmesas y observables
  public myObservable  =  interval(1000);

  public myPromise  = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve('Promise resolved')}, 5000);
  });

  // inyectando el servicio para realizar configuraciones a las propiedades de PrimeNG
  constructor(private primengConfig:PrimeNGConfig){}

  //inicializando las aniaciones para el efecto "splash" en los botones
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
