import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieDetail } from '../models/movieDetail.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly URL = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.URL}/movies`);
  }

  getMovieDetail(movieId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.URL}/movies/${movieId}`);
  }
}
