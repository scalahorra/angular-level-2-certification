import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { MoviesService } from '@services/movies.service';
import { MovieCardComponent } from "@components/movie-card/movie-card.component";
import { FiltersComponent } from '@components/filters/filters.component';
import { Movie } from '@models/movie.model';
import { Filters } from '@models/filters.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, MovieCardComponent, FiltersComponent]
})
export class HomeComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  filters: Filters | undefined;

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.queryData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private queryData(): void {
    this.moviesService.getMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.movies = response;
        this.filteredMovies = [...this.movies];
    });
  }

  filtersChanged(filters: Filters): void {
    if (filters?.title && filters?.year) {
      this.filteredMovies = [...this.movies];
    }

    this.filteredMovies = this.movies.filter(movie => {
      const titleMatch = filters?.title ? movie.title.toLowerCase().includes(filters?.title?.toLowerCase()) : true;
      const yearMatch = filters?.year ? movie.release_date.includes(filters?.year?.toString()) : true;
      return titleMatch && yearMatch;
    });
  }

  goToDetail(movieId: string): void {
    this.router.navigate(['/movie', movieId]);
  }

}
