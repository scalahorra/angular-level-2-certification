import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: 'movies', component: HomeComponent },
  { path: 'movie/:movieId', component: MovieDetailComponent },
  { path: '**', redirectTo: 'movies' },
];
