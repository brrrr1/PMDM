import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  //1 Property Binding
  valoracion = 5;
  imgUrl = 'https://i.makeagif.com/media/10-20-2022/GaCBBA.gif';

  //2 Event Binding
  showUserInfo() {
    alert('Usuario: Nombre del usuario: ' + this.nombre);
    }

  //3 Two-way Binding

  nombre ="Bruno";
}
