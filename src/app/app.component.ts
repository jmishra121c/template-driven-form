import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = {
    fName: '',
    lastName: '',
    pan: '',
    mobile: '',
    age: '',
  };
  registerFn() {
    console.log(this.form);
  }
  integerRegex = /^\d*$/;
  title = 'template-driven-form';
}
