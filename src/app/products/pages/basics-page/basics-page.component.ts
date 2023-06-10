import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameUpper: string = 'daniel';
  public nameLower: string = 'DANIEL';
  public fullname: string = 'dAnIeL oSpInA';


}
