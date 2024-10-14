import { Component, OnInit } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-rating-basic',
	standalone: true,
	imports: [NgbRatingModule],
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.css']
}) 
export class RatingComponent implements OnInit {
	valoracion = 4;
	ratingClass = 'red';
  
	ngOnInit(): void {
	  this.calcRating();
	}
  
	calcRating() {
	  this.ratingClass = this.valoracion < 5 ? 'red' : 'green';
	}
  }