import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularInLinux';
  name = 'Ajay';
  url = 'https://www.google.com';
  data = '';
  myFunction = () =>
  {
    this.data = 'Manoj';
  }
  isSpecial = false;

  //Getting live input value
  currentInput = '';
  getInput(val)
  {
    console.log(val);
    this.currentInput = val;
  }
}
