import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NumberPageComponent } from 'src/app/products/pages/number-page/number-page.component';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] = []

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Numeros',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No Comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              }
            ]
          },
          {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                items: [
                    {
                    label: 'Otro Elemento',
                    icon: 'pi pi-cog',
                    }
                ]
          }
        ];
    }

}