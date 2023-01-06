import { Component, OnInit } from '@angular/core';
import {MenuItem as PrimeNgMenuItem, PrimeIcons} from 'primeng/api';//interfaz de los items del menu de primeNG

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{
  public itemsMenu : PrimeNgMenuItem[] = [];

  ngOnInit(): void {
    this.itemsMenu = [
      {
        label: 'Angular Pipes',// eiquta de la opcion o item
        icon : PrimeIcons.DESKTOP || 'pi pi-desktop', // se puden colocar iconos con el nombre de la clase o desde la importacion de los iconos
        items:[ // se pueden colocar submenus dentro de los propios items
          {
            label: 'Dates and Texts',
            icon : PrimeIcons.LIST,
            routerLink: '/',// direccion para acceder a traves de los routes
          },
          {
            label: 'Numbers',
            icon : PrimeIcons.HASHTAG,
            routerLink: 'numbers',// direccion para acceder a traves de los routes
          },
          {
            label: 'Not common',
            icon : PrimeIcons.AT,
            routerLink: 'noCommons',// direccion para acceder a traves de los routes
          }
        ]
      },
      {
        label:'Personalized',
        icon: PrimeIcons.PALETTE,
        routerLink: 'pers'
      }
    ];
  }

}
