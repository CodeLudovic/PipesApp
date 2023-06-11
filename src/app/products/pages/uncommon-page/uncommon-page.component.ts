import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Daniel';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Jennifer';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Daniel','Jennifer','Luis', 'Fabian', 'Edgar'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  eraseClient(): void {
      this.clients.shift();
    }

  // KeyValue Pipe

  public person = {
    name: 'Daniel',
    age: '30',
    adress: 'Ontario, Canada'
  }

  //Async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap', value))
  );

  public promiseValue = new Promise<string>((resolve, reject) =>{
    setTimeout(() => {
      resolve('tenemos data en la promesa.');
      console.log('tenemos data en la promesa.');
      this.person.name = 'Jennifer'
    }, 3500);
  })


}
