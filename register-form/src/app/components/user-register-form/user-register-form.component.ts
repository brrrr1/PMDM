import { Component } from '@angular/core';
import { UserDto } from '../../models/user.dto';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrl: './user-register-form.component.css'
})
export class UserRegisterFormComponent {


  comoConocioOptions = ['Google', 'Amigo', 'Profesor'];
  sexOptions = ['Hombre', 'Mujer'];


  submitted = false;


  user = new UserDto('', '', '', '', '', '', '', '', '', false);


  constructor() { }


  addUser() {
    console.log(this.user);
    this.submitted = true;
  }


}
