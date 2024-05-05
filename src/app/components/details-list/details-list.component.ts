import { Component, Input } from '@angular/core';
import { MovieDetail } from '@models/movieDetail.model';
import { BudgetPipe } from '@pipes/budget.pipe';
import { DurationPipe } from '@pipes/duration.pipe';
import { JoinPipe } from '@pipes/join.pipe';

@Component({
  selector: 'app-details-list',
  standalone: true,
  imports: [BudgetPipe, DurationPipe, JoinPipe],
  templateUrl: './details-list.component.html',
  styleUrl: './details-list.component.css'
})
export class DetailsListComponent {
  @Input() movieDetail: MovieDetail | undefined;
}
