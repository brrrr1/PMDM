import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrl: './approved.component.css'
})
export class ApprovedComponent implements OnInit{

  constructor(authService : AuthService) {}

ngOnInit(): void {
  this.authService.createSession().subscribe((response) => {
    localStorage.setItem('session_id', response.session_id)});
  const token = localStorage.getItem('token');
  if (token) {
    console.log(token);
  } else {
    window.location.href = '/home';
  }
}



}
