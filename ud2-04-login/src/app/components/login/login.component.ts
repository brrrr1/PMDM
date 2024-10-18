import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Input() email: string = '';
  @Input() password: string = '';

  guardarFormulario() {
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
  }
}
