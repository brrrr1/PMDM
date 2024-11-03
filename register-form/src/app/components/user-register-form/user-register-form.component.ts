import { Component } from '@angular/core';
import { UserDto } from '../../models/user.dto';
import { DniPipe } from '../../pipes/dni.pipe';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.css'], // Fixed typo
  providers: [DniPipe] // Ensure DniPipe is provided
})
export class UserRegisterFormComponent {

  comoConocioOptions = ['Google', 'Amigo', 'Profesor'];
  sexOptions = ['Hombre', 'Mujer'];

  submitted = false;

  user = new UserDto('', '', '', '', '', '', '', '', '', false);
  confirmPassword: string = '';

  constructor(private dniPipe: DniPipe) { }

  validatePasswords(): boolean {
    return this.user.contrasena === this.confirmPassword;
  }

  addUser() {
    if (!this.validatePasswords()) {
      console.error('Passwords do not match');
      return;
    }
    const dniConLetra = this.dniPipe.transform(Number(this.user.nif));
    this.user.nif = dniConLetra;
    console.log(this.user);
    this.submitted = true;
  }

}
