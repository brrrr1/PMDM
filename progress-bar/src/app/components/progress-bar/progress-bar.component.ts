import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'

})
export class ProgressBarComponent {
  @Input() value: number = 20;
  @Input() color: string = '';

  cambiarColor(value: number): string {
    if (value < 50) {
      return this.color = 'danger';
    } else if(value < 70) {
      return this.color = 'warning';
    } else if (value < 90) {
      return this.color = 'info';
    } else {
      return this.color = 'success';
    }

}

}
