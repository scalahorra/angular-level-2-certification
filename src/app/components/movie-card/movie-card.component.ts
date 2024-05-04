import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { DurationPipe } from '../../pipes/duration.pipe';
import { BudgetPipe } from '../../pipes/budget.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MovieCardComponent, DurationPipe, BudgetPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
  @Output() movieClicked: EventEmitter<string> = new EventEmitter<string>();

  clickMovie(): void {
    this.movieClicked.emit(this.movie?.id);
  }
}
