import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { MoviesService } from '@services/movies.service';
import { DetailsListComponent } from '@components/details-list/details-list.component';
import { MovieDetail } from '@models/movieDetail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, DetailsListComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  private destroy$ = new Subject<void>();
  private movieId: string;

  movie: MovieDetail | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('movieId')!;
  }

  ngOnInit(): void {
    this.queryData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private queryData(): void {
    this.moviesService.getMovieDetail(this.movieId)
      .pipe(
        takeUntil(this.destroy$),
        catchError(() => {
          return EMPTY;
        }),
      )
      .subscribe(response => {
        this.movie = response;
      });
  }

  goToHome(): void {
    this.router.navigate(['/movie']);
  }
}
