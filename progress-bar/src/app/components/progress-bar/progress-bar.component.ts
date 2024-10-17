import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'

})
export class ProgressBarComponent {
  @Input() value: number = 20;
  @Input() color: string = '';

  cambiarColor(): string {
    if (this.value < 50) {
      return 'danger';
    } else if(this.value < 70) {
      return 'warning';
    } else if (this.value < 90) {
      return 'info';
    } else {
      return 'success';
    }

}

}
