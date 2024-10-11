import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,                                                                                                                                                                                                                                                                                        
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = '02databinding';
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.title = 'Hola Mundo';
  }
}

