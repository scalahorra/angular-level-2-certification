import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Filters } from '../../models/filters.model';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  filters: Filters = {};

  @Output() filtersChanged: EventEmitter<Filters> = new EventEmitter<Filters>();

  constructor() {}

  onChange(): void {
    this.filtersChanged.emit(this.filters);
  }
}
